import React, {Component} from 'react';
import facebook from '../../images/fbook.svg';
import google from '../../images/google.svg';
import MainLogo from '../../components/svgs/MainLogo';
import video from '../../images/movie2.mp4';
import jersey from '../../images/jersey.svg';
import jacket from '../../images/jacket.svg';
import shorts from '../../images/shorts.svg';
import pants from '../../images/pants.svg';
import socks from '../../images/socks.svg';
import shinguards from '../../images/shinguards.svg';
import ball from '../../images/ball.svg';
import shoes from '../../images/shoes.svg';
import gloves from '../../images/gloves.svg';
import acs from '../../images/clublogos/acs.png';
import casl from '../../images/clublogos/casl.png';
import tusa from '../../images/clublogos/tusa.png';
import tfca from '../../images/clublogos/tfca.png';
import sasl from '../../images/clublogos/sasl.png';
import wfc from '../../images/clublogos/wfc.png';

class Login extends Component {

    render() {
        return (
            <div>
                <div className='index-video-wrapper'>
                    <video autoPlay loop id='index-video'>
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>

                <div className='about-wrapper'>

                    <div className='about-col3'>
                        <div className='main-tag'>
                            <p>With kit-trader.com, you can browse for club uniforms or post your own.</p>
                            <ul>
                              <li><img src={acs} alt='jersey'/></li>
                              <li><img src={casl} alt='shorts'/></li>
                              <li><img src={tusa} alt='jacket'/></li>
                              <li><img src={tfca} alt='pants'/></li>
                              <li><img src={sasl} alt='pants'/></li>
                              <li><img src={wfc} alt='pants'/></li>
                            </ul>
                            <p>Offer your kit for sale, for trade, or donate it to someone.</p>
                              <p>Kit-trader unites families with extra uniforms with the families who need them.</p>

                        </div>
                    </div>

                    <div className='about-col1'>
                        <h1 className='about-h1'>Upcycling uniforms.</h1>

                        <article className='login-section'>
                            <h3>Login to use Kit-trader<MainLogo/></h3>
                            <form className='login-form' type='submit'>
                                <a href='https://kit-trader.herokuapp.com/auth/facebook'>Facebook<img src={facebook} alt='facebook icon'/>Login</a>
                                <a href='https://kit-trader.herokuapp.com/auth/google_oauth2'>Google<img src={google} alt='google icon'/>Login</a>
                            </form>
                        </article>

                    </div>
                    <div className='about-col2'>

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
                            <div className='what-kit'>

                                <p>A kit is a set of items which comprise player standard uniform attire.</p>
                                <p>Required Soccer kits typically include multiple jerseys, shorts, socks, and warmups.</p>
                                <p>Every team starts with a kit.</p>
                            </div>
                        </article>
                    </div>

                </div>
            </div>

        );
    }
}

export default Login;
