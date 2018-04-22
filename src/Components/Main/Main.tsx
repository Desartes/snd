import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Logo from '../../images/logo.png';
import LocationIcon from '../../images/icons/navigator.png';
import SearchBar from '../SearchBar/SearchBar';
import IconButton from '../IconButton/IconButton';
import InfoRectangle from '../InfoRectangle/InfoRectangle';
import './Main.css';

type Props = {
	searchBarHandler: Function;
};

class Main extends React.Component<Props> {
	render() {
		return (
			<div className="main">
				<Container style={{ padding: '5px' }}>
					<Row>
						<Col xs={12}>
							<img id="logo" src={Logo} />
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={5} md={3} xl={2} style={{ padding: '10px' }}>
							<IconButton
								label="Použi moju polohu"
								icon={LocationIcon}
								color="white"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} style={{ padding: '5px' }}>
							<SearchBar onChange={this.props.searchBarHandler} />
						</Col>
					</Row>
					<Row>
						<Col xs={4} md={2} lg={2} xl={1} offset={{xs: 0, sm: 0, md: 0, lg: 0}} style={{padding: '15px'}}>
							<InfoRectangle />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Main;
