import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Notification info="Vyhľadávač športovísk s" message="2501 športoviskami" static={true} />
			</div>
		);
	}
}

export default App;
