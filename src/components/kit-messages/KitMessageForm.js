import React, {Component} from 'react';

import kitmessages from '../../images/kitmessages.svg'

class KitMessageForm extends Component {
  render() {
    return (
      <form className='kit-form'>
          <h3>Send a Kit Message</h3>
          <div className='message-photos'>
              <span>
                  <p>From</p>
                  <img className='is-sm-circle' src={this.props.user.image} alt='user'/>
                  <p>{this.props.user.name}</p>
              </span>

              <span>
                  <p>To</p>
                  <img className='is-sm-circle' src={this.props.user.image} alt='user'/>
                  <p>{this.props.user.name}</p>
              </span>
          </div>
          <textarea placeholder='Message'></textarea>
          <button className='green-btn'>Send Message</button>
      </form>
    )
  }
}
export default KitMessageForm;
