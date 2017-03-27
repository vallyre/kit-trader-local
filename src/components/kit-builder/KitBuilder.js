import React, {Component} from 'react';
import KitBuilderTitle from './KitBuilderTitle';
import KitForm from './KitForm';
import ItemForm from './ItemForm';
import KitDisplay from './KitDisplay';
import Arrow from '../svgs/Arrow';
import axios from 'axios';


import {Link} from 'react-router';

import '../../stylesheets/kitbuilder.css';

class KitBuilder extends Component {
    constructor() {
        super();
        this.addKit = this.addKit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.showItemForm = this.showItemForm.bind(this);
        this.showKitForm = this.showKitForm.bind(this);
        this.postKit = this.postKit.bind(this);

        this.state = {
            kits: {},
            items: {}
        };

    }


    addKit(kit) {
        const kits = {
            ...this.state.kits
        };
        const timestamp = Date.now();
        kits[`kit-${timestamp}`] = kit;
        this.setState({kits: kits})
    }
    addItem(item) {
        const items = {
            ...this.state.items
        };
        const timestamp = Date.now();
        items[`item-${timestamp}`] = item;
        this.setState({items: items})
    }

    showItemForm() {
      if (Object.keys(this.state.kits).length) {

        return (
          <span>
          <ItemForm addItem={this.addItem} />
          <p className='post-btn' onClick={(e) => this.postKit(this.state.kits)} to="/profile">Post it!</p>
        </span>
          )
      }
    }
    showKitForm() {
      if (!Object.keys(this.state.kits).length) {

        return <KitForm addKit={this.addKit} currUser={this.props.user} />
      }
    }

    postKit(kitThing) {
      console.log('kitThing', kitThing);
      // const postKit = {
      //     kit: {
      //       trans_type: kitThing.kit-bunchanumbers.trans_type,
      //       price: kitThing.kit-bunchanumbers.price,
      //       zip_code: kitThing.kit-bunchanumbers.zip_code,
      //       league: kitThing.kit-bunchanumbers.league,
      //       season: kitThing.kit-bunchanumbers.season,
      //       comment: kitThing.kit-bunchanumbers.comment,
      //       club_id: kitThing.kit-bunchanumbers.club_id,
      //       user_id: kitThing.kit-bunchanumbers.user_id,
      //   }
      // }
          axios.post(`http://kit-trader.herokuapp.com/api/kits`, kitThing)
          .then ((response) => {
              console.log(response);
              <Link to="/profile" activeClassName='active' />
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    render() {
        return (

            <section className='kit-builder-section'>

                <KitBuilderTitle/>

                <div className='kit-builder-wrapper'>

                    <div className='kit-builder-forms'>
                        {this.showKitForm()}
                        {this.showItemForm()}
                    </div>

                    <div className='kit-arrow'>
                        <Arrow/>
                    </div>
                        <KitDisplay allKits={this.state.kits} addKit={this.addKit} allItems={this.state.items} addItem={this.addItem} currUser={this.props.user}/>
                </div>
            </section>

        )
    }
}
export default KitBuilder;
