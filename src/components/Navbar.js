import React, { Component } from 'react';

const nav= {textAlign: 'center', 
        justifyContent:'center', 
        height:'5vh',backgroundColor:'#56a3f0',
        paddingTop:'2vh', fontSize:'20px', color:'white'
        }

class Navbar extends Component {
render() {
    return(
        <div style={nav}>
       {this.props.title}
        </div>
    )
}

}

export default Navbar;
