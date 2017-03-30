import React, {Component} from 'react';

import kitviewerlogo from '../../images/kitviewer.svg'
import LongArrow from '../svgs/LongArrow';


class KitViewerTitle extends Component {
  render() {
    return (

      <div className='secondary-title'>
        <LongArrow class='long-arrow'/>
          <img src={kitviewerlogo} alt='kit viewer logo'/>
          <div>
            <p>Select a club to view kits.</p>
          </div>

      </div>

)
}
}

export default KitViewerTitle;
