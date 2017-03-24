import React, {Component} from 'react';
import KitMessagesTitle from './KitMessagesTitle';

import '../../stylesheets/kitmessages.css';

class KitMessages extends Component {
  render() {
    return (

      <section>
        <KitMessagesTitle />
        <p>Kit messages content</p>
      </section>
    )
  }
}
export default KitMessages;
