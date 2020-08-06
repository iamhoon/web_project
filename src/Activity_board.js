import React from 'react';
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import './Activity_board.css';

class Activity_board extends React.Component {


    render() {
        return (
            <div className="title">
                <h2>/ 활동 소식 /</h2>
                <div className="act_board">
                    <div className="page1_box">
                        <img className="page1" src={Img1}></img>
                        <p id="act_name">창원대 LinC+사업단 창업캠프 (2020.07.22~24) </p>
                    </div>
                    <div className="page2_box">
                        <img className="page2" src={Img2}></img>
                        <p id="act_name">다른코리아 김진한 대표님과 만남 (2020.07) </p>
                    </div>
                    <div className="page3_box">
                        <img className="page3" src={Img3}></img>
                        <p id="act_name">인제대 Linc+사업단 제1회 청년창업경진대회 (2020.07.24) </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activity_board;
