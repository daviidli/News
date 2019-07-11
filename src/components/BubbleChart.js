import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from 'shards-react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const data01 = [
	{ title: 'hello world', value: 0, r: 100 },
	{ title: 'hello world1', value: 30, r: 100 },
	{ title: 'hello world2', value: 50, r: 100 },
	{ title: 'hello world3', value: 65, r: 100 },
	{ title: 'hello world4', value: 80, r: 100 },
	{ title: 'hello world5', value: 90, r: 100 },
	{ title: 'hello world6', value: 90, r: 100 },
	{ title: 'hello world7', value: 99, r: 100 }
];

class BubbleChart extends React.Component {
	constructor(props) {
		super(props);

		this.data = this.props.data.map(data => {
			return {
				title: data.headline,
				value: data.poli * 100,
				r: 100
			};
		});
	}

	render() {
		const domain = [0, 100];
		const range = [0, 200];

		return (
			<div>
				<ScatterChart width={1100} height={20} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
					<YAxis type="number" dataKey="r" tick={false} tickLine={false} axisLine={false} />
					<XAxis type="number" dataKey="value" height={10} width={80} tick={false} tickLine={false} />
					<ZAxis type="number" dataKey="r" domain={domain} range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this._renderTooltip} />
					<Scatter data={this.data} />
				</ScatterChart>
			</div>
		);
	}
}

export default BubbleChart;
