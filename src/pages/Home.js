import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SingleItem from '../components/SingleItem';
import './App.css';

const MenuList = [
    {
        "id": 1,
        "price": "299",
        "name": "Vesuvius",
        "ImgUrl": 'https://bit.ly/3eRNZIz'
    },
    {
        "id": 7,
        "price": "299",
        "name": "Vesuvius",
        "ImgUrl": 'https://bit.ly/3aHgYLQ'
    },
    {
        "id": 8,
        "price": 299,
        "name": "Vesuvius",
        "ImgUrl": 'https://bit.ly/3cP5aIS'
    },
    {
        "id": 2,
        "price": 199,
        "name": "Vesuvius",
        "ImgUrl": 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
    }, {
        "id": 3,
        "price": 399,
        "name": "Vesuvius",
        "ImgUrl": 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        "id": 4,
        "price": 299,
        "name": "Vesuvius",
        "ImgUrl": 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
    }, {
        "id": 5,
        "price": 299,
        "name": "Vesuvius",
        "ImgUrl": 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        "id": 6,
        "price": 299,
        "name": "Vesuvius",
        "ImgUrl": 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
    }
];


const menuStyle = {
    marginTop: '15px', padding: '5px',
    border: '1px solid blue', borderRadius: '5px',
    display: 'flex', flexDirection: 'row'
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        TotelAmmount: 0,
            orders: []
        }
        this.Items = {
            Menu: MenuList,
        }
        // binding Functions
        this.AddF = this.AddF.bind(this);
        this.AddToList = this.AddToList.bind(this);
    }



    async AddF(orderDetails) {
       console.log('Home line 85');
        await this.setState({ TotelAmmount: this.state.TotelAmmount + orderDetails.totel });
        await this.setState({ orders: this.state.orders.concat(orderDetails.orderItem) });
        console.log(this.state);
     
    }

    AddToList() {

        console.log('state sent to Cart');
        this.props.GoToCart(this.state);

    }


    render() {
        return (<>
            <Navbar title="Pizza- App" />
            <div style={{
                margin: '40px 0 0 10%',
                height: '75vh', overflow: 'scroll',
                width: '60%', minWidth: '400px'
            }} className='divHideScroll'>
                {
                    this.Items.Menu.map(m => (
                        <div key={m.id}
                            style={menuStyle}>

                            <SingleItem item={m} AddItemsCart={this.AddF} />

                        </div>)
                    )
                }
            </div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={this.AddToList}>Place Order</button>

                <Link to='/cart'>GO To Cart</Link>
            </div>
          
        </>
        )
    }

}

export default Home;
