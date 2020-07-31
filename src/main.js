import React from 'react';
import './main.css';
import Main2 from './main2';
import Img from './WeSix.png'


class Appbar extends React.Component{
    constructor(props){
        super(props);

        this.teamsearch = this.teamsearch.bind(this);
        this.companysearch = this.companysearch.bind(this);
        this.imgsearch = this.imgsearch.bind(this);
        this.mapsearch = this.mapsearch.bind(this);
        this.contactsearch = this.contactsearch.bind(this);
    }

    teamsearch(){
        window.scrollTo(0,1440);
    }
    companysearch(){
        window.scrollTo(0, 450)
    }
    imgsearch(){
        window.scrollTo( 0, 860);
    }
    mapsearch(){
        window.scrollTo(0,3150);
    }
    contactsearch(){
        window.scrollTo(0,3500);
    }
    render(){
        return(
            <div>
               <div className="appbar">
                    <img src={Img} width="60px" height="40px"/>
                    <div className="titlename">WeSix</div>
                    <div className="menubar">
                        <a onClick={this.companysearch} href="#none">회사소개</a>
                        <a onClick={this.imgsearch} href="#none">활동게시판</a>
                        <a onClick={this.teamsearch} href="#none">팀원소개</a>
                        <a onClick={this.mapsearch} href="#none">찾아오시는길</a>
                        <a onClick={this.contactsearch} href="#none" id="contact">Contact</a>
                    </div>
               </div>
            </div>
        )
    }
}



export default Appbar;