import React, {Component} from 'react';
import User from './components/User/User';

class App extends Component {


	state = {
		users: []
	};

	constructor(props, context) {
		super(props, context);
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(value => {
				this.setState({users: value});
			});

	}

	render() {
		console.log('redner');
		let {users} = this.state;
		return (
			<div>
				{
					users.map(value => <User item={value}/>)
				}


			</div>
		);
	}
}

export default App;
