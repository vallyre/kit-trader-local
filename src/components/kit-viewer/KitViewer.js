import React, {Component} from 'react';
import MainHeader from '../layout-components/MainHeader';
import MainFooter from '../layout-components/MainFooter';
import KitViewerTitle from './KitViewerTitle';
import KitSearchForm from './KitSearchForm';


import tfcalogo from '../../img/clublogos/tfca.png'
import casllogo from '../../img/clublogos/casl.png'
import tusalogo from '../../img/clublogos/tusa.png'
import acslogo from '../../img/clublogos/acs.png'
import bsclogo from '../../img/clublogos/bsc.png'
import jersey from '../../img/jersey.svg'
import jacket from '../../img/jacket.svg'
import pants from '../../img/pants.svg'
import shorts from '../../img/shorts.svg'
import shoes from '../../img/shoes.svg'
import ball from '../../img/ball.svg'
import gloves from '../../img/gloves.svg'
import vrh from '../../img/vrh_small.jpg'

import '../../stylesheets/kitviewer.css';

class KitViewer extends Component {
  render() {
    return (
      <div>
      <MainHeader />
      <main>
        <section className='kit-viewer-section'>

          <KitViewerTitle />

          <div className='kit-viewer-search'>

            <KitSearchForm />

          </div>

          <div className='kit-viewer-display-container'>
            <h3>Available Kits </h3>
            <div className='kit-viewer-display'>

              <article className='kit'>
                <img className='club-logo' src={tfcalogo} alt='club logo' />
                <h3>Kit For Sale | $50</h3>
                <h4>TFCA | Classic | 2015-2016</h4>
                <div className='item-detail-wrapper'>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={jacket} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={shoes} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                </div>
                <p className='item-message'>Worn for one season, small stain on the knees and stain on front of yellow jersey.</p>
                <footer className='kit-viewer-footer'>
                  <img src={vrh} alt='user' />
                  <div className='kit-viewer-footer-text'>
                    <h4>Vallyre Hyers | 27712</h4>
                    <h4>Contact: kit-message</h4>
                  </div>
                  <button className='kit-delete'>X</button>
                </footer>
              </article>
              <article className='kit'>
                <img className='club-logo' src={casllogo} alt='club logo' />
                <h3>Kit For Sale | $50</h3>
                <h4>CASL | Challenge | 2015-2016</h4>
                <div className='item-detail-wrapper'>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                </div>
                <p className='item-message'>Worn for one season, small stain on the knees and stain on front of yellow jersey.</p>
                <footer className='kit-viewer-footer'>
                  <img src={vrh} alt='user' />
                  <div className='kit-viewer-footer-text'>
                    <h4>Vallyre Hyers | 27712</h4>
                    <h4>Contact: email</h4>
                  </div>
                  <button className='kit-delete'>X</button>
                </footer>
              </article>
              <article className='kit'>
                <img className='club-logo' src={tusalogo} alt='club logo' />
                <h3>Kit For Sale | $50</h3>
                <h4>TUSA | Classic | 2015-2016</h4>
                <div className='item-detail-wrapper'>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={shorts} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={pants} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                </div>
                <p className='item-message'>Worn for one season, small stain on the knees and stain on front of yellow jersey.</p>
                <footer className='kit-viewer-footer'>
                  <img src={vrh} alt='user' />
                  <div className='kit-viewer-footer-text'>
                    <h4>Vallyre Hyers | 27712</h4>
                    <h4>Contact: phone</h4>
                  </div>
                  <button className='kit-delete'>X</button>
                </footer>
              </article>
              <article className='kit'>
                <img className='club-logo' src={acslogo} alt='club logo' />
                <h3>Kit For Sale | $50</h3>
                <h4>ACS | Classic | 2015-2016</h4>
                <div className='item-detail-wrapper'>
                  <article className='item-detail'>
                    <img src={jersey} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                </div>
                <p className='item-message'>Worn for one season, small stain on the knees and stain on front of yellow jersey.</p>
                <footer className='kit-viewer-footer'>
                  <img src={vrh} alt='user' />
                  <div className='kit-viewer-footer-text'>
                    <h4>Vallyre Hyers | 27712</h4>
                    <h4>Contact:  kit-message</h4>
                  </div>
                  <button className='kit-delete'>X</button>
                </footer>
              </article>
              <article className='kit'>
                <img className='club-logo' src={bsclogo} alt='club logo' />
                <h3>Kit For Sale | $50</h3>
                <h4>BSC | Academy | 2015-2016</h4>
                <div className='item-detail-wrapper'>
                  <article className='item-detail'>
                    <img src={gloves} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={ball} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                  <article className='item-detail'>
                    <img src={shoes} alt='kit-item-display' />
                    <p>Like New</p>
                    <p>YL | $20</p>
                  </article>
                </div>
                <p className='item-message'>Worn for one season, small stain on the knees and stain on front of yellow jersey.</p>
                <footer className='kit-viewer-footer'>
                  <img src={vrh} alt='user' />
                  <div className='kit-viewer-footer-text'>
                    <h4>Vallyre Hyers | 27712</h4>
                    <h4>Contact: email, kit-message</h4>
                  </div>
                  <button className='kit-delete'>X</button>
                </footer>
              </article>
            </div>
          </div>
        </section>
      </main>
      <MainFooter />
      </div>
    )
  }
}
export default KitViewer;
