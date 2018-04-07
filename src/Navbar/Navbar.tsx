import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Navbar.css';
import AddButton from '../AddButton/AddButton';

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Container style={{background: 'red', padding: '10px'}}>
					<Row>
						<Col sm={3}>
							<AddButton />
						</Col>
						<Col sm={4}>
							hej
						</Col>
						<Col sm={4}>
							hej
						</Col>
					</Row>
				</Container>
			</nav>
		);
	}
}

export default Navbar;
