import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "../css/AllScenery.css";

export default class InvertedDream extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="inverted">
          3
          <section>
            <div className="card card-inverted">
              <h1 className="title-inverted">
                Já pensou em viver seu sonho com outra perspectiva?
              </h1>
              <h2 className="sub-title-inverted">
                Venha viver no mundo invertido onde será uma nova realidade e outra perspectiva de mundo.
                
              </h2>  
              <div className="price-inverted">
                <span>R$ 3.000,00</span>  
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
