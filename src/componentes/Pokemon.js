import React from "react";
import "../css/pokemon.css";

const Pokemon = (props) => {
	return (
		<div className="contenedor-pokemon">
			<div className="contenedor-pokemon-unico">
				<p className="tipo-pokemon">
					<strong>{props.type}</strong>
				</p>
				<img
					className="imagen-pokemon"
					src={require(`../img/${props.img}.png`)}
					alt="imagen de{props.name}"
				/>
				<p className="id-pokemon">
					<strong>{props.id}</strong>
				</p>
				<p className="name-pokemon">
					<strong>{props.name}</strong>
				</p>
				<p className="powerlevel-pokemon">
					Nivel de poder: <strong>{props.powerLevel}</strong>
				</p>
				<p className="agresivo-pokemon" value="{props.agressive}">
					<img src={require(`../img/angy.png`)} alt="imagen de estado" />
				</p>
			</div>
		</div>
	);
}

export default Pokemon;
