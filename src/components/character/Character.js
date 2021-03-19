import React, {Component} from 'react';
import './Character.css';

class Character extends Component {

	render() {
		let {item, chooseCharacter} = this.props;

		return (
			<div className={'item'}>
				<h3>{item.name.first} {item.name.last}</h3>
				<img src={item.images?.main} alt=""/>
				<button
					onClick={() => chooseCharacter(item.id)}
				>details
				</button>
			</div>
		);
	}
}

export default Character;
