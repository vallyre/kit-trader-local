import React, {Component} from 'react';
import MyKitItem from './MyKitItem';

class MyKits extends Component {

  render() {
    return (
      <div className='mykit'>
        <img className='kit-club-logo' src={this.props.kit.club_image ? require(`../../images/clublogos/${this.props.kit.club_image}`) : ''} alt='club logo'/>
          <h3 className='kit-type'>{this.props.kit.trans_type} my kit! {this.props.kit.price}</h3>
          <div className='mykit-content'>
            <h3>{this.props.kit.short_name } | {this.props.kit.long_name}</h3>
              <h4>{this.props.kit.league} | {this.props.kit.season}</h4>
              <div className='mykit-item-wrapper'>
                {Object
                  .keys(this.props.kit.items)
                  .map(key => <MyKitItem key={key} item={this.props.kit.items[key]}/>)
                }
              </div>
              <button className='delete-btn'>Delete this Kit</button>
              <p className='item-message'>{this.props.kit.comment}</p>
          </div>

          <footer className='kit-footer'>
          </footer>
      </div>

    )
  }
}

export default MyKits;
