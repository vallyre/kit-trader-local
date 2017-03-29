import React, {Component} from 'react';
import ViewKitItem from './ViewKitItem';
// import {Link} from 'react-router';

class Kits extends Component {

  getPrice(price) {
    if (Number(price) > 0) {
      return ` -- $${price}`;
    }
  }

    render() {
        return (
            <div className='kit'>
              <img className='club-logo' src={this.props.club.image ? require(`../../images/clublogos/${this.props.club.image}`) : ''} alt='club logo'/>
              <img className='user-photo' src={this.props.kit.image} alt='user'/>
              <h3 className='kit-type'>{this.props.kit.trans_type} my kit! {this.props.kit.price}</h3>

              <div className='kit-content'>
                <h4>{this.props.club.short_name} | {this.props.club.long_name}</h4>
                <h5>{this.props.kit.league} | {this.props.kit.season}</h5>
                <div className='kit-item-wrapper'>

                        {Object.keys(this.props.kit.items).map(key => <ViewKitItem key={key} item={this.props.kit.items[key]}/>)
}
                    </div>
                    <p className='item-message'>{this.props.kit.comment}</p>
                </div>

                <footer className='kit-footer'>
                    <p>Listed by:</p>
                    <h4>{this.props.kit.name}</h4>
                    <a href={"mailto:" + this.props.kit.email + "?subject=Kit I found on Kit-Trader"} >Email Me!</a>
                </footer>
            </div>

        )
    }
}

export default Kits;
