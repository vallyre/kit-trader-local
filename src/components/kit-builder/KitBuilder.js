import React, {Component} from 'react';
import KitBuilderTitle from './KitBuilderTitle';
import KitForm from './KitForm';
import ItemForm from './ItemForm';
import KitDisplay from './KitDisplay';
import Arrow from '../svgs/Arrow';

import {Link} from 'react-router';

import '../../stylesheets/kitbuilder.css';

class KitBuilder extends Component {
    constructor() {
        super();
        this.addKit = this.addKit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.showItemForm = this.showItemForm.bind(this);
        this.showKitForm = this.showKitForm.bind(this);

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
          <Link className='post-btn' to="/profile">Post it!</Link>
        </span>
          )
      }
    }
    showKitForm() {
      if (!Object.keys(this.state.kits).length) {

        return <KitForm addKit={this.addKit} />
      }
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
                        <KitDisplay allKits={this.state.kits} addKit={this.addKit} allItems={this.state.items} addItem={this.addItem} />
                </div>
            </section>

        )
    }
}
export default KitBuilder;
