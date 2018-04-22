import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';
import Main from './Components/Main/Main';
import Results from './Components/Results/Results';
import Footer from './Components/Footer/Footer';
import Result from './Model/sample';

class App extends React.Component {
	constructor(props: Object) {
		super(props);
		this.searchBarChange = this.searchBarChange.bind(this);
	}
	searchBarChange(event: React.FormEvent<HTMLInputElement>) {
		console.log(event, this);
		return ;
	}
	render() {
		return (
			<div>
				<Navbar />
				<Notification info="Vyhľadávač športovísk s" message="2501 športoviskami" static={true} />
				<Main searchBarHandler={this.searchBarChange} />
				<Results data={Result} />
				<Footer />
			</div>
		);
	}
}

export default App;
