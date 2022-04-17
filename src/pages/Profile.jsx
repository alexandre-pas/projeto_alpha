import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <div>Profile</div>

      </>
    )
  }
}
