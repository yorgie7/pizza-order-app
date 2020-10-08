import React, { Component } from 'react';

const Counter = {
    margin: '0 5% 0 15%', display: 'flex',
    flexDirection: 'row', height: '30%'
}

class SingleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            totel: 0,
            orderItem: this.props.item
        }
        this.status = { isAdded: false }

        this.AddOrder = this.AddOrder.bind(this);
        this.DeleteOrder = this.DeleteOrder.bind(this);
        this.AddToList = this.AddToList.bind(this);
    }

     shouldComponentUpdate(nextProps, nextState){
        return this.state.quantity!==nextState.quantity
       }

    AddToList() {
        if (this.state.quantity > 0) {
          //  console.log(this.state);
            console.log('order details sent to HomeList of orders');
            this.props.AddItemsCart(this.state);
            this.setState({ quantity: 0, totel: 0 });
        };

    }


    async AddOrder(item) {
        const price1 = parseInt(item.price, 10);
        await this.setState({ totel: this.state.totel + price1, quantity: this.state.quantity + 1 });
      

    }

    async DeleteOrder(item) {
        const price1 = parseInt(item.price, 10);
        await this.setState({ totel: this.state.totel - price1 });
        this.setState({ quantity: this.state.quantity - 1 });
       
    }

    render() {
        console.log(`${this.state.orderItem} this`);
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
            <div style={Counter}>
                {this.state.quantity > 0 ?

                    (<button onClick={() => this.DeleteOrder(this.props.item)}
                    style={{border: '1px solid green', borderRadius :'5px'}}>  -  </button>)
                    :
                    (<button onClick={() => alert('kkk')}
                    style={{border: '1px solid gray', borderRadius :'5px'}}>  -  </button>)
                }
                <p style={{ margin: '5px' }}>{this.state.quantity}</p>

                <button onClick={() => this.AddOrder(this.props.item)}
                style={{border: '1px solid gray', borderRadius :'5px'}}> + </button>


            </div>
            <>
                <p style={{ fontSize: '14px', color: 'green', margin: 'auto' }}>$ {this.state.totel} /-</p>
            </>
            <div style={{ margin: '0 5% 0 auto' }}>
                <button onClick={this.AddToList} style={{ padding: '0 12px' }}>Add to List</button>
                { this.state.quantity > 0 &&

                    (<p style={{ fontSize: '14px' }}> {this.state.quantity} item selected</p>)
                }

            </div>
        </>
        )
    }

}

export default SingleItem;
