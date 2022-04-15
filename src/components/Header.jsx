import React, { Component } from 'react'
import ImageScenery from "../images/imagem_cenarios.png";
import Logo from "../images/logo.png";



export default class Header extends Component {
  render() {
    return (
      <>
        <header className="Header">
          <button className="toggle-button" type="button">
            <img src={ ImageScenery } alt="Toggle sidebar button" />
          </button>
          <img src={ Logo } alt="Dreams Tech" />
          <h4>Dream Tech</h4>
        </header>
      </>
    )
  }
}
