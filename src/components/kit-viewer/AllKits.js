import React, {Component} from 'react';

import Kits from './Kits';

class AllKits extends Component {


    render() {
        return (
            <div className='kit-display'>

              {Object
                .keys(this.props.kits)
                .map(key => <Kits key={key} kit={this.props.kits[key]} club={this.props.club}/>)}
            </div>
        )
    }
}

export default AllKits;
