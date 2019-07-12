import React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, CardHeader, CardBody, Fade } from 'shards-react';

import Category from '../components/Category';
import BubbleChart from '../components/BubbleChart';
import colors from '../colors';
import LineChartComp from '../components/LineChart';

const Container = styled.div`
	margin-top: 20px;
`;

const StyledCol = styled(Col)`
	width: 50%;
`;

const StyledCategory = styled(Category)`
	margin-top: 30px;
	width: 428px;
	height: 500px;
`;

const StyledCard = styled(Card)`
	width: 100%;
	height: 150px;
	margin: 8px;
	margin-top: 30px;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;

const LineCard = styled(StyledCard)`
	height: 350px;
	margin-bottom: 30px;
`;

const StyledCardBody = styled(CardBody)`
	margin-left: -20px;
	/* background: linear-gradient(to left, #18dcff , #ff4d4d); */
`;

const StyledHeaders = styled(CardHeader)`
	/* background-color: ${colors.header}; */
	background: ${`linear-gradient(to right, ${colors.left} , ${colors.right})`};
	/* color: ${colors.font}; */
	color: #fff;
`;

const StyledHeaders1 = styled(CardHeader)`
	background-color: rgba(241, 196, 15,1.0);
	color: #fff;
`;

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: '',
			fade: false
		};

		this.ref = [];
	}

	componentDidMount() {
		this.setState({ fade: true });
	}

	setSelected = (selected, group) => {
		this.setState({ selected });

		if (selected !== '') {
			this.ref[group] && this.ref[group].scrollTo(selected);
		}
	}

	_renderWhenReady = () => {
		if (!this.props.waiting) {
			return (
				<div>
					<Row>
						<Fade in={this.state.fade} timeout={1200}>
							<StyledCard>
								<StyledHeaders><b>Political Spectrum</b></StyledHeaders>
								<StyledCardBody>
									<BubbleChart data={this.props.data} setSelected={this.setSelected} />
								</StyledCardBody>
							</StyledCard>
						</Fade>
					</Row>
					<Row>
						<Fade in={this.state.fade} timeout={1800}>
							<LineCard>
								<StyledHeaders1><b>Historic Trends</b></StyledHeaders1>
								<StyledCardBody>
									<LineChartComp trend={this.props.trend} />
								</StyledCardBody>
							</LineCard>
						</Fade>
					</Row>
				</div>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<Container className={this.props.className}>
				<Row>
					{
						['For', 'Neutral', 'Against'].map((category, i) => {
							return (
								<Fade in={this.state.fade} key={category} timeout={300 + (250 * i)}>
									<StyledCol key={category}>
										<StyledCategory
											header={category}
											key={category}
											items={this.props.data.filter(data => data.group === i)}
											selected={this.state.selected}
											ref={ref => { this.ref[i] = ref; }}
											waiting={this.props.waiting}
										/>
									</StyledCol>
								</Fade>
							);
						})
					}
				</Row>
				{ this._renderWhenReady() }
			</Container>
		)
	}
}

export default Results;
