import React from 'react';
import { InputGroup, FormInput, InputGroupAddon, Button } from 'shards-react';
import styled from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const Group = styled(InputGroup)`
	width: 70%;
`;

const SearchButton = styled(Button)`
	width: 190px;
`;

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchQuery: ''
		};
	}

	_onFormChange = (e) => {
		this.setState({ searchQuery: e.target.value });
	}

	_onKeyDown = (e) => {
		if (e.key === 'Enter') {
			this._handleSearch();
		} else if (e.key === 'Escape') {
			this.setState({ searchQuery: '' }, this._handleSearch);
		}
	}

	_handleSearch = () => {
		this.props.onSearch(this.state.searchQuery);
	}

	render() {
		return (
			<Group>
				<FormInput
					size="lg"
					placeholder="Search..."
					value={this.state.searchQuery}
					onChange={this._onFormChange}
					onKeyDown={this._onKeyDown}
				/>
				<InputGroupAddon type="append">
					<SearchButton onClick={this._handleSearch}>Search</SearchButton>
				</InputGroupAddon>
			</Group>
		);
	}
}

export default Search;
