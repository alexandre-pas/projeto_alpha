import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ImageScenery from "../images/imagem_cenarios.png";
import "../css/Home.css";
// import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header title="header" />
        <section className="content-home">
          <div className="home">
            <div div-home>
              <h1 className="title-home">
                <span className="title-h1">Decodificando</span> o mundo dos
                sonhos
              </h1>
              <h2>
                Na Dreams Tech Corporation, a pessoa se cadastra e pode escolher
                um dos cenários estabelecidos ou personalizar seu próprio
                cenário e em qual época quer viver uma realidade alternativa em
                seu sonho - <span className="title-h1">Dreams Connect.</span>
              </h2>
            </div>

            <div className="image-scenery">
              <Link to="/scenery">
                <img className="image-all-scenery" src={ImageScenery} alt={ImageScenery} />
              </Link>
            </div>            
          </div>
          <Link to="/scenery">
              <button className="button-scenery" type="button">
                Escolher Sonhos
              </button>
          </Link>
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}
