import React from "react";
import contents from "../store/data/Data";
import CardScenery from "./CardScenery";

class ContentScenery extends React.Component {
  render() {
    return (
      <section>
        {contents.map((item) => (
          <CardScenery key={item.id} module={item} />
        ))}
      </section>
    );
  }
}

export default ContentScenery;
