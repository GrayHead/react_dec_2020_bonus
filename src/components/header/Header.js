import React, {Component} from 'react';
import './Header.css';

class Header extends Component {


	state = {
		counter: 0
	};


	increment = () => {
		this.setState({counter: ++this.state.counter});
		console.log(this.state.counter);

	};

	render() {
		console.log('render');
		return (
			<div className={'target'}>
				<button
					onClick={this.increment}>
					click me {this.state.counter}
				</button>

			</div>
		);
	}
}

export default Header;
