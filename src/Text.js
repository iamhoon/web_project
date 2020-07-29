import React from 'react';
import WESIX_IMG from './WeSix.png';
import './Text.css';
class WESIX_INTRO extends React.Component{
    render(){
        return(
            <div className="wesix_intro">
                <div className="intro_left">
                    <div>
                        <img className="wesix_intro_img" src={WESIX_IMG} />
                    </div>
                </div>
                <div className="intro_right">
                    <div className="wesix_intro_title">
                        WeSix
                    </div>
                    <div className="wesix_intro_content1">
                        <p>2020년 5월에 창업동아리로 시작</p>
                        <p>웹 및 앱 전문 제작 스타트업</p>
                        <p>현재 여러 창업에 관련된 공모전 지원 및 교육 수료중</p>
                    </div>
                    <div className="wesix_intro_content2">
                        <p>● 도전 K-스타트업 학생 창업 유망팀 300 교육형 수료중</p>
                        <p>● 창원대학교 Linc사업단 주관 창업 캠프 수료</p>
                        <p>● 인제대학교 Linc사업단 주최 창업 경진대회 참가</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WESIX_INTRO;