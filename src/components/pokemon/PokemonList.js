//     _         _
//    / \  _   _| |__   __ _ _ __ ___
//   / _ \| | | | '_ \ / _` | '_ ` _ \
//  / ___ \ |_| | | | | (_| | | | | | |
// /_/   \_\__, |_| |_|\__,_|_| |_| |_|
//         |___/


import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import spinner from '../pokemon/spinner.gif';

export default class PokemonList extends Component {
    state = {
        url : 'http://pokeapi.co/api/v2/pokemon/?limit=400',
        pokemon: null
    };
   async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }
    render() {
        return (
          <div>
            {this.state.pokemon ? (<div className ="row" >
                {this.state.pokemon.map(pokemon => (
                  <PokemonCard 
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                   />  
                
                ))}
            </div>)
            :( <img
             src ={spinner} alt ="poke"
             style = {{ width: '500px' , height: '500px' }}
            className="card-img-top rounded mx-auto d-block mt-2"

            />)}
                
          </div>
        );
    }
}
