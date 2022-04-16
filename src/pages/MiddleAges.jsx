import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../css/AllScenery.css";

export default class MiddleAges extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="middle">
          2
          <section>
            <div className="card card-middle">
              <h1 className="title-middle">
                Idade Média
              </h1>
              <h2 className="sub-title-middle">
                A Idade Média foi um longo período da história que se estendeu
                do século V ao século XV. Seu início foi marcado pela queda do
                Império Romano do Ocidente, em 476, e o fim, pela tomada de
                Constantinopla pelos turcos em 1453.
              </h2>

              <Link to="/calendar">
                <button className="button-scenery btn-scenery" type="button">
                  Agendar Sessão
                </button>
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }
}
