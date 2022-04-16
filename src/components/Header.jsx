import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/svg_logo.svg";
import ShoppingCart from "../images/shopping-cart.png";

class Header extends React.Component {
  render() {
    return (
      <header className="content-header">
        <nav className="nav-title">
          <img src={Logo} alt="Logo" />
          <ul className="nav">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/scenery">
              <li>Dreams Tech</li>
            </Link>
            <li>Sobre a Empresa</li>
            <li>Contatos</li>
          </ul>
          <div className="sign-up">
            <Link to="/login">
              <button className="button-sign-up  btn-login" type="button">
                Entrar
              </button>
            </Link>
            <Link to="/signup">
              <button className="button-sign-up btn-sign-up" type="button">
                Criar Conta
              </button>
            </Link>
          </div>
          <div className="shopping-cart">
            <Link to="/shoppingcart">
              <button className="btn-shopping-cart" type="button">
                <img src={ ShoppingCart } alt="Carrinho de compra" />
              </button>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
