import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ImageScenery from "../images/imagem_cenarios.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header title="header" />
        
        <section>
          <div className="custom-section container">
            <h1 className="title-home">
              <span className="title-h1">Decodificando</span> o mundo dos sonhos
            </h1>
            <h2>
              Na Dreams Tech Corporation, a pessoa se cadastra e pode escolher
              um dos cenários estabelecidos ou personalizar seu próprio cenário
              e em qual época quer viver uma realidade alternativa em seu sonho
              - <span className="title-h1">Dreams Connect.</span>{" "}
            </h2>

            <div className="scenery-image">
              <Link to="/scenery">
                <img src={ImageScenery} alt={ImageScenery} />
              </Link>
            </div>

            <Link to="/scenery">
              <button className="button-scenery" type="button">
                Escolher Sonhos
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
