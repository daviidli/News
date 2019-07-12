import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Search from './components/Search';
import Results from './controllers/Results';
import config from './config/config.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

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

	}

	search = (search) => {
		this.setState({ search, searchSmall: search === '', waiting: true, data: [] });

		this._runSearch(search);
	
	}

	_runSearch = (search) => {
		toast.info('Searching for articles', {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
		});
		toast.success('Running AI algorithm', {
			position: "top-right",
			delay: 3000,
			autoClose: 9000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
});
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
