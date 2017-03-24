import React, {Component} from 'react';
import Kit from './Kit';

class KitDisplay extends Component {
    render() {
        return (
            <div className='kit-display'>

              {Object
                .keys(this.props.allKits)
                .map(key => <Kit key={key} kit={this.props.allKits[key]} allItems={this.props.allItems} />)
              }

            </div>
        )
    }
}

export default KitDisplay;
