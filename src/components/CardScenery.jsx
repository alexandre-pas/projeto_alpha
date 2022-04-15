import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../css/Scenery.css";


class CardScenery extends React.Component {
  handleRedirectScenery = (event) => {
    const { history } = this.props;
    console.log(this.props);

    history.push(`/Scenery/${event.target.id}`);
  };

  render() {
    const { module } = this.props;

    return (
      <article className={`cardScenery ${module.classScenery}`}>
        <div className="scenery-image">
          <h2>{module.title}</h2>
          <h3>{module.description}</h3>
          <p
            className="paragraphy-scenery"
            id={module.redirectUrl}
            onClick={this.handleRedirectScenery}
          >
            {module.paragraphScenery}
          </p>

          <Link to="/shoppingcart">
            <button className="button-scenery" type="button">
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </article>
    );
  }
}

CardScenery.propTypes = {
  module: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(CardScenery);
