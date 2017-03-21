import React, { Component } from 'react';
import HomeHeader from '../layout-components/HomeHeader';
import About from '../misc-content/About';
import MainFooter from '../layout-components/MainFooter';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <About />
        <MainFooter />
      </div>
    );
  }
}

export default Home;
