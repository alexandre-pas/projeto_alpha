import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CardScenery extends React.Component {
  handleRedirectScenery = (event) => {
    const id = event.target.id 
    console.log(id)
    const { history } = this.props;
    const urlScenery = `/scenery/${event.target.id}`
    history.push(urlScenery);
    console.log("eu",urlScenery)
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

          {/* <Link to="/shoppingcart">
            <button className="button-scenery" type="button">
              Adicionar ao carrinho
            </button>
          </Link> */}
        </div>
      </article>
    );
  }
}

CardScenery.propTypes = {
  module: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    redirectUrl: PropTypes.string.isRequired,
    paragraphScenery: PropTypes.string.isRequired,
    classScenery: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(CardScenery);
