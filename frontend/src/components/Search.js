import React from 'react';
import { InputGroup, FormInput, InputGroupAddon, Button } from 'shards-react';
import styled from 'styled-components';

import colors from '../colors';

const Group = styled(InputGroup)`
	width: 80%;
	top: ${props => props.center ? (window.innerHeight / 2 - 50) + 'px' : '20px'};
	transition: top 500ms ease;
	margin-top: 50px;
`;

const SearchButton = styled(Button)`
	width: 190px;
	/* background-color: #424242;
	box-shadow: 0 0 0 0 #000;
	border: 0 solid #fff;

	:hover {
		background-color: #767676;
	}

	:active {
		background-color: #121212 !important;
	} */
`;

const StyledSearch = styled(FormInput)`
	/* background-color: ${colors.search};
	color: ${colors.font};
*/
	border: 1px solid #ddd;
	z-index: 10;

	:focus {
		/* background-color: ${colors.searchHighlight}; */
		/* color: ${colors.font}; */
		box-shadow: 0 0 0 0 #fff;
		border: 1px solid #999;

		:hover {
			box-shadow: 0 0 0 0 #fff;
			border: 1px solid #666;
		}
	}

	:hover {
		box-shadow: 0 0 0 0 #fff;
		border: 1px solid #aaa;
	}
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
			<Group center={this.props.center}>
				<StyledSearch
					size="lg"
					placeholder="Search..."
					value={this.state.searchQuery}
					onChange={this._onFormChange}
					onKeyDown={this._onKeyDown}
				/>
				<InputGroupAddon type="append">
					<SearchButton theme='dark' onClick={this._handleSearch}>Search</SearchButton>
				</InputGroupAddon>
			</Group>
		);
	}
}

export default Search;
