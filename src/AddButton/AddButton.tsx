import * as React from 'react';
import './AddButton.css';

type Props = {
	label: string,
};

class ButtonIcon extends React.Component<Props> {
	render() {
		return (
			<div className="buttonIcon">
				<div className="icon" />
				<div className="text">
					{this.props.label}
				</div>
			</div>
		);
	}
}

export default ButtonIcon;
