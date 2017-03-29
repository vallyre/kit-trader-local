import React, {Component} from 'react';
import Messages from './Messages';


class KitMessagesDisplay extends Component {


    render() {
        return (

          <div className='message-container'>
            <p>If no messages, what to display?</p>
          {Object.keys(this.props.messages)
            .map(key => <Messages key={key} message={this.props.messages[key]} />)
          }
          </div>

        )
    }
}
export default KitMessagesDisplay;
