import React, {Component} from 'react';
import KitMessagesTitle from './KitMessagesTitle';
import KitMessageForm from './KitMessageForm';
import KitMessagesSent from './KitMessagesSent';
import KitMessagesReceived from './KitMessagesReceived';

class KitMessages extends Component {
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
