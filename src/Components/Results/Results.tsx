import * as React from 'react';
import { Row, Container } from 'react-grid-system';
import './Results.css';
import InfoLabel from '../InfoLabel/InfoLabel';
import ResultItem from '../ResultItem/ResultItem';

type Props = {
	data: Object,
};

type State = {
	data: Object,
};

class Results extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			data: Object.assign({}, props.data),
		};
	}

	render() {
		const { data } = this.state;
		let renderingData;
		if (!data) {
			renderingData = (
				<Container>
					<Row> <InfoLabel label="výber športoviska" /> </Row>
					<Row> <InfoLabel label="šport na dlani" /> </Row>
				</Container>
			);
		} else {
			renderingData = (
				<Container>
					<ResultItem />
				</Container>
			);
		}
		return (
			<div className="results">
				{renderingData}
			</div>
			
		);
	}
}

export default Results;
