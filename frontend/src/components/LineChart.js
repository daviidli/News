import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from 'shards-react';
import { AreaChart, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
import moment from 'moment';
import colors from '../colors';

class LineChartComp extends React.Component {
	constructor(props) {
		super(props);

		const now = moment();

		// this.data = (new Array(14).fill(0)).map((v, i) => {
		// 	const current = now.subtract(i, 'days').format('YYYY-MM-DD');

		// 	return {
		// 		date: current,
		// 		For: Math.floor(Math.random() * 100),
		// 		Neutral: Math.floor(Math.random() * 100),
		// 		Against: Math.floor(Math.random() * 100)
		// 	};
		// }).reverse();
		const length = this.props.trend.length;

		this.data = this.props.trend.map(data => {
			return {
				date: data.formattedAxisTime,
				value: data.value[0]
			};
		}).slice(length - 60, length);

		console.log(this.data);

		// this.data = [
		// 	{
		// 		date: 'Jan 1',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	},
		// 	{
		// 		date: 'hi',
		// 		for: 1,
		// 		neutral: 5,
		// 		against: 0
		// 	}
		// ];
	}

	// _getColor = () => {
	// 	const { group } = this.props;

	// 	switch (group) {
	// 		case 0:
	// 			return colors.for;
	// 		case 1:
	// 			return colors.neutral;
	// 		case 2:
	// 			return colors.against;
	// 		default:
	// 			return colors.neutral;
	// 	}
	// }

	render() {
		return (
			<AreaChart width={1280} height={250} data={this.data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<XAxis type='category' dataKey="date" />
				<YAxis tickCount={2} />
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				{/* <Legend /> */}
				<Area type="monotone" dataKey="value" stroke={'rgba(241, 196, 15,1.0)'} fill='rgba(241, 196, 15,0.3)' strokeWidth={2} activeDot={{ r: 4 }} />
				{/* <Area type="monotone" dataKey="Neutral" stroke={colors.neutral} fill='rgb(181,108,210, 0.3)' strokeWidth={2} activeDot={{ r: 4 }} />
				<Area type="monotone" dataKey="Against" stroke={colors.against} fill='rgb(255,98,164, 0.3)' strokeWidth={2} activeDot={{ r: 4 }} /> */}
			</AreaChart>
		);
	}
}

export default LineChartComp;
