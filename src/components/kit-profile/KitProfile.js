import React, {Component} from 'react';
import KitProfileTitle from './KitProfileTitle';
import MyKits from './MyKits';
// import KitMessagesDisplay from '../kit-messages/KitMessagesDisplay';
import {Link} from 'react-router';
import axios from 'axios';

class KitProfile extends Component {
    constructor() {
        super();
        this.getUser = this.getUser.bind(this);
        // this.getMessages = this.getMessages.bind(this);
        // this.getSender = this.getSender.bind(this);
        // this.getRecipient = this.getRecipient.bind(this);

        this.state = {
            currUser: {
                kits: {}
            },
            user: {
                kits: {}
            },
            messages: []
            //
            //  : {
            //         sender: {},
            //         recipient: {}
            //       }
            // ]
        }
    }

    componentDidMount() {
        let stuff = {
            method: 'get',
            url: 'https://kit-trader.herokuapp.com/auth/sessions',
            withCredentials: true
        };

        axios(stuff).then((response) => {
            let user = response.data;
            this.setState({user});
            this.getUser();
        }).catch(function(error) {
            console.log(error);
        });
    }

    getUser() {
        let id = this.state.user.id;
        axios.get(`https://kit-trader.herokuapp.com/api/users/${id}.json`).then((response) => {
            let currUser = response.data;
            this.setState({currUser});
            // this.getMessages();
        }).catch(function(error) {
            console.log(error);
        });
    }

    // getMessages() {
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
    //
    // buildMessages() {
    //   let message = {
    //
    //   }
    // }
    // <div className='profile-messages'>
    //
    //   <KitMessagesDisplay messages={this.state.messages}/>
    // </div>

    render() {
        return (

            <section className='section-wrapper'>
                <KitProfileTitle/>

                <div className='kit-profile-section'>

                    <div className='kit-profile-user'>
                        <img src={this.state.user.image} alt='user'/>
                        <h2>{this.state.user.name}</h2>
                        <h4>{this.state.user.email}</h4>
                        <Link className='green-btn' to='/builder'>Build a New Kit</Link>
                        <Link className='green-btn' to='/viewer'>View all Kits</Link>
                    </div>

                    <div className='kit-things'>
                        {Object.keys(this.state.currUser.kits).map(key => <MyKits key={key} user={this.state.currUser} kit={this.state.currUser.kits[key]}/>)}

                    </div>

                </div>
            </section>
        )
    }
}
export default KitProfile;
