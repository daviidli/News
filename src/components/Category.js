import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const StyledCardBody = styled(CardBody)`
	height: 100%;
	overflow-y: auto;
`;

class Category extends React.Component {
	render() {
		const { className, header, items } = this.props;

		const articleFooter = items.length === 1 ? ' article' : ' articles';

		return (
			<Card className={className}>
				<CardHeader><b>{ header }</b></CardHeader>
				<StyledCardBody>
					{
						items.map(item => {
							return (
								<div>
									<CardTitle><a href={item.url}>{ item.headline }</a></CardTitle>
									<p>{ item.summary }</p>
								</div>
							);
						})
					}
				</StyledCardBody>
				<CardFooter>{ items.length + articleFooter }</CardFooter>
			</Card>
		)
	}
}

export default Category;
