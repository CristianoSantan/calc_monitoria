import React, { Component } from "react";


export default class Header extends Component  {
    
    render() {
        return (
            <header style={style.header} >
                {/* <h1>Calculadora Recode Pro</h1> */}
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

const style = {
    header: {
        height: '150px',
        background: 'yellow',
        padding: '30px',
        display: 'flex',
        alignItems: 'flex-end',
    }
}
