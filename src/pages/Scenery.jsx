import React, { Component } from "react";
import ContentScenery from "../components/ContentScenery";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Scenery.css";

export default class Scenery extends Component {
  render() {
    return (
      <main>
        <Header />
        <ContentScenery />      
      </main>
    );
  }
}

