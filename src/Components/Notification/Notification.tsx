import * as React from 'react';
import './Notification.css';
import { Container, Row, Col } from 'react-grid-system';

type Props = {
	info: string,
	message: string,
	static: boolean,
};

type State = {
	class: string,
};

class Notification extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			class: 'notification',
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ class: 'notification notification-slide' });
			if (this.props.static) {
				return ;
			}
			setTimeout(() => this.setState({ class: 'notification' }), 4500);
		// tslint:disable-next-line:align
		}, 300);
	}
	render() {
		return (
			<div className={this.state.class}>
				<Container>
					<Row>
						<Col xs={12}>
							<div className="info">{this.props.info}</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<div className="message">{this.props.message}</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Notification;
