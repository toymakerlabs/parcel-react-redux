import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <a href={this.props.url}>{this.props.title}</a>
        )
    }

}

export default NavItem
