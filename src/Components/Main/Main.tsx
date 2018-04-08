import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Logo from '../../images/logo.png';

import './Main.css';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Container style={{ padding: '10px' }}>
					<Row>
						<Col xs={12}>
							<img id="logo" src={Logo} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Main;
