import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import AddButton from '../AddButton/AddButton';
import IconButton from '../IconButton/IconButton';

import PlusIcon from '../../images/icons/plus.png';
import UserIcon from '../../images/icons/user.png';
import ContactIcon from '../../images/icons/contact.png';
import AboutIcon from '../../images/icons/about.png';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Container style={{padding: '10px'}}>
					<Row>
						<Col xs={12} sm={12} md={6}>
							<AddButton label="Pridať športovisko" icon={PlusIcon} />
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="Uživateľ" icon={UserIcon} color="rgb(34, 199, 199)"/>
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="Kontakt" icon={ContactIcon} color="rgb(34, 199, 199)"/>
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="O nás" icon={AboutIcon} color="rgb(34, 199, 199)"/>
						</Col>
					</Row>
				</Container>
			</nav>
		);
	}
}

export default Navbar;
