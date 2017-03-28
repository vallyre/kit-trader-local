import React, {Component} from 'react';
import facebook from '../../images/fbook.svg';
import google from '../../images/google.svg';
import logowide from '../../images/logowide.svg';

class Login extends Component {

  goToKitProfile() {
    this.context.router.transitionTo('/kit-profile');
  }

    render() {
        return (

                <section className='login-section'>
                    <h3>Please login to create a kit-trader account<img src={logowide} alt='kit-trader'/></h3>
                    <form className='login-form' type='submit'>
                        <a href='https://kit-trader.herokuapp.com/auth/facebook' onClick={this.goToKitProfile.bind(this)}>Use Facebook<img src={facebook} alt='facebook icon'/></a>
                        <a href='https://kit-trader.herokuapp.com/auth/google_oauth2' onClick={this.goToKitProfile.bind(this)}>Use Google<img src={google} alt='google icon'/></a>
                    </form>
                </section>


        );
    }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
