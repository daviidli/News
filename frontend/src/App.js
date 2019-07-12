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
import logo from '../src/logo.svg';

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

const ImageContainer = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	/* top: 200px; */
	/* margin-bottom: -100px; */
`;

const CC = styled.div`
	margin-top: 250px;
	margin-bottom: -400px;
`;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			searchSmall: true,
			data: [],
			waiting: false,
			trend: []
		};
	}

	search = (search) => {
		this.setState({ search, searchSmall: search === '', waiting: true, data: [], trend: [] });

		this._runSearch(search);
	}

	_runSearch = (search) => {
		if (search !== '') {
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
		}
		axios.post(config['backend-url'] + '/search', {"search": search}).then(res => {
			const data = res.data.results === undefined ? [] : res.data.results;
			console.log(data);
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

			this.setState({ data: data, waiting: false, trend: JSON.parse(res.data.trends).default.timelineData });
		});
	}

	_results = () => {
		if (this.state.searchSmall) {
			return null;
		}

		return <Results data={this.state.data} waiting={this.state.waiting} trend={this.state.trend} />;
	}

	_renderHeader = () => {
		if (!this.state.searchSmall) {
			return null;
		}

		return (
<CC>
<ImageContainer src={logo} />
			<h2>InformMi</h2>
</CC>
		);
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
				{ this._renderHeader() }
				<Search onSearch={this.search} center={this.state.searchSmall} />
				{ this._results() }
			</SearchContainer>
		);
	}
}

export default App;
