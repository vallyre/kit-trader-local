import React, {Component} from 'react';

class Clubs extends Component {

  constructor() {
    super();
    this.setFilter = this.setFilter.bind(this);

  }

  setFilter() {
    console.log('IN SET FILTER');
    this.props.filter(this.props.club);
  }

    render() {
        return (
            <div className='club' onClick={this.setFilter}>
                <img className='w' src={this.props.club.image
                    ? require(`../../images/clublogos/${this.props.club.image}`)
                    : ''} alt='club logo'/>
                  <h3>{this.props.club.short_name}</h3>
                  <h4>{this.props.club.long_name}</h4>
            </div>

        )
    }
}

export default Clubs;
