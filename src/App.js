import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TotelAmmount: 0,
            orders: []
        }

        this.AddAll = this.AddAll.bind(this);
    }

    async AddAll(ordersListObject) {
        console.log(ordersListObject);
        await this.setState({ Totelammount: ordersListObject.TotelAmmount,
                                 orders: ordersListObject.orders });

        console.log(ordersListObject.orders);
        console.log('sent to /cart from App');

    }


    render() {
        return (<>
    
            <Router>
                <Switch>
                    <Route path="/cart" exact component={() => <Cart item={this.state} />} />
                    <Route path="/" exact component={() => <Home GoToCart={this.AddAll} />} />

                </Switch>

            </Router>
        </>
        )
    }

}

export default App;
