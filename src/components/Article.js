import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card, CardImg, CardHeader, CardBody, CardFooter, CardTitle, Button, ButtonGroup, Collapse } from 'shards-react';
import colors from '../colors';
import RadialChart from './RadialChart';

const StyledTitle = styled(CardTitle)`
	font-size: 16px;
	margin: 12px;
`;

const InnerContainer = styled.div`
	margin-bottom: 8px;
`;

const StyledFooter = styled(CardFooter)`
	background-color: ${colors.footer};
	color: ${colors.font};
`;

const Link = styled.a`
	color: ${colors.font};

	:hover {
		color: ${props => {
			switch (props.group) {
				case 0:
					return colors.for;
				case 1:
					return colors.neutral;
				case 2:
					return colors.against;
				default:
					return colors.neutral;
			}
		}};
	}
`;

const Summary = styled.span`
	color: ${colors.font};
	line-height: 1.25;
	font-style: none;
`;

const SummaryContainer = styled.div`
	margin: 8px;
`;

const StyledImg = styled.img`
	object-fit: cover;
	height: 180px;
`;

const StyledCard = styled(Card)`
	/* box-shadow: ${props => props.selected ? '0 4px 8px 0 rgb(254,229,173,0.3), 0 6px 20px 0 rgb(254,229,173,0.26)' : '0 0 0 0 rgb(0,0,0,0)'}; */
	box-shadow: ${props => props.selected ? '0 0 4px 2px rgb(0,0,0, 0.5)' : '0 0 0 0 #fff'};
	/* border-radius: 5px; */
`;

const StyledCardBody = styled(CardBody)`
	padding: 16px;
`;

const StyledRow = styled(Row)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledCol = styled(Col)`
	justify-self: flex-end;
	padding-left: 105px;
`;

class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: false
		};
	}

	_toggleCollapse = () => {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		const { footer, item, selected, id } = this.props;

		const articleFooter = footer === 1 ? ' article' : ' articles';

		return (
			<InnerContainer id={id}>
				<StyledCard selected={selected} >
					<StyledTitle><Link href={item.url} group={item.group} target='_blank'>{ item.headline }</Link></StyledTitle>
					<StyledImg src={item.image} />
					<StyledCardBody>
						<StyledRow>
							<Col>
								<Button theme='dark' pill size='sm' onClick={this._toggleCollapse}>Summary</Button>
							</Col>
							<StyledCol>
								Bias:
							</StyledCol>
							<Col>
								<RadialChart bias={item.subjectivity} group={item.group} />
							</Col>
						</StyledRow>
						<Row>
							<Collapse open={this.state.collapse}>
								<SummaryContainer className="p-3 mt-3 border rounded">
									<Summary>
										{ item.summary }
									</Summary>
								</SummaryContainer>
							</Collapse>
						</Row>
					</StyledCardBody>
				</StyledCard>
			</InnerContainer>
		)
	}
}

export default Article;
