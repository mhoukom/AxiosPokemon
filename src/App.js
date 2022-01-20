import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokemonNames, setPokemonNames] = useState([])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(res => {
        setPokemonNames(res.data.results);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div>
        <button onClick={axiosPokemon}>Axios Pokemon</button>
      </div>
      <div>
        {
          pokemonNames ?
            pokemonNames.map((pokemonName, i) => {
              return (
                <p key={i}>{i + 1} {pokemonName.name.charAt(0).toUpperCase() + pokemonName.name.slice(1)}</p>
              )
            }) : <p>loading</p>
        }
      </div>
    </div>
  );
}

export default App;
