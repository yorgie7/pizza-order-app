import React, { Component } from 'react';


class SingleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            totel: 0,
            orderItem: this.props.item
        }
        this.AddOrder = this.AddOrder.bind(this);
        this.DeleteOrder = this.DeleteOrder.bind(this);
        this.AddToList = this.AddToList.bind(this);
    }

    AddToList() {
        console.log(this.state);
        console.log('order details sent to HomeList of orders');
        this.props.AddItemsCart(this.state);

    }



    async AddOrder(item) {
        const price1 = parseInt(item.price, 10);
        await this.setState({ totel: this.state.totel + price1, quantity: this.state.quantity + 1 });
        // console.log(this.state);
    }

    async DeleteOrder(item) {
        const price1 = parseInt(item.price, 10);
        await this.setState({ totel: this.state.totel - price1 });
        this.setState({ quantity: this.state.quantity - 1 });
        // console.log(this.state);
    }

    render() {
        const { price, name, ImgUrl } = this.props.item;
        return (<>
            <div>
                <img src={ImgUrl}
                    className='usrImg'
                />
            </div>
            <div style={{ marginLeft: '5%' }}>
                <p style={{ margin: '10px auto 10px auto' }}>{name}</p>
                <p style={{ margin: 'auto' }}>Price- $ {price}</p>
            </div>
            <div style={{ margin: '0 5% 0 15%' }}>
                <button onClick={() => this.AddOrder(this.props.item)}>+</button>
                <p style={{ margin: '5px' }}>{this.state.quantity}</p>
                {this.state.quantity > 0 &&

                    (<button onClick={() => this.DeleteOrder(this.props.item)}>-</button>)
                }
            </div>
            <div>
                <p style={{ color: 'green', margin: 'auto' }}>{this.state.totel} /-</p>
            </div>
            <div style={{ margin: '0 5% 0 15%' }}>
                <button onClick={this.AddToList}>Add to List</button>
            </div>
        </>
        )
    }

}

export default SingleItem;
