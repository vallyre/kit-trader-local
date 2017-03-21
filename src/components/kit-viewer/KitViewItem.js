import React, {Component} from 'react';

import jersey from '../../img/jersey.svg'
import jacket from '../../img/jacket.svg'
import pants from '../../img/pants.svg'
import shorts from '../../img/shorts.svg'
import shoes from '../../img/shoes.svg'
import socks from '../../img/socks.svg'
import ball from '../../img/ball.svg'
import gloves from '../../img/gloves.svg'

class KitViewItem extends Component {
  render() {
    return (
      <article className='item-detail'>
          <img src={jersey} alt='kit-item-display'/>
          <p>Like New</p>
          <p>YL | $20</p>
      </article>
)
}
}

export default KitViewItem;
