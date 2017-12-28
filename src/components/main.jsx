import React, { Component } from 'react';
import Page from "./page"
import "../scss/main.scss";

class Main extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div className="pages-container">
                <Page title={"page one"} />
                <Page title={"page two"} />
            </div>
        )
    }

}

export default Main
