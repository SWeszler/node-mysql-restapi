import React, { Component } from 'react';
import './App.css';
import Car from './Car';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: [],
			id_car: '',
			brand: '',
			model: '',
			engine: ''
		}
	}

	componentDidMount() {
		this.refreshList();
	}

	refreshList() {
		fetch('http://localhost:8080/cars')
		.then(res => res.json())
		.then(json => {
			const cars = json.message;
			this.setState({cars});
		});
	}

	deleteCar = (id_car) => {
		fetch(`http://localhost:8080/cars/${id_car}`,{
			method: 'DELETE'
		}).then(res => {
			this.refreshList();
		});
	}

	editCar = (id_car) => {
		const index = this.state.cars.findIndex(car => {
			return car.id_car === id_car
		});
		const car = Object.assign({}, this.state.cars[index]);
		this.setState({id_car: car.id_car});
		this.setState({brand: car.brand});
		this.setState({model: car.model});
		this.setState({engine: car.engine});
	}

	handleBrandChange = (e) => {
		this.setState({brand: e.target.value});
	}

	handleModelChange = (e) => {
		this.setState({model: e.target.value});
	}

	handleEngineChange = (e) => {
		this.setState({engine: e.target.value});
	}

	submitCar = (e) => {
		console.log(this.state.id_car);
		fetch(`http://localhost:8080/cars/${this.state.id_car}`,{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				brand: this.state.brand,
				model: this.state.model,
				engine: this.state.engine
			})
		}).then(res => {
			this.refreshList();
		});
	}

	addCar = (e) => {

		fetch(`http://localhost:8080/cars/`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				brand: this.state.brand,
				model: this.state.model,
				engine: this.state.engine
			})
		}).then(res => {
			this.refreshList();
		});
	}

	cancelEdit = (e) => {
		this.setState({id_car: ''});
		this.setState({brand: ''});
		this.setState({model: ''});
		this.setState({engine: ''});
	}

	render(){
		return(
			<div className="App">
				<h1>Manage Cars</h1>
				<ul>
					{
						this.state.cars.map(car => {
							return(<Car 
								car={car}
								key={car.id_car}
								delEvent={this.deleteCar.bind(this, car.id_car)}
								editEvent={this.editCar.bind(this, car.id_car)}
								></Car>)
						})
					}
				</ul>

				<div>
					<input readOnly type="text" value={this.state.id_car} placeholder="id..."></input>
				</div>
				<div>
					<input type="text" 
					value={this.state.brand} 
					onChange={this.handleBrandChange} placeholder="brand..."></input>
				</div>
				<div>
					<input type="text"
					value={this.state.model} 
					onChange={this.handleModelChange} placeholder="model..."
					></input>
				</div>
				<div>
					<input type="text"
					value={this.state.engine} 
					onChange={this.handleEngineChange} placeholder="engine..."	
					></input>
				</div>
				<div>
				{this.state.id_car === '' ? <button onClick={this.addCar}>Add New</button> : null }
				{this.state.id_car !== '' ? <button onClick={this.cancelEdit}>Cancel</button> : null }
				{this.state.id_car !== '' ? <button onClick={this.submitCar}>Submit</button> : null }
				
				</div>

			</div>
		);
	}
}

export default App;