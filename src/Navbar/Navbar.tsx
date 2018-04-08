import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import AddButton from '../AddButton/AddButton';
import IconButton from '../IconButton/IconButton';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		const buttonIcon = 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png';
		const userIcon = 'http://simpleicon.com/wp-content/uploads/user1.png';
		const contactIcon = 'https://cdn2.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo2-41-512.png';
		const infoIcon = 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/info-circle-outline-512.png';
		return (
			<nav>
				<Container style={{padding: '10px'}}>
					<Row>
						<Col xs={12} sm={12} md={6}>
							<AddButton label="Pridať športovisko" icon={buttonIcon} />
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="Uživateľ" icon={userIcon} />
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="Kontakt" icon={contactIcon} />
						</Col>
						<Col xs={12} sm={4} md={2}>
							<IconButton label="O nás" icon={infoIcon} />
						</Col>
					</Row>
				</Container>
			</nav>
		);
	}
}

export default Navbar;
