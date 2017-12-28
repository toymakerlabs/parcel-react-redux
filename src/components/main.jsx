import React, { Component } from 'react';
import Page from "./page";
import Nav from "./nav";
import "../scss/main.scss";

class Main extends Component {
    constructor(props) {
      super(props);
      //this.handleNavChange = this.handleNavChange.bind(this)
      this.state = {
          current_page:0
      }
    }
    handleNavChange(item){
        this.setState({
            current_page:item
        })
        console.log("DSF"+ item)
    }
    render(){
        const links = [
            {"title":"page 1","url":'/page-1/','id':'page1'},
            {"title":"page 2","url":"/page-2/",'id':'page2'}
        ]

        return(
            <div>
                <Nav activeIndex={0} onNavChange={(s)=>this.handleNavChange(s)} links={links}/>
                <div className="pages-container">
                    {links.map((page,i)=>{
                        console.log(i == this.state.current_page);

                        return (
                            <Page key={page.id} title={page.title} active={i == this.state.current_page}/>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Main
