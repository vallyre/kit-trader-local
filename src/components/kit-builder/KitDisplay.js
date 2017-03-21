import React, {Component} from 'react';
import KitDisplayItem from './KitDisplayItem';

import tfcalogo from '../../img/clublogos/tfca.png'
import vrh from '../../img/vrh_small.jpg'



class KitDisplay extends Component {
  render() {
    return (
      <div>


      <img className='club-logo' src={tfcalogo} alt='club logo'/>

    <div className='kit-display-text'>
          <h3>Kit For Sale | ${this.props.details.price}</h3>
          <h4>{this.props.details.club} | {this.props.details.level} | {this.props.details.season}</h4>
    </div>


      <div className='item-detail-wrapper'>
          <KitDisplayItem />

      </div>
      <p className='item-message'>{this.props.details.comment}</p>
        <footer className='kit-builder-footer'>
          <img src={vrh} alt='user' />
          <div className='kit-builder-footer-text'>
            <p>Vallyre Hyers | 27712</p>
            <h5>Send me a kit-message</h5>
          </div>
          <button className='kit-delete'>X</button>
        </footer>

    </div>
)
}
}

export default KitDisplay;
