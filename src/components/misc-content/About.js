import React, { Component } from 'react';

import {Link} from 'react-router';

class About extends Component {


  render() {
    return (
      <section className='about-section'>
        <div className='about-wrapper'>
          <h1 className='about-h1'>Kit-trader upcycles uniforms.</h1>
          <h4>With kit-trader.com, you can browse for club uniforms or post your own.</h4>
          <h4>Offer your kit for sale, for trade, or as a donation (it is free).</h4>
          <div className='about-buttons'>
            <Link to="/builder">Unwanted uniform? <span>Find someone who needs it.</span>Post it!</Link>
            <Link to="/viewer">Need a uniform? <span>Need it today? Find one.</span>Find it!</Link>
          </div>
          <h3>What is a 'kit'?</h3>
          <p>A kit is a set of items which comprise player standard uniform attire.</p>
          <p>Soccer kits required by soccer clubs typically include one or more jerseys, shorts, socks, and warmups.</p>
          <p>With Kit-trader, you can offer or search for locally-owned kits with as little as one item (one jersey) or an entire clubs required items. Every team starts with a kit.</p>
        </div>
      </section>
    );
  }
}

export default About;
