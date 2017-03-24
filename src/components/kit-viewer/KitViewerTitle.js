import React, {Component} from 'react';

import kitviewerlogo from '../../images/kitviewer.svg'


class KitViewerTitle extends Component {
  render() {
    return (

      <div className='kit-viewer-title-wrapper'>
          <img src={kitviewerlogo} alt='kit viewer logo'/>
          <h2>View kits.</h2>

          <div>
            <p>Kit-trader lists kits.</p>
            <p>Kits can contain one or many items.</p>
            <p>Start by selecting a club.</p>
          </div>

      </div>

)
}
}

export default KitViewerTitle;
