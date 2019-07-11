import React from 'react';
import './App.css';
import styled from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Search from './components/Search';
import Results from './controllers/Results';

const SearchContainer = styled.div`
	height: ${ window.innerHeight.toString() + 'px' };
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			searchSmall: false
		};
	}

	search = (search) => {
		this.setState({ search, searchSmall: search === '' });
	}

	_results = () => {
		if (this.state.searchSmall) {
			return null;
		}

		return <Results />;
	}

	render() {
		return (
			<SearchContainer>
				<Search onSearch={this.search} />
				{ this._results() }
			</SearchContainer>
		);
	}
}

export default App;
