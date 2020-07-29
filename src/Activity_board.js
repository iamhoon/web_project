import React from 'react';
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import './Activity_board.css';

class Activity_board extends React.Component{
    render(){
        return(
            <div className="act_board"> 
                 <p>활동 소식</p>
                <div className="page1_box">
                    <img className="page1"src={Img1}></img>
                </div>
                <div className="page2_box">
                    <img className="page2" src={Img2}></img>
                </div>
                <div className="page3_box">
                    <img className="page3" src={Img3}></img>
                </div>
                
            </div>

        )
    }
}

export default Activity_board;
