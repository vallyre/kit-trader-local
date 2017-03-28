import React, {Component} from 'react';
import KitViewerTitle from './KitViewerTitle';
import KitSearchForm from './KitSearchForm';
import AllKits from './AllKits';
import axios from 'axios';

class KitViewer extends Component {

    constructor() {
        super();
        this.getClubs = this.getClubs.bind(this);
        this.filterClubs = this.filterClubs.bind(this);
        this.showKits = this.showKits.bind(this);
        this.showSearchForm = this.showSearchForm.bind(this);

        this.state = {
            clubs: [],
            filtered: {}
        };
    }

    componentDidMount() {
        this.getClubs();
    }

    getClubs() {
        axios.get(`http://kit-trader.herokuapp.com/api/clubs.json`).then((response) => {
            let clubs = response.data.clubs;
            console.log('all clubs', clubs);
            this.setState({clubs});
        }).catch(function(error) {
            console.log(error);
        });
    }

    filterClubs(fclub) {
        let filtered = {
            ...this.state.filtered
        };
        let allClubs = this.state.clubs;

        for (let i = 0; i < allClubs.length; i++) {
            if (allClubs[i].short_name === fclub) {
                filtered = allClubs[i];
                this.setState({filtered: filtered});
                this.showKits();
            }
        }
    }

    showKits() {
        if (Object.keys(this.state.filtered).length) {

            return (
                <div>
                    <h2>All Kits for: {this.state.filtered.short_name}
                        | {this.state.filtered.long_name}</h2>
                    <img className='viewer-club-logo' src={this.state.filtered.image
                        ? require(`../../images/clublogos/${this.state.filtered.image}`)
                        : ''} alt='club logo'/>
                      <AllKits kits={this.state.filtered.kits} club={this.state.filtered}/>
                    <KitSearchForm classes='form-secondary' allClubs={this.state.clubs} filter={this.filterClubs}/>
                </div>
            )
        }
    }

    showSearchForm() {
        if (!Object.keys(this.state.filtered).length) {

            return (<KitSearchForm classes='kit-form' allClubs={this.state.clubs} filter={this.filterClubs}/>)
        }
    }

    render() {
        return (
            <section className='section-wrapper'>
                <KitViewerTitle/>

                    <div className='content-wrapper viewer'>
                        {this.showSearchForm()}
                        {this.showKits()}
                    </div>

            </section>

        )
    }
}
export default KitViewer;
