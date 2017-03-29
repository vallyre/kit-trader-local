import React, {Component} from 'react';

import kitmessages from '../../images/kitmessages.svg'

class KitMessagesTitle extends Component {
  render() {
    return (
        <section className='kit-messages-section'>

          <div className='secondary-title'>
            <img src={kitmessages} alt='kit messages logo' />
            <h2>Send a message.</h2>
            <div>
              <p>Send another user a kit message.</p>
              <p>You can receive and send messages.</p>
            </div>
          </div>

        </section>
    )
  }
}
export default KitMessagesTitle;
