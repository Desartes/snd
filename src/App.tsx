import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';
import Main from './Components/Main/Main';
import Results from './Components/Results/Results';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Notification info="Vyhľadávač športovísk s" message="2501 športoviskami" static={true} />
				<Main />
				<Results />
				<Footer />
			</div>
		);
	}
}

export default App;
