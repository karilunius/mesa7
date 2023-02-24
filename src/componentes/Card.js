
import "../css/card.css";
import Pokemon from "./Pokemon.js";
import Data from '../Data.json';

/* 
const Card = () => {

	return (
		<div className="Card">
			<div className="contenedor-card">
					{Data.map(pokemon => 
						<Pokemon
							type="Fire"
							avatar={pokemon.avatar}
							id={pokemon.id}
							name={pokemon.name}
							powerLevel={pokemon.powerLevel}
							agressive={pokemon.agressive}
						/>
					
					)}
			</div>
		</div>
	)
};
export default Card;

 */


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
