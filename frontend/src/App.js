import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Search from './components/Search';
import Results from './controllers/Results';
import config from './config/config.json'

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
			waiting: true
		};
	}

	search = async (search) => {
		let res = await axios.post(config['backend-url'] + '/search', {"search": search})
		console.log(res)
		this.setState({ search, searchSmall: search === '', data: res.data });
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
				<Search onSearch={this.search} center={this.state.searchSmall} />
				{ this._results() }
			</SearchContainer>
		);
	}
}

export default App;
