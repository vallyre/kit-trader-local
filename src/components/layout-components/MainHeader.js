import React, { Component } from 'react';
import {Link} from 'react-router';
import MainLogo from '../svgs/MainLogo';

class MainHeader extends Component {

  // <Link to="/messages" activeClassName='active'>Kit-Messages</Link>

  render() {
    return (
      <header className='site-header is-secondary'>
        <div className='logo-container'>
          <MainLogo />
          <nav className='site-nav'>
              <Link to="/" activeClassName='active'>Logout</Link>
              <Link to="/profile" activeClassName='active'>Kit-Profile</Link>
              <Link to="/builder" activeClassName='active'>Kit-Builder</Link>
              <Link to="/viewer" activeClassName='active'>Kit-Viewer</Link>
          </nav>
        </div>

    </header>
    );
  }
}

export default MainHeader;
