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
				<div className="text">
					{this.props.label}
				</div>
				<div className="icon" style={{ backgroundImage: `url(${this.props.icon})` }} />
			</div>
		);
	}
}

export default IconButton;
