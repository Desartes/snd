import * as React from 'react';
import { Col } from 'react-grid-system';
import './ResultItem.css';

class ResultItem extends React.Component {
	render() {
		return (
			<div>
				<Col xs={12}>
					<Col xs={2}>
						ICON
					</Col>
					<Col xs={2}>
						some texting
					</Col>
				</Col>
			</div>
		);
	}
}

export default ResultItem;
