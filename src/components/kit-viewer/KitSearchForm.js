import React, {Component} from 'react';

import Clubs from './Clubs';

class KitSearchForm extends Component {

    getFilterValue() {
        return this.filterMenu.value;
    }

    render() {

        if (this.props.formType === 'secondary') {
            return (

                <form className={this.props.classes}>

                    <label htmlFor='search-club'>Select a Club</label>
                    <select className='kit-club' ref={(field) => this.filterMenu = field} name='club' onChange={() => {
                        this.props.filter(this.getFilterValue());
                    }}>
                        <option value='null'>Select a Club</option>
                        {this.props.allClubs.map((club) => <option value={club.short_name} key={club.short_name}>{club.short_name}
                            | {club.long_name}</option>)}

                    </select>

                </form>
            )
        } else {
            return (
                <div className='club-select'>
                  {this.props.allClubs
                  .map((key) =>  <Clubs key={key.id} club={key} filter={this.props.filter} />)}
                </div>
            );

        }
    }
}

export default KitSearchForm;
