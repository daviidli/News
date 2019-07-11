import React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, CardHeader, CardBody } from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Category from '../components/Category';
import fakeData from '../fakeData';
import BubbleChart from '../components/BubbleChart';

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
	/* margin-left: 16px;
	margin-right: 16px; */
	margin-top: 50px;
	width: 370px;
	height: 500px;
`;

const StyledCard = styled(Card)`
	width: 100%;
	height: 175px;
	margin: 15px;
	margin-top: 30px;
`;

const StyledCardBody = styled(CardBody)`
	margin-left: -30px;
`;

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.fakeData = fakeData;
	}

	render() {
		return (
			<div>
				<Row>
					{
						['For', 'Neutral', 'Against'].map((category, i) => {
							return (
								<StyledCol>
									<StyledCategory
										header={category}
										key={category}
										items={this.fakeData.results.filter(data => data.group === i)}
									/>
								</StyledCol>
							);
						})
					}
				</Row>
				<Row>
					<StyledCard>
						<CardHeader><b>Political Spectrum</b></CardHeader>
						<StyledCardBody>
							<BubbleChart />
						</StyledCardBody>
					</StyledCard>
				</Row>
			</div>
		)
	}
}

export default Results;
