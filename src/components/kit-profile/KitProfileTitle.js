import React, {Component} from 'react';

import kitprofile from '../../images/kitprofile.svg'
import LongArrow from '../svgs/LongArrow';


class KitProfileTitle extends Component {
  render() {
    return (
        <section className='kit-profile-section'>

          <div className='secondary-title'>
            <LongArrow class='long-arrow'/>
            <img src={kitprofile} alt='kit profile logo' />
            <div>
              <p>All the kits you have listed.</p>

            </div>
          </div>

        </section>
    )
  }
}
export default KitProfileTitle;
