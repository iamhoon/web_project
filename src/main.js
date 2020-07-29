import React from 'react';
import './main.css';
import Main2 from './main2';
import Img from './WeSix.png'


class Appbar extends React.Component{

    render(){
        return(
            <div>
               <div className="appbar">
                    <img src={Img} width="60px" height="40px"/>
                    <div className="titlename">WeSix</div>
                    <div className="menubar">
                        <a href="/">회사소개</a>
                        <a href="/">활동게시판</a>
                        <a href="/">팀원소개</a>
                        <a href="/">찾아오시는길</a>
                        <a href="/" id="contact">Contact</a>
                    </div>
               </div>
            </div>
        )
    }
}



export default Appbar;