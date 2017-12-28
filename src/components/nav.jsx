//key props
//https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

import React, { Component } from 'react';
import "../scss/nav.scss";
import NavItem from "./nav_item";

class Nav extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <ul className='navbar'>
                {
                    this.props.links.map(function(link, i){
			            return <li key={link.id} ><NavItem title={link.title} url={link.url} /></li>
                    })
                 }
            </ul>
        )
    }

}

export default Nav
