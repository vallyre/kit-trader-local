import React, {Component} from 'react';

import {Link} from 'react-router';

class Choice extends Component {

    render() {
        return (
            <section className='choice-section'>
                <div className='choice-wrapper'>
                  <h1>Where should I route you</h1>
                    <Link className='green-btn choice' to="/builder">Unwanted uniform?
                        <span>Find someone who needs it.</span>Post it!</Link>
                    <Link className='green-btn choice' to="/viewer">Need a uniform?
                        <span>Need it today? Find one.</span>Find it!</Link>
                </div>
            </section>
        );
    }
}

export default Choice;
