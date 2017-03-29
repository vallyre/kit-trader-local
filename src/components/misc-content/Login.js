import React, {Component} from 'react';
import facebook from '../../images/fbook.svg';
import google from '../../images/google.svg';
import MainLogo from '../../components/svgs/MainLogo';
import child from '../../images/nouniform.png';
import jersey from '../../images/jersey.svg';
import jacket from '../../images/jacket.svg';
import shorts from '../../images/shorts.svg';
import pants from '../../images/pants.svg';
import socks from '../../images/socks.svg';
import shinguards from '../../images/shinguards.svg';
import ball from '../../images/ball.svg';
import shoes from '../../images/shoes.svg';
import gloves from '../../images/gloves.svg';

class Login extends Component {

    render() {
        return (
            <div >

                <h1 className='about-h1'>We upcycle uniforms.</h1>
                <div className='about-wrapper'>
                    <div className='about-col1'>

                        <article className='login-section'>
                            <h3>Login to use Kit-trader<MainLogo/></h3>
                            <form className='login-form' type='submit'>
                                <a href='https://kit-trader.herokuapp.com/auth/facebook'>Facebook<img src={facebook} alt='facebook icon'/>Login</a>
                                <a href='https://kit-trader.herokuapp.com/auth/google_oauth2'>Google<img src={google} alt='google icon'/>Login</a>
                            </form>
                        </article>

                    </div>
                    <div className='about-col2'>

                        <div className='main-tag'>
                            <h4>With kit-trader.com, you can browse for club uniforms or post your own.
                                <span>Offer your kit for sale, for trade, or donate it to someone.</span>
                            </h4>
                        </div>
                        <article className='kit-description'>
                            <h3>What is a 'kit'?</h3>
                            <ul>
                                <li><img src={jersey} alt='jersey'/></li>
                                <li><img src={shorts} alt='shorts'/></li>
                                <li><img src={jacket} alt='jacket'/></li>
                                <li><img src={pants} alt='pants'/></li>
                                <li><img src={socks} alt='socks'/></li>
                                <li><img src={shoes} alt='shoes'/></li>
                                <li><img src={ball} alt='ball'/></li>
                                <li><img src={shinguards} alt='shinguards'/></li>
                                <li><img src={gloves} alt='gloves'/></li>
                            </ul>
                            <p>A kit is a set of items which comprise player standard uniform attire.</p>
                            <p>Soccer kits required by soccer clubs typically include one or more jerseys, shorts, socks, and warmups.</p>
                            <p>Kit-trader unites families with extra uniforms with the families who need them.</p>
                            <p>Every team starts with a kit.</p>
                        </article>
                    </div>
                    <div className='about-col3'>
                        <img src={child} alt='child player'/>

                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
