import React, {Component} from 'react';

import kitprofile from '../../images/kitprofile.svg'

class KitProfileTitle extends Component {
  render() {
    return (
        <section className='kit-profile-section'>

          <div className='kit-profile-title-wrapper'>
            <img src={kitprofile} alt='kit profile logo' />
            <h2>Your profile.</h2>
            <div>
              <p>This is your profile page.</p>
              <p>Kits you have available are shown below.</p>
              <p>Delete kits by clicking on the red x.</p>
            </div>
          </div>

        </section>
    )
  }
}
export default KitProfileTitle;
