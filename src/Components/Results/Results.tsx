import * as React from 'react';
import { Row, Container } from 'react-grid-system';
import './Results.css';
import InfoLabel from '../InfoLabel/InfoLabel';

class Results extends React.Component {
	render() {
		return (
			<div className="results">
				<Container>
					<Row>
						<InfoLabel label="výber športoviska" />
					</Row>
					<Row>
						<InfoLabel label="šport na dlani" />
					</Row>
				</Container>
			</div>
			
		);
	}
}

export default Results;
