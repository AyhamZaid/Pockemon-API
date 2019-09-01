/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
//   import styled from 'styled-components';
import Pok from '../pokemon/pok.png';
//   const NavBarStyle = styled.nav ``;

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className ="navbar navbar-dark bg-dark fixed-top">
              
                <a href="" 
                className="navbar-brand col-sm-3 col-md mr-0 align-items-center" 
                ><img  src = {Pok}  className = "logo" alt ="p"/>
                </a>
            
                </nav>
              
            </div>
        )
    }
}
