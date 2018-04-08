import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Logo from '../../images/logo.png';
import './Main.css';
import SearchBar from '../SearchBar/SearchBar';
import IconButton from '../IconButton/IconButton';

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
					<Row>
						<Col xs={12} sm={5} md={3} xl={2} style={{ padding: '10px' }}>
							<IconButton
								label="Použi moju polohu"
								icon="https://www.shareicon.net/download/2015/10/03/111626_map.ico"
								color="white"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<SearchBar />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Main;
