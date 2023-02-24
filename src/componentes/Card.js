//import React, { Component, Fragment } from "react";
import React from "react";
import "../css/card.css";
import Pokemon from "./Pokemon.js";
//import Data from '../Data.json';

function Card() {
	return (
		<div className="Card">
			<div className="contenedor-card">
				<Pokemon
					type="Water"
					img="pokemon"
					id="1"
					name="Pokemon"
					powerLevel="70"
					agressive="true"
				/>
				<Pokemon
					type="Fire"
					img="pokemon"
					id="2"
					name="Pokemon"
					powerLevel="70"
					agressive="true"
				/>
			</div>
		</div>
	);
}
export default Card;
