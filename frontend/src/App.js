import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Search from './components/Search';
import Results from './controllers/Results';
import config from './config/config.json'
<<<<<<< Updated upstream
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
=======
import googleTrends from 'google-trends-api';
import HttpsProxyAgent from 'https-proxy-agent';

>>>>>>> Stashed changes
const SearchContainer = styled.div`
	height: ${ window.innerHeight.toString() + 'px' };
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

// const StyledResults = styled(Results)`
	/* padding-top: -20px; */
// `;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			searchSmall: true,
			data: [],
			waiting: false
		};

		this.proxyAgent =  new HttpsProxyAgent('http://proxy-host:8888/');
	}

	search = (search) => {
		this.setState({ search, searchSmall: search === '', waiting: true, data: [] });

		// this._runSearch(search);
		this._runTrends(search);
	}

	_runSearch = (search) => {
		axios.post(config['backend-url'] + '/search', {"search": search}).then(res => {
			const data = res.data.results === undefined ? [] : res.data.results;
			let num_results = res.data.results.length
			toast('Found ' + num_results.toString() + " articles!", {
				position: "top-right",
				bodyClassName: css({
			    color: 'black'
			  }),
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
				});

			this.setState({ data: data, waiting: false });
		});
	}

	_runTrends = (search) => {
		googleTrends.interestOverTime({keyword: search, agent: this.proxyAgent})
			.then(results => {
				console.log('These results are awesome', results);
			});
	}

	_results = () => {
		if (this.state.searchSmall) {
			return null;
		}

		return <Results data={this.state.data} waiting={this.state.waiting} />;
	}

	render() {
		return (
			<SearchContainer>
			<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover
			/>
			<ToastContainer />
				<Search onSearch={this.search} center={this.state.searchSmall} />
				{ this._results() }
			</SearchContainer>
		);
	}
}

export default App;
