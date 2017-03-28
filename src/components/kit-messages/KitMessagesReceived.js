import React, {Component} from 'react';


import kitmessages from '../../images/kitmessages.svg'

class KitMessagesSent extends Component {


    render() {

        return (

            <div className='kit-form messages-from'>
                <h3>Kit-Messages Received</h3>
                <div className='kit-message'>
                    <div className='message-header'>
                        <img className='is-sm-circle' src={this.props.user.image} alt='user'/>
                        <span>
                            <h4>From: {this.props.user.name}</h4>
                            <h4>Email: {this.props.user.email}</h4>
                        </span>
                    </div>
                    <div className='message-body'>
                        <p>My kid plays for Coach Richie and theh practice on Tuesdays at Rainbow on field 5. I'd like to meet you there and to see if you can trade the items with me. I drive a Toyota Corolla with I brake for moose on the back. You can't miss me.</p>
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
