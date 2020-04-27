import React, { Component } from 'react';

const nav= {textAlign: 'center', 
        justifyContent:'center', 
        height:'6vh',backgroundColor:'blue',
        paddingTop:'2vh', fontSize:'4vh', color:'white'
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
