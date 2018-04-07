import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Navbar.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Container style={{background: 'red'}}>
					<Row>
						<Col>
							<ButtonIcon />
						</Col>
						<Col>
							something
						</Col>
						<Col>
							something
						</Col>
					</Row>
				</Container>
			</nav>
		);
	}
}

export default Navbar;
