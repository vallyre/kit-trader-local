import React, {Component} from 'react';
import ViewKitItem from './ViewKitItem';

class Kits extends Component {




  render() {
    return (
      <div className='kit'>
          <h3 className='kit-type'>{this.props.kit.trans_type} my kit! {this.props.kit.price}</h3>
          <div className='kit-content'>
              <h4>{this.props.kit.league} | {this.props.kit.season}</h4>
              <div className='kit-item-wrapper'>
                {Object
                  .keys(this.props.kit.items)
                  .map(key => <ViewKitItem key={key} item={this.props.kit.items[key]}/>)
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

export default Kits;
