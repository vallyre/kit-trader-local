import React, {Component} from 'react';
import KitProfileTitle from './KitProfileTitle';

import '../../stylesheets/kitprofile.css';

class KitProfile extends Component {
  render() {
    return (

        <section>
          <KitProfileTitle />

        <div className='kit-profile-wrapper'>
          <p>Kit profile content</p>
          
        </div>
        </section>
    )
  }
}
export default KitProfile;
