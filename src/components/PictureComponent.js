import React, {Component} from 'react';

class PictureComponent extends Component {


	render() {

		let {msg, iUrl,txt} = this.props;
		return (
			<div>
				<h3>{msg}</h3>
				<img src={iUrl} alt=""/>
				<p>{txt}</p>
			</div>
		);
	}
}

export default PictureComponent;
