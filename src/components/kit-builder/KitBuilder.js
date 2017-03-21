import React, {Component} from 'react';
import MainHeader from '../layout-components/MainHeader';
import MainFooter from '../layout-components/MainFooter';
import KitBuilderTitle from './KitBuilderTitle';
import KitForm from './KitForm';
import ItemForm from './ItemForm';
import KitDisplay from './KitDisplay';
import Arrow from '../svgs/Arrow';


import '../../stylesheets/kitbuilder.css';

class KitBuilder extends Component {
  constructor() {
    super();
    this.state={
      kit: {
        price: null,
        club: 'TFCA',
        level: 'Classic',
        season: '2015',
        comment: null
      }
    };
  }
    render() {
        return (
            <div>
                <MainHeader/>
                <main>
                    <section className='kit-builder-section'>

                        <KitBuilderTitle />

                        <div className='kit-builder-display-wrapper'>

                            <div className='kit-builder-forms'>
                                <KitForm/>
                                <ItemForm/>
                            </div>

                            <div className='kit-arrow'>
                                <Arrow/>
                            </div>

                            <div className='kit-display-wrapper'>

                              <KitDisplay details={this.state.kit}/>

                            </div>
                        </div>
                    </section>
                </main>
                <MainFooter/>
            </div>
        )
    }
}
export default KitBuilder;
