import React, {Component} from 'react';

import Kits from './Kits';

class AllKits extends Component {

  constructor() {
    super();
    this.makeKits = this.makeKits.bind(this);
  }

  makeKits() {
    console.log('in makeKits');
  }

    render() {
        return (
            <div className='kit-display'>
              {this.makeKits()}
              {Object
                .keys(this.props.kits)
                .map(key => <Kits key={key} kit={this.props.kits[key]} club={this.props.club}/>)}
            </div>
        )
    }
}

export default AllKits;
