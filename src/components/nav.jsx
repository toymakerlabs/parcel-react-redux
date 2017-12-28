//key props
//https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

import React, { Component } from 'react';
import "../scss/nav.scss";
import NavItem from "./nav_item";

class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
          clicked_index:props.activeIndex
      }
    }
    handleClick(e,item){
        console.log(item)
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            clicked_index: item
        })
        this.props.onNavChange(item)
    }
    render(){

        return(
            <ul className='navbar'>
                {
                    this.props.links.map(function(link, i){
                        if (this.state.clicked_index == i){
                            return <li key={link.id} onClick={(e) => this.handleClick(e,i)} ><NavItem title={link.title} url={link.url} active={true} /></li>
                        }
			            return <li key={link.id} onClick={(e) => this.handleClick(e,i)} ><NavItem title={link.title} url={link.url} active={false} /></li>
                    }.bind(this))
                 }
            </ul>
        )
    }

}

export default Nav
