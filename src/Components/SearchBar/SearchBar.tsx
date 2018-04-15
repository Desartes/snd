import * as React from 'react';
import { Col, Row } from 'react-grid-system';
import SearchIcon from '../../images/icons/search.png';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchBar">
				<Row>
					<Col xs={9} sm={10}>
						<div className="inputText">some text</div>
					</Col>
					<Col xs={3} sm={2} style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}>
						<img className="findIcon" src={SearchIcon} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default SearchBar;
