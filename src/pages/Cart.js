import React, { Component } from 'react';
import Navbar from '../components/Navbar';

const menuStyle = {
    marginTop: '15px', padding: '5px',
    border: '1px solid blue', borderRadius: '5px',
    display: 'flex', flexDirection: 'row'
};

class Cart extends Component {


    render() {
    
         console.log('hihihi');
        return (
        <>
            <Navbar title="Your Orders" />
            <div >
            { this.props.item.orders.map( (m, i) => <p key={i}>{m.id}  {m.name} </p>)}
            </div>
        </>
        )
    }

}

export default Cart;
