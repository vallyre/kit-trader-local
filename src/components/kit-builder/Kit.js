import React, {Component} from 'react';
import KitItem from './KitItem';
import axios from 'axios';

class Kit extends Component {

  constructor() {
      super();
      this.getClubObject = this.getClubObject.bind(this);
      this.getKitClub = this.getKitClub.bind(this);
      this.getClubImage = this.getClubImage.bind(this);
      this.state = {
        clubs: [],
        club: {}
      };
  }

  componentDidMount() {
    this.getClubObject();
  }

    getClubObject() {
        axios.get(`http://kit-trader.herokuapp.com/api/clubs.json`)
        .then ((response) => {
            let clubs = response.data.clubs;
            this.setState({clubs});
            this.getKitClub();
        })
        .catch(function(error) {
          console.log(error);
        });
      }

      getKitClub() {
        const kitClub = this.props.kit.club;
        console.log(kitClub);
        this.state.clubs.forEach((club) => {
          console.log(club.id);
          if (String(club.id) === kitClub) {
            console.log('yes');
            this.setState({club});
          } else {
          }
        });
      }

      getClubImage() {
        const imgSrc = this.state.club.image ? this.state.club.image : '';
        return imgSrc;
      }

      getPrice(price) {
        if (Number(price) > 0) {
          return ` -- $${price}`;
        }
      }

    render() {
        return (
            <div className='kit'>
                <img className='club-logo' src={this.state.club.image ? require(`../../images/clublogos/${this.state.club.image}`) : ''} alt='club logo'/>
                <img className='user-photo' src={this.props.currUser.image} alt='user'/>
                <h3 className='kit-type'>{this.props.kit.trans_type} my kit! {this.getPrice(this.props.kit.price)}</h3>
                <h4 className='contact'>Message</h4>

                <div className='kit-content'>
                    <h4>{this.state.club.short_name} | {this.state.club.long_name}</h4>
                    <h5>{this.props.kit.league} | {this.props.kit.season}</h5>
                    <div className='kit-item-wrapper'>

                        {Object.keys(this.props.allItems).map(key => <KitItem key={key} item={this.props.allItems[key]}  />)
}
                    </div>
                    <p className='item-message'>{this.props.kit.comment}</p>
                </div>

                <footer className='kit-footer'>
                    <p>Listed by:</p>
                    <h4>{this.props.currUser.name}</h4>
                    <h5>{this.props.currUser.email}</h5>
                </footer>

            </div>
        )
    }
}

export default Kit;
