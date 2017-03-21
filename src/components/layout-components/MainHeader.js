import React, { Component } from 'react';
import {Link} from 'react-router';
import MainLogo from '../svgs/MainLogo';

import '../../stylesheets/header.css';

class MainHeader extends Component {


  render() {
    return (
      <header className='site-header is-secondary'>
        <div className='logo-container'>
          <MainLogo />
          <nav className='site-nav'>
              <Link to="/">Home</Link>
              <Link to="/kit-profile">Profile</Link>
              <Link to="/kit-builder">Kit-Builder</Link>
              <Link to="/kit-viewer">Kit-Viewer</Link>
              <a href='#'>FAQ</a>
          </nav>

        </div>

    </header>
    );
  }
}

export default MainHeader;
