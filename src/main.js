import React from 'react';
import './main.css';
import Main2 from './main2';
import Img from './WeSix.png'
import varaa from './var.png';

class Appbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tf: 'none'
        }

        this.open = this.open.bind(this);
        this.teamsearch = this.teamsearch.bind(this);
        this.companysearch = this.companysearch.bind(this);
        this.imgsearch = this.imgsearch.bind(this);
        this.mapsearch = this.mapsearch.bind(this);
        this.contactsearch = this.contactsearch.bind(this);
    }

    teamsearch() {
        window.scrollTo(0, 1440);
    }
    companysearch() {
        window.scrollTo(0, 450)
    }
    imgsearch() {
        window.scrollTo(0, 860);
    }
    mapsearch() {
        window.scrollTo(0, 3150);
    }
    contactsearch() {
        window.scrollTo(0, 3500);
    }

    // const toggleBtn = document.querySelector('.navbar__toogleBtn');
    // const menu = document.querySelector('.menubar');

    open(){

        if(this.state.tf === 'none'){
            this.setState({
                tf: 'flex'
                
            })
        }

        else if(this.state.tf === 'flex'){
            this.setState({
                tf: 'none'
                
            })
        }
        
    }

    render() {
        return (
            <div>
                <nav className="appbar">

                    <div class="navbar__logo">
                        <img src={Img} width="60px" height="40px" />
                        <a href="/" className="titlename">WeSix</a>
                    </div>
                  
                    <ul className="menubar" style={{display: this.state.tf}}>
                        <li><a onClick={this.companysearch} href="#none">회사소개</a></li>
                        <li><a onClick={this.imgsearch} href="#none">활동게시판</a></li>
                        <li><a onClick={this.teamsearch} href="#none">팀원소개</a></li>
                        <li><a onClick={this.mapsearch} href="#none">찾아오시는길</a></li>
                        <li><a onClick={this.contactsearch} href="#none" id="contact">Contact</a></li>
                    </ul>

                    <ul className="menubar2">
                        <li><a onClick={this.companysearch} href="#none">회사소개</a></li>
                        <li><a onClick={this.imgsearch} href="#none">활동게시판</a></li>
                        <li><a onClick={this.teamsearch} href="#none">팀원소개</a></li>
                        <li><a onClick={this.mapsearch} href="#none">찾아오시는길</a></li>
                        <li><a onClick={this.contactsearch} href="#none" id="contact">Contact</a></li>
                    </ul>

                    <a href="#" class="navbar__toogleBtn">
                        <img src={varaa} onClick={this.open} width="24px" height="20px"/>
                    </a>
        
                </nav>
            </div>
        )
    }
}

export default Appbar;