import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/misc-content/Home'
import Login from './components/misc-content/Login'
import KitBuilder from './components/kit-builder/KitBuilder'
import KitViewer from './components/kit-viewer/KitViewer'
import KitProfile from './components/kit-profile/KitProfile'
import KitMessages from './components/kit-messages/KitMessages'

import './stylesheets/main.css';

const Root = () => {

    return (
        <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="/kit" component={App}>
                  <IndexRoute component={Login} />
                  <Route path="/builder" component={KitBuilder}/>
                  <Route path="/viewer" component={KitViewer}/>
                  <Route path="/profile" component={KitProfile}/>
                  <Route path="/messages" component={KitMessages}/>
                </Route>
        </Router>
    )
}

render(<Root />, document.querySelector('#root'));
