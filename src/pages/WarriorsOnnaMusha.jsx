import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../css/AllScenery.css";

export default class WarriorsOnnaMusha extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="warriors">
          1
          <section>
            <div className="card card-warriors">
              <h1 className="title-warriors">Guerreiros Samurais</h1>
              <h2 className="sub-title-warriors">
                Entre os séculos 12 e 19, famílias de guerreiros formavam os
                soldados 4 de elite do Japão – o treino começava aos 3 anos de
                idade. Os samurais surgiram durante a consolidação do istema
                feudal do país.
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
