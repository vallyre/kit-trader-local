import React, {Component} from 'react';


import ItemDisplay from '../svgs/ItemDisplay'

class MyKitItem extends Component {

  getPrice(price) {
      if (Number(price) > 0) {
          return ` | $${price}`;
      }
  }

  getNumber(num) {
      if (num) {
          return `#${num}`;
      }
  }

    render() {
        return (
          <article className='kit-item'>
                <ItemDisplay type={this.props.item.item_type} color={this.props.item.color} />
                <h5>{this.getNumber(this.props.item.number)}</h5>
                <p>{this.props.item.condition}</p>
                <p>{this.props.item.size}{this.getPrice(this.props.item.price)}</p>
            </article>
        )
    }
}

export default MyKitItem;
