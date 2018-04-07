import * as React from 'react';
import './IconButton.css';

type Props = {
	label: string,
	icon: string,
};

class IconButton extends React.Component<Props> {
	render() {
		return (
			<div className="buttonIcon">
				<div className="icon" style={{ backgroundImage: `url(${this.props.icon})` }} />
				<div className="text">
					{this.props.label}
				</div>
			</div>
		);
	}
}

export default IconButton;
