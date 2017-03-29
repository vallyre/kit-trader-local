import React, {Component} from 'react';


class Messages extends Component {
  constructor() {
    super();
  }



    render() {

        return (

            <div className='messages'>
                  <p>Sender: </p>
                  <p>To: </p>
                  <p>Message: {this.props.message.body}</p>
            </div>

        )
    }
}
export default Messages;
