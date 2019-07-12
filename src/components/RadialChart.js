import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from 'shards-react';
import { PieChart, Pie, Cell } from 'recharts';
import colors from '../colors';

class RadialChart extends React.Component {
	constructor(props) {
		super(props);

		const { bias } = this.props;
		const biasVal = parseInt((bias * 100).toFixed(2));

		this.data = [
			{
				name: 'hi',
				value: biasVal
			},
			{
				name: 'filler',
				value: 100 - biasVal
			}
		];
	}

	_getColor = () => {
		const { group } = this.props;

		switch (group) {
			case 0:
				return colors.for;
			case 1:
				return colors.neutral;
			case 2:
				return colors.against;
			default:
				return colors.neutral;
		}
	}

	render() {
		const fill = this._getColor();
		return (
			<div>
				<PieChart width={50} height={50}>
					<Pie
						data={this.data}
						cx={25}
						cy={25}
						innerRadius={12}
						outerRadius={20}
						fill="#8884d8"
						paddingAngle={5}
					>
						<Cell fill={fill} />
						<Cell fill={'#ddd'} />
					</Pie>
				</PieChart>
			</div>
		);
	}
}

export default RadialChart;
