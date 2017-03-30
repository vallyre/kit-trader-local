import React, {Component} from 'react';

import kitbuilderlogo from '../../images/kitbuilder.svg'
import LongArrow from '../svgs/LongArrow';



class KitBuilderTitle extends Component {
  render() {
    return (

      <div className='secondary-title'>
        <LongArrow class='long-arrow'/>
          <img src={kitbuilderlogo} alt='kit builder logo'/>

          <div>
              <p>Build your available kit.</p>

          </div>

      </div>

)
}
}

export default KitBuilderTitle;
