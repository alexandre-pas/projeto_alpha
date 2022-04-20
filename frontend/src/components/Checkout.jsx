import React from 'react';
import Header from './Header';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      listFromCarrinho: [],
    };
  }

  componentDidMount() {
    const produtosDoCarrinho = localStorage.getItem('ProductsCoFromCarrinho');
    const produtosFromCarrinho = JSON.parse(produtosDoCarrinho);
    this.setState({
      listFromCarrinho: produtosFromCarrinho,
    });
  }

  render() {
    const { listFromCarrinho } = this.state;
    return (
      <div>
        <Header />
        <section>
          {listFromCarrinho.map((produto, index) => (
            <div key={ index }>
              <p>
                {produto.nome}
              </p>
              <img src={ produto.img } alt="produto" />
              <p>
                quantidade deste produto:
                {' '}                
                { produto.quantity }
              </p>
            </div>
          ))}
        </section>
        <section>
          <label htmlFor="nomeCompleto">
            Digite seu Nome Completo:
            <input
              id="nomeCompleto"
              type="text"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="DigiteOEmail">
            Digite seu Email:
            <input
              id="DigiteOEmail"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="DigiteSeuCPF">
            Digite seu CPF:
            <input
              id="DigiteSeuCPF"
              type="text"
              placeholder="CPF - Apenas números"
            />
          </label>
          <label htmlFor="DigiteSeuTelefone">
            Digite um Número de Contato:
            <input
              id="DigiteSeuTelefone"
              type="text"
              placeholder="Telefone - Apenas números"
            />
          </label>
          <label htmlFor="DigiteO-CEP">
            Digite o CEP do Endereço:
            <input
              id="DigiteO-CEP"
              type="text"
              placeholder="CEP - Apenas números"
            />
          </label>
          <label htmlFor="endereço">
            Digite seu Endereço:
            <input
              id="endereço"
              type="text"
              placeholder="Endereço"
            />
          </label>
        </section>
        <button
          type="button"
        >
          Comprar
        </button>
      </div>
    );
  }
}

export default Checkout;
