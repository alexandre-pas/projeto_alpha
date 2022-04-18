import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";

class CartShopping extends React.Component {
  constructor() {
    super();
    this.state = {
      nomes: [],
      disableButton: false,
    };
  }

  componentDidMount() {
    const {
      location: {
        state: { cartProducts, nameProductCard, cont, name },
      },
    } = this.props;

    let cartProducts2 = [];
    let nameProductCard2 = [];

    if (cont === undefined && name === undefined) {
      cartProducts2 = cartProducts;
      nameProductCard2 = nameProductCard;
    } else if (cartProducts === undefined && nameProductCard === undefined) {
      cartProducts2 = cont;
      nameProductCard2 = [name];
    } else if (
      cartProducts === undefined &&
      nameProductCard === undefined &&
      cont === undefined &&
      name === undefined
    ) {
      this.setState({ nomes: [] });
    } else {
      cartProducts2 = [...cont, ...cartProducts];
      nameProductCard2 = [...nameProductCard, cont[0].title];
    }

    for (let i = 0; i < nameProductCard2.length; i += 1) {
      let counter = 0;
      for (let k = 0; k < cartProducts2.length; k += 1) {
        if (nameProductCard2[i] === cartProducts2[k].title) {
          counter += 1;
        }
      }
      this.setState((PreveState) => ({
        nomes: [
          ...PreveState.nomes,
          {
            nome: nameProductCard2[i],
            quantity: counter,
            estoque: cartProducts2[i].available_quantity,
          },
        ],
      }));
    }
  }

  donePurchases = (ListaDoCarrinho) => {
    const listCoFromCarrinho = JSON.stringify(ListaDoCarrinho);
    localStorage.setItem("ProductsCoFromCarrinho", listCoFromCarrinho);
  };

  addLess = ({ target }) => {
    const textName =
      target.previousElementSibling.previousElementSibling.textContent;
    const { nomes } = this.state;
    const ObjChange = nomes.find((produto) => textName === produto.nome);
    const counter = ObjChange.quantity - 1;

    if (counter >= 0) {
      ObjChange.quantity = counter;
      this.setState(() => ({}));
    }
  };

  addMore = ({ target }) => {
    const textName = target.parentNode.firstChild.textContent;
    const { nomes } = this.state;
    const ObjChange = nomes.find((produto) => textName === produto.nome);

    if (ObjChange.quantity < ObjChange.estoque) {
      const counter = ObjChange.quantity + 1;
      ObjChange.quantity = counter;
      this.setState(() => ({}));
    } else {
      this.setState({ disableButton: true });
    }
  };

  dellProduct = ({ target }) => {
    const textName = target.parentNode.childNodes[0].textContent;
    const { nomes } = this.state;
    const newObjtName = nomes.filter((produto) => textName !== produto.nome);
    this.setState({
      nomes: newObjtName,
    });
  };

  render() {
    const { nomes, disableButton } = this.state;
    const listCarrinho = JSON.stringify(nomes);
    localStorage.setItem("Carrinho", listCarrinho);
    localStorage.setItem(
      "quant",
      JSON.stringify(nomes.reduce((soma, atual) => soma + atual.quantity, 0))
    );

    return (
      <>
        <Header />
        <div>
          {nomes.length > 0 ? (
            nomes.map((produto, index) => (
              <>
                <div key={index}>
                  <p>{produto.nome}</p>
                  <p>quantidade deste produto: {produto.quantity}</p>
                  <button type="button" onClick={this.addLess}>
                    -
                  </button>
                  <button
                    type="button"
                    disabled={disableButton}
                    onClick={this.addMore}
                  >
                    +
                  </button>
                  <button type="button" onClick={this.dellProduct}>
                    X
                  </button>
                </div>
                <Link to="/Checkout">
                  <button
                    type="button"
                    onClick={() => this.donePurchases(nomes)}
                  >
                    Finalizar a compra
                  </button>
                </Link>
              </>
            ))
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </div>
      </>
    );
  }
}

CartShopping.propTypes = {
  cartProducts: PropTypes.array,
  nameProductCard: PropTypes.array,
}.isRequired;

export default CartShopping;
