import React, { Component } from 'react';
import MainHeader from './layout-components/MainHeader'
import MainFooter from './layout-components/MainFooter'
import axios from 'axios';


class App extends Component {

  constructor() {
      super();
      this.getUser = this.getUser.bind(this);
      this.state = {
        user: {}
      };
  }
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    console.log('getUser IN');
      axios.get(`http://kit-trader.herokuapp.com/api/users.json`)
      .then ((response) => {
        let user = response.data.users[8];
        console.log('in');
        this.setState({user});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {

    const childWithProp =
      React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {add: this.getUser, user: this.state.user});
    });

    return (

      <div>
      <MainHeader />
      <main>

        {childWithProp}

      </main>
      <MainFooter />
      </div>

    );
  }

}

export default App;
