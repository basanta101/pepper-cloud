import React, { Component } from 'react';
import {Switch,Route, Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Link exact="true" to='/'>login</Link>
            <Link  to='/Homepage'>Homepage</Link>
            <Link to='/Mainpage'>Mainpage</Link>
            <Link to='/logout'>logout</Link>
        </div>
            
         );
    }
}
 
export default Header;