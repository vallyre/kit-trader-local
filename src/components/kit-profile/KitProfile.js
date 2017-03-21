import React, {Component} from 'react';
import MainHeader from '../layout-components/MainHeader';
import MainFooter from '../layout-components/MainFooter';

import kitprofile from '../../img/kitprofile.svg'


import '../../stylesheets/kitprofile.css';

class KitProfile extends Component {
  render() {
    return (
      <div>
      <MainHeader />
      <main>
        <section className='kit-profile-section'>

          <div className='kit-profile-title-wrapper'>
            <img src={kitprofile} alt='kit profile logo' />
            <h2>Your profile.</h2>
            <div>
              <p>Your kits are shown below.</p>
              <p>Kits can contain one or many items.</p>
              <p>Delete your kits by click on the red x.</p>
            </div>
          </div>

        </section>
      </main>
      <MainFooter />
      </div>
    )
  }
}
export default KitProfile;
