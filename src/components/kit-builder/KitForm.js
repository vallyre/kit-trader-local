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
            trans_type: this.transtype.value,
            price: this.kitprice.value,
            club: this.club.value,
            league: this.level.value,
            season: this.season.value,
            comment: this.comment.value,
            club_id: Number(this.club.value),
            user_id: this.props.currUser.id
        }
        this.props.addKit(kit);
        this.kitForm.reset();
    }

    componentDidMount() {
        this.getClubs();
    }

    getClubs() {
        axios.get(`http://kit-trader.herokuapp.com/api/clubs.json`).then((response) => {
            let clubs = response.data.clubs;
            this.setState({clubs});
            // console.log(this.state.clubs);
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {

        return (
            <form className='kit-form kitform' ref={(input) => this.kitForm = input} onSubmit={(e) => this.createKit(e)}>
                <h3>Describe your kit.</h3>
                <p>Your kit setup will display on the right.</p>

                <div className='form-line'>

                    <label htmlFor='kit-trans-type'>I want to</label>
                    <select ref={(input) => this.transtype = input} className='kit-trans-type' name='kit-trans-type'>
                        <option value='sell'>Sell</option>
                        <option value='trade'>Trade</option>
                        <option value='donate'>Donate</option>
                    </select>
                    <span>*</span>

                    <label htmlFor='kit-price'>Whole kit price $</label>
                    <input className='kit-price' ref={(input) => this.kitprice = input} type='number' name='kit-price' min='0' max='500.0'/>

                </div>

                <div className='form-line'>

                    <label htmlFor='club'></label>
                    <select className='kit-club' ref={(input) => this.club = input} name='club'>

                        {this.state.clubs.map((club) => <option value={club.id} key={club.id}>{club.short_name}
                            | {club.long_name}</option>)}

                    </select>
                    <span>*</span>

                    <select ref={(input) => this.level = input} className='kit-club-level'>
                        <option value='classic'>Classic</option>
                        <option value='challenge'>Challenge</option>
                        <option value='select'>Select</option>
                        <option value='academy'>Academy</option>
                        <option value='recreation'>Recreation</option>
                    </select>
                    <span>*</span>

                </div>

                <div className='form-line'>

                    <label htmlFor='year'>Season</label>
                    <select ref={(input) => this.season = input} className='kit-season' name='size'>
                        <option value='2015-2016'>2015-2016</option>
                        <option value='2016-2017'>2016-2017</option>
                        <option value='2017-2018'>2017-2018</option>
                    </select>
                    <span>*</span>
                </div>

                <textarea ref={(input) => this.comment = input} maxLength='100' placeholder='Briefly comment on your items.'></textarea>
                <div className='form-line'>
                    <button className='green-btn' type='submit'>Make kit</button>
                </div>
            </form>

        )
    }
}

export default KitForm;
