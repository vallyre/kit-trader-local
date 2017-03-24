import React, {Component} from 'react';
import axios from 'axios';

class KitForm extends Component {

  constructor() {
      super();
      this.getClubs = this.getClubs.bind(this);
      this.state = {
        clubs: []
      };
  }

  createKit(event) {
    event.preventDefault();
    const kit = {
      transtype: this.transtype.value,
      kitprice: this.kitprice.value,
      club: this.club.value,
      level: this.level.value,
      season: this.season.value,
      zip: this.zip.value,
      cell: this.cell.value,
      comment: this.comment.value
    }
    this.props.addKit(kit);
    this.kitForm.reset();
  }

  componentDidMount() {
    this.getClubs();
  }

  getClubs() {
    axios.get(`http://kit-trader.herokuapp.com/api/clubs.json`)
    .then ((response) => {
        let clubs = response.data.clubs;
        this.setState({clubs});
        // console.log(this.state.clubs);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {

    return (
    <form ref={(input) => this.kitForm = input} className='kit-form' onSubmit={(e) => this.createKit(e)}>
      <h3>Describe your kit.</h3>
      <p>Your kit setup will display on the right.</p>

      <div className='kit-form-line'>

        <label htmlFor='kit-trans-type'>I want to</label>
        <select ref={(input) => this.transtype = input} className='kit-trans-type' name='kit-trans-type'>
          <option value='sell'>Sell</option>
          <option value='trade'>Trade</option>
          <option value='donate'>Donate</option>
        </select><span>*</span>

        <label htmlFor='kit-price'>Whole kit price $</label>
        <input ref={(input) => this.kitprice = input}className='kit-price' type='number' name='kit-price' min='0' max='500.0' />

      </div>

      <div className='kit-form-line'>

        <label htmlFor='club'>Which club?</label>
        <select ref={(input) => this.club = input}className='kit-club' name='club'>

          {this.state.clubs.map((club) =>
            <option value={club.short_name} key={club.short_name}>{club.short_name} | {club.long_name}</option>)}

        </select><span>*</span>

      <select ref={(input) => this.level = input} className='kit-club-level'>
          <option value='classic'>Classic</option>
          <option value='challenge'>Challenge</option>
          <option value='select'>Select</option>
          <option value='academy'>Academy</option>
          <option value='recreation'>Recreation</option>
        </select><span>*</span>
      </div>

      <div className='kit-form-line'>

        <label htmlFor='kit-zip'>Zip code</label>
        <input ref={(input) => this.zip = input} className='kit-zip' type='number'/><span>*</span>

        <label htmlFor='year'>Season</label>
        <select ref={(input) => this.season = input} className='kit-season' name='size'>
          <option value='2015-2016'>2015-2016</option>
          <option value='2016-2017'>2016-2017</option>
          <option value='2017-2018'>2017-2018</option>
        </select><span>*</span>

      <label htmlFor='kit-cell'>Cell #</label>
        <input ref={(input) => this.cell = input} className='kit-cell' type='tel' />
      </div>

      <textarea ref={(input) => this.comment = input} maxLength='100' placeholder='Briefly comment on your items.'></textarea>

      <button type='submit'>Make kit</button>
    </form>



)
}
}

export default KitForm;
