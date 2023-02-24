import React from "react";
import "../css/pokemon.css";

const Pokemon = (props) => {
	return (
		<div className="contenedor-pokemon">
			<div className="contenedor-pokemon-unico">
				<img
					className="imagen-pokemon"
					src={require("../img/pokemon.png")}
					alt="imagen de pokemon"
				/>
				<p className="id-pokemon">
					<strong>1</strong>
				</p>
				<p className="nombre-pokemon">
					<strong>pokemon</strong>
				</p>
				<p className="powerlevel-pokemon">nivel 7</p>
				<p className="tipo-pokemon">
					<strong>tipo agresivo</strong>
				</p>
			</div>
		</div>
	);
}

export default Pokemon;




/* const Pokemon = (props) => {
	return (
        <div className="contenedor-pokemon">
            <img
				className="imagen-pokemon"
				src={require(`${props.avatar}`)}
				alt="imagen de {props.name}"
            />
            <div className="contenedor-pokemon-unico">
                <p className="id-pokemon">
					<strong>{props.id}</strong>
				</p>
				<p className="nombre-pokemon">
					<strong>{props.name}</strong>
                </p>
                <p className="powerlevel-pokemon">
					{props.powerLevel}
                </p>
                <p className="tipo-pokemon">
					<strong>{props.agressive}</strong>
				</p>
				
			</div>


        </div>
	)
}

export default Pokemon; */