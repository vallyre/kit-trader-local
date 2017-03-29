import React, {Component} from 'react';

import {Link} from 'react-router';

import MainLogo from '../svgs/MainLogo';

class Choice extends Component {

    render() {
        return (
          <article className='choice-article'>
              <h3><MainLogo/></h3>
              <form className='login-form' type='submit'>
                  <Link className='choice' to='/builder'>Build a Uniform</Link>
                  <Link className='choice'to='/viewer'>Find a Uniform</Link>
              </form>
          </article>
        );
    }
}

export default Choice;
