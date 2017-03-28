import React, {Component} from 'react';
import KitProfileTitle from './KitProfileTitle';
import MyKits from './MyKits';
import axios from 'axios';
import KitMessagesSent from '../kit-messages/KitMessagesSent';
import KitMessagesReceived from '../kit-messages/KitMessagesReceived';

class KitProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                kits: {}
            }
        };
    }

    componentDidMount() {
        axios.get(`http://kit-trader.herokuapp.com/api/users.json`).then((response) => {
            let user = response.data.users[0];
            this.setState({user});
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {
        return (

            <section className='section-wrapper'>
                <KitProfileTitle/>

                <div className='content-wrapper profile'>

                    <div className='kit-profile-user-msg'>

                        <div className='kit-profile-user'>
                            <img src={this.props.user.image} alt='user'/>
                            <h2>{this.props.user.name}</h2>
                            <h4>{this.props.user.email}</h4>
                            <p>{this.props.user.phone}</p>
                            <button className='green-btn'>Build a New Kit</button>
                            <button className='green-btn'>View all Kits</button>
                        </div>

                        <KitMessagesSent user={this.props.user} />
                        <KitMessagesReceived user={this.props.user} />
                    </div>
                    <div className='kit-display'>

                        {Object.keys(this.state.user.kits).map(key => <MyKits key={key} user={this.state.user} kit={this.state.user.kits[key]}/>)}
                    </div>

                </div>
            </section>
        )
    }
}
export default KitProfile;
