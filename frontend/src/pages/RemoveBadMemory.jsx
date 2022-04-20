import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "../css/AllScenery.css";

export default class RemoveBadMemory extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="remove">
          4
          <section>
            <div className="card card-deleted">
              <h1 className="title-deleted">Delete Memórias Indesejadas</h1>
              <h2 className="sub-title-deleted">
              Deletar aquela memória indesejada que você teve.
              </h2>
              <div className="price">
                <span>R$ 5.000,00</span>
              </div>

              <Link to="/shoppingcart">
                <button className="button-scenery btn-scenery" type="button">
                  Adicionar ao carrinho
                </button>
              </Link>
            </div>
          </section>
        </div>
      
      </>
      
    )
  }
}
