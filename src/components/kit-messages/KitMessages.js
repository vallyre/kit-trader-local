import React, {Component} from 'react';
import KitMessagesTitle from './KitMessagesTitle';
import KitMessageForm from './KitMessageForm';
import KitMessagesSent from './KitMessagesSent';
import KitMessagesReceived from './KitMessagesReceived';
import axios from 'axios';


class KitMessages extends Component {

  constructor() {
      super();
      this.getMessages = this.getMessages.bind(this);

      this.state = {
        messagesReceived: [],
        messagesSent: {}
      };
  }

  getMessages() {
    axios.get(`http://kit-trader.herokuapp.com/api/conversations.json`)
    .then ((response) => {
      console.log('messages', response)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

    render() {
        return (

            <section className='section-wrapper'>

                <KitMessagesTitle/>

                <div className='content-wrapper messages'>

                  <div className='message-form-wrapper'>

                    <KitMessageForm user={this.props.user} />

                  </div>

                    <KitMessagesSent user={this.props.user} />
                    <KitMessagesReceived user={this.props.user} />



                </div>
              </section>



        )
    }
}
export default KitMessages;
