import React, { Component } from 'react';
import MainLogo from '../svgs/MainLogo';

class HomeHeader extends Component {
  render() {
    return (
      <header className='site-header'>
        <div className='logo-container'>
          <MainLogo />
        </div>

    </header>
    );
  }
}

export default HomeHeader;
