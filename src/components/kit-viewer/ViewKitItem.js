import React, {Component} from 'react';


import ItemDisplay from '../svgs/ItemDisplay'

class ViewKitItem extends Component {


    getPrice(price) {
      console.log('price', price)
        if (price > 0) {
            return ` | $${price}`;
        }
    }

    // getNumber(num) {
    //     if (num !== '') {
    //         return `#${num}`;
    //     }
    // }

    render() {
        return (
          <article className='kit-item'>
                <ItemDisplay type={this.props.item.item_type} color={this.props.item.color} />
                <h5>{this.props.item.number}</h5>
                <p className='view-tag'>{this.props.item.condition}</p>
                <p className='view-tag'>{this.props.item.size}{this.getPrice(this.props.item.price)}</p>
            </article>
        )
    }
}

export default ViewKitItem;
