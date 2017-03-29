import React, {Component} from 'react';
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
        let stuff = {
            method: 'get',
            url: 'https://kit-trader.herokuapp.com/auth/sessions',
            withCredentials: true
        };
        axios(stuff).then((response) => {
            let user = response.data;
            console.log('ITS THE APP');
            this.setState({user});
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                add: this.getUser,
                user: this.state.user
            });
        });

        return (

            <div>
                <MainHeader/>
                <main>

                    {childWithProp}

                </main>
                <MainFooter/>
            </div>

        );
    }

}

export default App;
