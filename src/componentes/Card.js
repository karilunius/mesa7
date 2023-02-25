
import "../css/card.css";
import Pokemon from "./Pokemon.js";
import Data from '../Data.json';




function Card() {

	const type = ["fire","water","electric","air"];
	
	return (
		<div className="Card">
			<div className="contenedor-card">
				
				{

			

					
					type.map((elemento) => (
						<div key={elemento}>
						
						{
							Data[elemento].map((pokemon) => (
							    <Pokemon key={pokemon.id}{...pokemon} type={elemento} />
								))
						
						}
					
					    </div>
					))

				}

			</div>
		</div>
	);
}

export default Card;







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

 {...dataPokemon.water}*/


/* 
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
 */