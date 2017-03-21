import React, {Component} from 'react';
import MainHeader from '../layout-components/MainHeader';
import MainFooter from '../layout-components/MainFooter';
import facebook from '../../img/fbook.svg';
import google from '../../img/google.svg';
import logowide from '../../img/logowide.svg';


import '../../stylesheets/login.css';

class Login extends Component {

  goToKitProfile() {
    this.context.router.transitionTo('/kit-profile');
  }

    render() {
        return (
            <div>
                <MainHeader/>
                <main>
                <section className='login-section'>
                    <h3>Please login or create a Kit-Trader account<img src={logowide} alt='kit-trader'/></h3>
                    <form className='login-form' type='submit'>
                        <p onClick={this.goToKitProfile.bind(this)}>Use Facebook<img src={facebook} alt='facebook icon'/></p>
                        <p onClick={this.goToKitProfile.bind(this)}>Use Google<img src={google} alt='google icon'/></p>
                    </form>
                </section>
                </main>
                <MainFooter />
            </div>

        );
    }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
