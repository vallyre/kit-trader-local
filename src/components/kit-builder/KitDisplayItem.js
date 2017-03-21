import React, {Component} from 'react';

import jersey from '../../img/jersey.svg'

class KitDisplayItem extends Component {
  render() {
    return (
      <article className='item-detail'>
          <img src={jersey} alt='kit-item-display'/>
          <p>Like New</p>
          <p>YL | $50</p>
      </article>
)
}
}

export default KitDisplayItem;
