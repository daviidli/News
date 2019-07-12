import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from 'shards-react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const StypedXAxis = styled(XAxis)`
// 	color
// `;

class BubbleChart extends React.Component {
	constructor(props) {
		super(props);

		this.data = this.props.data.map(data => {
			return {
				title: data.headline,
				// value: (0.5 - data.p_group) * -100,
				value: data.p_group * 100,
				r: 0,
				group: data.group
			};
		});

		this.state = {
			selected: ''
		};
	}

	_onMouseEnter = (e) => {
		// console.log('click, ', e.title);
		this.setState({ selected: e.title });
		this.props.setSelected(e.title, e.group);
	}

	_onMouseLeave = (e) => {
		// console.log('click, ', e.title);
		this.setState({ selected: '' });
		this.props.setSelected('', -1);
	}

	render() {
		const nums = this.data.map(data => data.value);
		const domain = [Math.floor(Math.min(...nums)), Math.ceil(Math.max(...nums))];
		const range = [350, 350];

		return (
			<div>
				<ScatterChart width={1280} height={45} margin={{ top: 0, right: 10, bottom: 0, left: 10 }}>
					<YAxis type="number" dataKey="r" tick={false} tickLine={false} axisLine={false} />
					<XAxis type="number" dataKey="value" domain={domain} allowDecimals={false} tickCount={3} />
					<ZAxis type="number" dataKey="r" range={range} />
					{
						this.data.map(item => {
							let fill = null;

							if (this.state.selected === item.title) {
								fill = 'rgb(0,0,0, 0.7)';
							} else {
								switch (item.group) {
									case 0:
										fill = 'rgb(106,118,255, 0.8)';
										break;
									case 1:
										fill = 'rgb(181,108,210, 0.8)';
										break;
									case 2:
										fill = 'rgb(255,98,164, 0.8)';
										break;
									default:
										fill = 'rgba(255,255,255, 0.8)';
								}
							}

							return (
								<Scatter
									data={[item]}
									onMouseEnter={this._onMouseEnter}
									onMouseLeave={this._onMouseLeave}
									fill={fill}
									key={item.title}
								/>
							)
						})
					}
				</ScatterChart>
			</div>
		);
	}
}

export default BubbleChart;
