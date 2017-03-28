import React, {Component} from 'react';

import kitmessages from '../../images/kitmessages.svg'

class KitMessagesTitle extends Component {
  render() {
    return (
        <section className='kit-messages-section'>

          <div className='secondary-title'>
            <img src={kitmessages} alt='kit messages logo' />
            <h2>Your messages.</h2>
            <div>
              <p>Your messages are shown below.</p>
              <p>You can receive and send messages.</p>
              <p>Delete messages by clicking on the red x.</p>
            </div>
          </div>

        </section>
    )
  }
}
export default KitMessagesTitle;
