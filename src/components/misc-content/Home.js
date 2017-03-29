import React, { Component } from 'react';
import HomeHeader from '../layout-components/HomeHeader';
import Login from '../misc-content/Login';
import MainFooter from '../layout-components/MainFooter';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Login />
        <MainFooter />
      </div>
    );
  }
}

export default Home;
