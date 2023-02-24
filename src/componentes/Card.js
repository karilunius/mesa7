//import React, { Component, Fragment } from "react";
import React from 'react';
import "../css/card.css";
import Pokemon from './Pokemon.js';
//import Data from '../Data.json';


class Card extends React.Component {
	render() {
		return (
			<div className="contenedor-card">
				<h2 className='card-tipo'>
					<strong>Water</strong>
				</h2>
				<Pokemon />
			</div>
		);
	}
}
export default Card;


