import * as React from 'react';
import './InfoLabel.css';

type Props = {
	label: string,
};

class InfoLabel extends React.Component<Props> {
	static position = 0;
	constructor(props: Props) {
		super(props);
		InfoLabel.position++;
	}

	render() {
		return (
			<div className="infoLabel">
				<div className="icon">{InfoLabel.position}</div>
				<div className="label">{this.props.label}</div>
			</div>
		);
	}
}

export default InfoLabel;
