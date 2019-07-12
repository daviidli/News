import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, ButtonGroup, Collapse } from 'shards-react';
import Article from './Article';
import colors from '../colors';
import ContentLoader from "react-content-loader";
import ReactDOM from 'react-dom';

const StyledCard = styled(Card)`
	/* box-shadow: 0px 0px; */
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;

const StyledCardBody = styled(CardBody)`
	height: 100%;
	overflow-y: auto;
	/* background-color: ${colors.cardBg}; */
	background-image: ${props => {
		if (props.category === 'For') {
			return `linear-gradient(to left, ${colors.for} , ${colors.for1})`;
		} else if (props.category === 'Against') {
			return `linear-gradient(to right, ${colors.against} , ${colors.against1})`;
		} else {
			return `linear-gradient(to right, ${colors.neutral} , ${colors.neutral1})`;
		}
	}};

	::-webkit-scrollbar {
		background-color: #fff;
		width:8px
	}

	::-webkit-scrollbar-track {
		background-color: ${props => {
		if (props.category === 'For') {
			return colors.for1;
		} else if (props.category === 'Against') {
			return colors.against1;
		} else {
			return colors.neutral1;
		}
	}};
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(255,255,255,0.3);
		border-radius:16px;
		border:4px solid rgba(255,255,255,0.3);
	}

	::-webkit-scrollbar-button {display:none}
`;

const StyledTitle = styled(CardTitle)`
	font-size: 14px;
`;

const InnerContainer = styled.div`
	margin-bottom: 8px;
`;

const StyledCardHeader = styled(CardHeader)`
	background-image: ${props => {
		if (props.category === 'For') {
			return `linear-gradient(to left, ${colors.for} , ${colors.for1})`;
		} else if (props.category === 'Against') {
			return `linear-gradient(to right, ${colors.against} , ${colors.against1})`;
		} else {
			return `linear-gradient(to right, ${colors.neutral} , ${colors.neutral1})`;
		}
	}};
	/* color: ${colors.font}; */
	color: #fff;
`;

const StyledFooter = styled(CardFooter)`
	background-color: ${colors.footer};
	color: ${colors.font};
`;

const Link = styled.a`
	color: ${colors.font};

	:hover {
		color: ${colors.linkHover};
	}
`;

class Category extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: false
		};
	}

	scrollTo = (selected) => {
		const selectedNode = document.getElementById(selected);
		const scroller = document.getElementById('scroller-' + this.props.header);
		if (selectedNode && scroller) {
			scroller.scrollTo({
				top: selectedNode.offsetTop - 70,
				left: 0,
				behavior: 'smooth'
			  });
		}
	}

	_toggleCollapse = () => {
		this.setState({ collapse: !this.state.collapse });
	}

	_renderContent = () => {
		const { items, selected } = this.props;

		return items.map(item => {
			return (
				<Article
					footer={items.length}
					key={item.headline}
					item={item}
					selected={item.headline === selected}
					id={item.headline}
				/>
			);
		});
	}

	_renderLoader = () => {
		return (
			<ContentLoader
				height={370}
				width={400}
				speed={2}
				primaryColor="rgba(255, 255, 255, 0.4)"
				secondaryColor="rgba(190, 190, 190, 0.2)"
			>
				<rect x="16" y="13" rx="4" ry="4" width="256" height="13" /> 
				<rect x="0" y="70" rx="5" ry="5" width="400" height="208" /> 
				<rect x="17" y="40" rx="4" ry="4" width="175" height="13" /> 
				<rect x="30" y="302" rx="8" ry="8" width="121" height="40" /> 
				<circle cx="338" cy="321" r="31" />
			</ContentLoader>
		);
	}

	_renderCardContent = () => {
		if (this.props.waiting) {
			return this._renderLoader();
		} else {
			return this._renderContent();
		}
	}

	render() {
		const { className, header, items } = this.props;

		const articleFooter = items.length === 1 ? ' article' : ' articles';

		return (
			<StyledCard className={className}>
				<StyledCardHeader category={header}><b>{ header }</b></StyledCardHeader>
				<StyledCardBody category={header} id={'scroller-' + header}>
					{ this._renderCardContent() }
				</StyledCardBody>
				<StyledFooter>{ items.length + articleFooter }</StyledFooter>
			</StyledCard>
		)
	}
}

export default Category;
