import "./css/app.css";
import React from "react";
import Card from "./componentes/Card.js";


class App extends React.Component{
	render() {
		return (
			<div className="App">
				<div className="contenedor-principal">
					<h1>Pokemon Cards</h1>
					<Card />
				</div>
			</div>
		);
	}
}

export default App;
