import React, {Component} from 'react';

import kitprofile from '../../images/kitprofile.svg'

class KitProfileTitle extends Component {
  render() {
    return (
        <section className='kit-profile-section'>

          <div className='kit-profile-title-wrapper'>
            <img src={kitprofile} alt='kit profile logo' />
            <h2>Your kits.</h2>
            <div>
              <p>Kits you have available are shown below.</p>
              <p>Messages from kit-trader users are shown below your name.</p>
              <p>Deleted kits are removed from Kit-trader.</p>
            </div>
          </div>

        </section>
    )
  }
}
export default KitProfileTitle;
