import React, {Component} from 'react';
import './App.css';

class Car extends Component {

	render() {
		return(
			<div className="item-container">
				<span>{this.props.car.id_car}.</span>
				<span>{this.props.car.brand}</span>
				<span>{this.props.car.model}</span>
				<span>{this.props.car.engine}</span>
				<button onClick={this.props.editEvent}>Edit</button>
				<button onClick={this.props.delEvent}>X</button>
			</div>
		);
	}
}

export default Car;