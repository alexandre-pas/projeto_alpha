import React, { Component } from "react";
import ContentScenery from "../components/ContentScenery";
import "../css/Scenery.css";

export default class Scenery extends Component {
  render() {
    return (
      <main>
        <div>
          <ContentScenery />
        </div>
      </main>
    );
  }
}
