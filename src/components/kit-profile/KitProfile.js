import React, {Component} from 'react';
import KitProfileTitle from './KitProfileTitle';
import MyKits from './MyKits';
import axios from 'axios';

import '../../stylesheets/kitprofile.css';

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
    axios.get(`http://kit-trader.herokuapp.com/api/users.json`)
    .then ((response) => {
      let user = response.data.users[0];
      this.setState({user});
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (

        <section>
          <KitProfileTitle />

        <div className='kit-profile-wrapper'>

          <div className='kit-profile-user-msg'>

          <div className='kit-profile-user'>
            <img src={this.props.user.image} alt='user' />
          <h2>{this.props.user.name}</h2>
          <h4>{this.props.user.email}</h4>
          <p>{this.props.user.phone}</p>
          <button>Build a New Kit</button>
          <button>View all Kits</button>
          </div>

          <div className='kit-profile-messages'>
            <h2>Kit-messages</h2>
            <h4>Do you have a jersey?</h4>
            <div className='kit-message'>
              <img src={this.props.user.image} alt='user' />
              <div className='message-header'>

              <h3>From:  {this.props.user.name}</h3>
              <h3>Email:  {this.props.user.email}</h3 >
              </div>
            </div>
              <p className='kit-message'>These messages are probably the best message that a user has ever had.</p>
              <div className='message-btns'>
              <span>Reply</span>
              <span>Delete</span>
            </div>
          </div>

        </div>
          <div className='kit-profile-user-kits'>

          {Object.keys(this.state.user.kits).map(
              key => <MyKits key={key} kit={this.state.user.kits[key]}/>
          )}
        </div>

        </div>
        </section>
    )
  }
}
export default KitProfile;
