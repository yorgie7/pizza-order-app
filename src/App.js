import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
const CartLazy = React.lazy(() => import('./pages/Cart'));


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

        console.log('sent from App to cart....');

    }


    render() {
        return (<>
    <Suspense fallback={()=> <span>loading..</span>}>
            <Router>
                <Switch>
                    <Route path="/cart" exact component={() => <CartLazy item={this.state} />} />
                    <Route path="/" exact component={() => <Home GoToCart={this.AddAll} />} />

                </Switch>

            </Router>
            </Suspense>
        </>
        )
    }

}

export default App;
