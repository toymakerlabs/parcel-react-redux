import React, { Component } from 'react';
import Page from "./page";
import Nav from "./nav";
import "../scss/main.scss";

class Main extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div>
            <Nav links={[{"title":"page 1","url":'/page-1/','id':'page1'},{"title":"page 2","url":"/page-2/",'id':'page2'}]}/>
            <div className="pages-container">
                <Page title={"page one"} />
                <Page title={"page two"} />
            </div>
            </div>
        )
    }

}

export default Main
