import React, { Component } from 'react';
import "../scss/page.scss";

class Page extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div className="page">
                <h1>{this.props.title}</h1>
            </div>
        )
    }

}

export default Page
