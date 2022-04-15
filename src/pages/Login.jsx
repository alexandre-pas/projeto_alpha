import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { sendUserInfo } from '../store/actions/index';
// import '../css/Login.css';

class Login extends Component {
  state = {
    disabledButton: true,
    email: '',
    password: '',
    linkar: false,
  }

  checkInformation = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
    const { email, password } = this.state;
    const emailVerification = this.emailVerification(email);
    const biggerOrEqual = 6;

    // verificando email e o password
    if ((emailVerification && password.length) >= biggerOrEqual) {
      this.setState({ disabledButton: false });
    } else this.setState({ disabledButton: true });
  }

  // Na pagina do Matheus Battisti ensinando sobre regex
  emailVerification = (email) => {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  }

  // Botao para redirecionar para pagina de profile com os dados do usuario
  handleButton = () => {
    const { userAdded } = this.props;
    const { email } = this.state;    

    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));

    userAdded(email);
    this.setState({ linkar: true });
  }

  render() {
    const { disabledButton, email, password, linkar } = this.state;

    return (
      <section className="tela-login">
        { linkar && <Redirect to="/profile" />}

        <div>

          <div className="card-login">
            <label htmlFor="email" className="user">
              <input
                className="user"
                // data-testid="email-input"
                type="text"
                placeholder="Digite seu email"
                id="email"
                value={ email }
                onChange={ this.checkInformation }
              />
            </label>
            <label htmlFor="password" className="user">
              <input
                className="user"
                // data-testid="password-input"
                onChange={ this.checkInformation }
                type="password"
                placeholder="Digite sua senha"
                value={ password }
                id="password"
              />
            </label>

            <button
              className="user"
              type="button"
              // data-testid="login-submit-btn"
              onClick={ this.handleButton }
              disabled={ disabledButton }
            >
              Enter
            </button>

          </div>

        </div>
      </section>
    );
  }
}

Login.propTypes = {
  userAdded: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userAdded: (data) => dispatch(sendUserInfo(data)),
});

export default connect(null, mapDispatchToProps)(Login);
