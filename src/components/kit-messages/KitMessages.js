import React, {Component} from 'react';
import KitMessagesTitle from './KitMessagesTitle';
import KitMessageForm from './KitMessageForm';
// import KitMessagesDisplay from './KitMessagesDisplay';
// import axios from 'axios';

class KitMessages extends Component {

    constructor() {
        super();

        this.state = {
            messages: []
        };
    }

  //   componentDidMount() {
  //
  //     let stuff = {
  //         method: 'get',
  //         url: 'https://kit-trader.herokuapp.com/api/conversations.json',
  //         withCredentials: true
  //     };
  //     axios(stuff).then((response) => {
  //         console.log('getMessages', response);
  //         let messages = [];
  //         messages = response.data[0];
  //         this.setState({messages});
  //
  //     }).catch(function(error) {
  //         console.log(error);
  //     });
  // }
  // <KitMessagesDisplay messages={this.state.messages}/>

    render() {
        return (

            <section className='section-wrapper'>

                <KitMessagesTitle/>

                <div className='content-wrapper messages'>

                    <div className='message-form-wrapper'>
                      <h1>NON FUNCTIONAL</h1>

                        <KitMessageForm user={this.props.user}/>


                    </div>

                </div>
            </section>

        )
    }
}
export default KitMessages;
