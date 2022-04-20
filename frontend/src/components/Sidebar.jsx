import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Dream Tech</h4>
        <nav>
          <Link to="/calendar">Agenda</Link>
          <Link to="/scenery">Cenários</Link>
          <Link to="/profile">Perfil</Link>
          {/* <Link to="/calendar">Agenda</Link>
          <Link to="/calendar">Agenda</Link> */}

        </nav>
      </section>
    )
  }
}
