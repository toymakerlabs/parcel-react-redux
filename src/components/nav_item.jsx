import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        let item_class;

        if(this.props.active == true){
            item_class = "highlighted"
        }else{
            item_class = ""
        }
        return(
            <a className={item_class} href={this.props.url}>{this.props.title}</a>
        )
    }

}

export default NavItem
