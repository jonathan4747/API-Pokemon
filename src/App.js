import './App.css';
import {useState,useEffect} from 'react';
import Pokemon from './componentes/Pokemon/Pokemon';

function App() {
  const [termino,setTermino]=useState('');
  const [Pokemones , setPokemones]=useState([]);

  useEffect(()=>{
    let configuracion = {
      method : 'GET'
    };
    fetch(` https://pokeapi.co/api/v2/pokemon?limit=${termino}`, configuracion)
      .then(respuesta =>{
        if(respuesta.ok){
          return respuesta.json();
        }
      })
      .then(listaPokemon => {
        if(listaPokemon.results){
        setPokemones((noticiaPrev)=> listaPokemon.results)
        }
      })
  },[termino])

  const mostrarPokemon =(event) =>{
    event.preventDefault();
    let termino = 807;
    setTermino((PrevTermino)=>termino)
  }


  return (
    <div className='pagina'>
        <form onSubmit={(event)=> mostrarPokemon(event)}>
          <button type='submit'>
            Fetch Pokemon
          </button>
        </form>
        <div>
          {
            Pokemones.map((pokemon,indice)=>{
              return (<Pokemon pokemon={pokemon} key={'pokemon_'+indice}/>)
            })
          }
        </div>
    </div>
  );
}

export default App;
