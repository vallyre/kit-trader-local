import React from 'react';
import logowide from '../../images/logowide.svg';
import {Link} from 'react-router';



const NotFound = () => {

    return (
        <section className='section-wrapper notfound' >
          <div className='notfound-content'>
            <img src={logowide} alt='kit-trader'/>
            <h2>That page doesn&#39;t exist...</h2>
            <Link className='green-btn' to="/">Back to the homepage?</Link>
          </div>
        </section>
    )
}

export default NotFound;
