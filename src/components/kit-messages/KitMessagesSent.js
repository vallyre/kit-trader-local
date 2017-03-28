import React, {Component} from 'react';

import kitmessages from '../../images/kitmessages.svg'

class KitMessagesSent extends Component {
    render() {
        return (

            <div className='kit-form messages-to'>
                <h3>Kit-Messages Sent</h3>
                <div className='kit-message'>
                    <div className='message-header'>
                        <img className='is-sm-circle' src={this.props.user.image} alt='user'/>
                        <span>
                            <h4>From: {this.props.user.name}</h4>
                            <h4>Email: {this.props.user.email}</h4 >
                        </span>
                    </div>
                    <div className='message-body'>
                        <p>I'd like to buy your kit. I like the purple jersey and my daughter just wanted to say hi. I will be at Cedar Falls on Tuesdays and will meet you at the restrooms. Im wearing a blue dress and will have my dog with me.</p>
                    </div>
                    <div className='message-btns'>
                        <button className='green-btn sm-btn'>Delete</button>
                    </div>
                </div>
                <div className='kit-message'>
                    <div className='message-header'>
                        <img className='is-sm-circle' src={this.props.user.image} alt='user'/>
                        <span>
                            <h4>From: {this.props.user.name}</h4>
                            <h4>Email: {this.props.user.email}</h4 >
                        </span>
                    </div>
                    <div className='message-body'>
                        <p>These messages are probably the best message that a user has ever had.</p>
                    </div>
                    <div className='message-btns'>
                        <button className='green-btn sm-btn'>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default KitMessagesSent;
