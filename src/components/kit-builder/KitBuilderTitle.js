import React, {Component} from 'react';

import kitbuilderlogo from '../../images/kitbuilder.svg'


class KitBuilderTitle extends Component {
  render() {
    return (

      <div className='kit-builder-title-wrapper'>
          <img src={kitbuilderlogo} alt='kit builder logo'/>
          <h2>Build your kit.</h2>

          <div>
              <p>Kit-trader lists kits. Build your kit below.</p>
              <p>Your kit can contain one or many items.</p>
              <p>See our
                  <a href='#'> FAQ </a>
                   for information about building kits.</p>
          </div>

      </div>

)
}
}

export default KitBuilderTitle;
