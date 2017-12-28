import React, { Component } from 'react';
import "../scss/page.scss";

class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {
          active:false
      }
    }
    render(){
        if(this.state.active){
            return (
                <div className="page active">
                    <h1>{this.props.title}</h1>
                </div>
            )
        }
        return(
            <div className="page">
                <h1>{this.props.title}</h1>
            </div>
        )
    }

}

export default Page
