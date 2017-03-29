import React, {Component} from 'react';
import KitBuilderTitle from './KitBuilderTitle';
import KitForm from './KitForm';
import ItemForm from './ItemForm';
import KitDisplay from './KitDisplay';
import Arrow from '../svgs/Arrow';
import axios from 'axios';
import {Link} from 'react-router';


class KitBuilder extends Component {
    constructor() {
        super();
        this.addKit = this.addKit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.showItemForm = this.showItemForm.bind(this);
        this.showKitForm = this.showKitForm.bind(this);
        this.postKit = this.postKit.bind(this);
        this.postItem = this.postItem.bind(this);

        this.state = {
            kits: {},
            items: {},
            kitId: ''
        };

    }


    addKit(kit) {
        const kits = {
            ...this.state.kits
        };
        const timestamp = Date.now();
        kits[`kit-${timestamp}`] = kit;
        this.setState({kits: kits})
        this.postKit(kit);
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
            <ItemForm addItem={this.addItem} postItem={this.postItem} kitId={this.state.kitId} />
            <Link className='green-btn post-btn' to="/profile">Looks Good Post it!</Link>
          </span>
        )
      }
    }
    showKitForm() {
      if (!Object.keys(this.state.kits).length) {

        return <KitForm postKit={this.postKit} addKit={this.addKit} currUser={this.props.user} />
      }
    }

    postKit(kitObj) {
      const kit =  {
        kit: kitObj
      };


      console.log('kit posted');

          axios.post('https://kit-trader.herokuapp.com/api/kits', kit)
          .then ((response) => {
              let kitId = this.state.kitId;
              kitId = response.data.id;
              this.setState({kitId});


          })
          .catch(function(error) {
            console.log(error);
          });
    }
    postItem(kitItem) {
      const item =  {
        item: kitItem
      }
          axios.post(`http://kit-trader.herokuapp.com/api/items`, item)
          .then ((response) => {
            console.log('item posted');


          })
          .catch(function(error) {
            console.log(error);
          });
    }

    render() {
        return (

            <section className='section-wrapper'>

                <KitBuilderTitle/>

                <div className='content-wrapper builder'>

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
