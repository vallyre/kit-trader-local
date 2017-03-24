import React, {Component} from 'react';
import KitItem from './KitItem';
import axios from 'axios';

import vrh from '../../images/vrh_small.jpg'

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
        console.log(this.state.clubs);
        console.log(kitClub);
        this.state.clubs.forEach((club) => {
          if (club.short_name === kitClub) {
            this.setState({club});
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
                <img className='kit-club-logo' src={this.state.club.image ? require(`../../images/clublogos/${this.state.club.image}`) : ''} alt='club logo'/>
                <img className='kit-user-photo' src={vrh} alt='user'/>
                <h3 className='kit-type'>{this.props.kit.transtype} my kit! {this.getPrice(this.props.kit.kitprice)}</h3>

                <div className='kit-content'>
                    <h3>{this.props.kit.club} | {this.state.club.long_name}</h3>
                    <h4>{this.props.kit.level} | {this.props.kit.season}</h4>
                    <div className='kit-item-wrapper'>
                        {Object.keys(this.props.allItems).map(key => <KitItem key={key} item={this.props.allItems[key]}/>)
}
                    </div>
                    <p className='item-message'>{this.props.kit.comment}</p>
                </div>

                <footer className='kit-footer'>
                    <p>Listed by:</p>
                    <h3>Vallyre Hyers</h3>
                    <p>Send me a kit-message</p>
                </footer>

            </div>
        )
    }
}

export default Kit;
