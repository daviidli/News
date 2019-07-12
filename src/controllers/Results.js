import React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, CardHeader, CardBody } from 'shards-react';

import Category from '../components/Category';
import fakeData from '../fakeData';
import BubbleChart from '../components/BubbleChart';
import colors from '../colors';
import LineChartComp from '../components/LineChart';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
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

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.fakeData = fakeData;

		this.state = {
			selected: ''
		};

		this.ref = [];
	}

	setSelected = (selected, group) => {
		this.setState({ selected });

		if (selected !== '') {
			this.ref[group] && this.ref[group].scrollTo(selected);
		}
	}

	render() {
		return (
			<div className={this.props.className}>
				<Row>
					{
						['For', 'Neutral', 'Against'].map((category, i) => {
							return (
								<StyledCol>
									<StyledCategory
										header={category}
										key={category}
										items={this.fakeData.results.filter(data => data.group === i)}
										selected={this.state.selected}
										ref={ref => { this.ref[i] = ref; }}
									/>
								</StyledCol>
							);
						})
					}
				</Row>
				<Row>
					<StyledCard>
						<StyledHeaders><b>Political Spectrum</b></StyledHeaders>
						<StyledCardBody>
							<BubbleChart data={this.fakeData.results} setSelected={this.setSelected} />
						</StyledCardBody>
					</StyledCard>
				</Row>
				<Row>
					<LineCard>
						<CardHeader><b>Historic Trends</b></CardHeader>
						<StyledCardBody>
							<LineChartComp />
						</StyledCardBody>
					</LineCard>
				</Row>
			</div>
		)
	}
}

export default Results;
