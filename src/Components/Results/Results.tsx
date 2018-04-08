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
						<InfoLabel num="1" label="výber športoviska" />
					</Row>
					<Row>
						<InfoLabel num="2" label="šport na dlani" />
					</Row>
				</Container>
			</div>
			
		);
	}
}

export default Results;
