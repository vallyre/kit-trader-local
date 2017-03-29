import React, {Component} from 'react';
import MyKitItem from './MyKitItem';

class MyKits extends Component {

  render() {
    return (
      <div className='kit'>
        <img className='club-logo' src={this.props.kit.club_image ? require(`../../images/clublogos/${this.props.kit.club_image}`) : ''} alt='club logo'/>
        <img className='user-photo' src={this.props.user.image} alt='user'/>
        <h3 className='kit-type'>{this.props.kit.trans_type} my kit! {this.props.kit.price}</h3>
        <h4 className='contact'>Delete</h4>

      <div className='kit-content'>
          <h4>{this.props.kit.short_name } | {this.props.kit.long_name}</h4>
          <h5>{this.props.kit.league} | {this.props.kit.season}</h5>
          <div className='kit-item-wrapper'>
                {Object
                  .keys(this.props.kit.items)
                  .map(key => <MyKitItem key={key} item={this.props.kit.items[key]}/>)
                }
          </div>
            <p className='item-message'>{this.props.kit.comment}</p>
          </div>

          <footer className='kit-footer'>
            <p>Listed by:</p>
            <h4>{this.props.user.name}</h4>
            <a href={"mailto:" + this.props.user.email}>{this.props.user.email}</a>
          </footer>
      </div>

    )
  }
}

export default MyKits;
