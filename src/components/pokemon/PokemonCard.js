//     _         _
//    / \  _   _| |__   __ _ _ __ ___
//   / _ \| | | | '_ \ / _` | '_ ` _ \
//  / ___ \ |_| | | | | (_| | | | | | |
// /_/   \_\__, |_| |_|\__,_|_| |_| |_|
//         |___/

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
 import spinner from '../pokemon/spinner.gif';

const Sprite = styled.img`
width : 5em;
hight: 5em;
desplay:none;
`;

const Card = styled.div`
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
   &:hover {
   box-shadow: 0 14px 28px red, 0 10px 10px black;
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class PokemonCard extends Component {

    state={
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        imageLoading: true,
        toManyRequests:false
    };

    componentDidMount() {
        const { name , url } = this.props;
        const pokemonIndex =url.split('/')[6];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
     
        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }
    // number of col
    render() {
        return (
            <div className="col-md-3 col-sm-8 mb-5">
            <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
             <Card className="card text-white bg-dark mb-3  cr">
           <h5 className="card-header num">{this.state.pokemonIndex}</h5>
           {this.state.imageLoading ? (
            <img
             src ={spinner} alt ="poke"
             style = {{ width: '5em' , height: '5em' }}
            className="card-img-top rounded mx-auto d-block mt-2"

            />
           ) : null}
           <Sprite className="card-img-top rounded mx-auto mt-2"
           onLoad={() => this.setState({ imageLoading: false })}
           onError={() => this.setState({ toManyRequests: true })}
           src={this.state.imageUrl}
           style={
               this.state.toManyRequests ? {display : 'none'} :
               this.state.imageLoading ? null :{display :"block"}
           }
           />
           {this.state.toManyRequests ? (
               <h6 className='mx-auto'> 
               <span className ="badge badge-danger mt-2">To to Many Requests</span>
           </h6>
           ):null}
            
           <div className ="card-body mx-auto">
           <h6 className="card-title">  {this.state.name
            .toLowerCase()
            .split(' ')
            .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
            ).join(' ')}</h6>
          
           </div>
            </Card>
            </StyledLink>
          </div>
          
           
                
          
        );
    }
}
