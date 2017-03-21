import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match} from 'react-router';

import Home from './components/misc-content/Home'
import Login from './components/misc-content/Login'
import KitBuilder from './components/kit-builder/KitBuilder'
import KitViewer from './components/kit-viewer/KitViewer'
import KitProfile from './components/kit-profile/KitProfile'

import './stylesheets/main.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/login" component={Login} />
                <Match pattern="/kit-builder" component={KitBuilder} />
                <Match pattern="/kit-viewer" component={KitViewer} />
                <Match pattern="/kit-profile" component={KitProfile} />
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.querySelector('#root'));
