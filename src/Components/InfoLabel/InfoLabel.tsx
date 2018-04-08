import * as React from 'react';
import './InfoLabel.css';

type Props = {
	num: string,
	label: string,
};

class InfoLabel extends React.Component<Props> {
	render() {
		return (
			<div className="infoLabel">
				<div className="icon">{this.props.num}</div>
				<div className="label">{this.props.label}</div>
			</div>
		);
	}
}

export default InfoLabel;
