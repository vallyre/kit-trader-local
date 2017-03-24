import React, { Component } from 'react';
import MainHeader from './layout-components/MainHeader'
import MainFooter from './layout-components/MainFooter'


class App extends Component {
  render() {
    return (

      <div>
      <MainHeader />
      <main>
      {this.props.children}
      </main>
      <MainFooter />
      </div>

    );
  }

}

export default App;
