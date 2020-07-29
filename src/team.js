import React from 'react';
import './teammember.css';
import Dongu from './dongu.jpg';
import Sungu from './sungu.jpg';
import Jung from './jungyoungbean.jpg';
import Hwe from './hweje.jpg';
import Huk from './yunhuk.jpg';
import Junghun from './junghun.jpg';
import One from './one.png';

class Team extends React.Component{
    render(){
        return(
            <div className="team_member">
                <div className="dongu">
                    <div className="dongu_img">
                        <img src={Dongu} height="100%" width="100%"/>
                    </div>
                    <div className="dongu_talk">
                        <div className="talk_title">
                            <p id="team_name">이동규</p>
                            <p id="team_position">팀장</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 컴퓨터공학과 15학번</p>
                            
                            <p>2. 경남창조혁신센터 공유경제활동가 <br/> &nbsp;&nbsp;&nbsp;&nbsp;양성과정</p>
                            
                            <p>3. 2020학생 창업 유망팀 300교육형</p>
                            
                            <p>4. 2019 큐슈공업대학 교환학생 과정<br/> &nbsp;&nbsp;&nbsp;&nbsp;(2019.01 ~ 2020.02)</p>
                            
                            <p>5. 프로슈머양성 메이커인스트럭터<br/>  &nbsp;&nbsp;&nbsp;&nbsp;(LINK + 사업단 창원대학교) 수료</p>
                        </div>
                    </div>
                </div>
                <div className="sungu">
                    <div className="sungu_img">
                        <img src={Sungu} height="100%" width="100%"/>
                    </div>
                    <div className="sungu_talk">
                    <div className="talk_title">
                            <p id="team_name">신성우</p>
                            <p id="team_position">부팀장</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 화학시스템공학과 15학번</p>
                            
                            <p>2. 창원대학교 분리분석 연구실<br/>(2018.09 ~ )</p>
                            
                            <p>3. 해양플랜트 태국 TPTI 교육 <br/>(2019.02 ~ 2019.01)</p>
                            
                            <p>4. 대만 기업체 연수 (2018.07 ~ 2018.08)</p>
                        </div>
                    </div>
                </div>
                {/*1 */}
                <div className="dongu">
                    <div className="dongu_img">
                        <img src={Jung} height="100%" width="100%"/>
                    </div>
                    <div className="dongu_talk">
                        <div className="talk_title">
                            <p id="team_name">정영빈</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 컴퓨터공학과 15학번</p>
                            
                            <p>2. 경남창조혁신센터 공유경제활동가 <br/> &nbsp;&nbsp;&nbsp;&nbsp;양성과정</p>
                            
                            <p>3. 2020학생 창업 유망팀 300교육형</p>
                            
                            <p>4. 2019 큐슈공업대학 교환학생 과정<br/> &nbsp;&nbsp;&nbsp;&nbsp;(2019.01 ~ 2020.02)</p>
                            
                            <p>5. 프로슈머양성 메이커인스트럭터<br/>  &nbsp;&nbsp;&nbsp;&nbsp;(LINK + 사업단 창원대학교) 수료</p>
                        </div>
                    </div>
                </div>
                <div className="sungu">
                    <div className="sungu_img">
                        <img src={Hwe} height="100%" width="100%"/>
                    </div>
                    <div className="sungu_talk">
                    <div className="talk_title">
                            <p id="team_name">정휘제</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 화학시스템공학과 15학번</p>
                            
                            <p>2. 창원대학교 분리분석 연구실<br/>(2018.09 ~ )</p>
                            
                            <p>3. 해양플랜트 태국 TPTI 교육 <br/>(2019.02 ~ 2019.01)</p>
                            
                            <p>4. 대만 기업체 연수 (2018.07 ~ 2018.08)</p>
                        </div>
                    </div>
                </div>
                  {/*2 */}
                  <div className="dongu">
                    <div className="dongu_img">
                        <img src={Huk} height="100%" width="100%"/>
                    </div>
                    <div className="dongu_talk">
                        <div className="talk_title">
                            <p id="team_name">윤 혁</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 컴퓨터공학과 15학번</p>
                            
                            <p>2. 경남창조혁신센터 공유경제활동가 <br/> &nbsp;&nbsp;&nbsp;&nbsp;양성과정</p>
                            
                            <p>3. 2020학생 창업 유망팀 300교육형</p>
                            
                            <p>4. 2019 큐슈공업대학 교환학생 과정<br/> &nbsp;&nbsp;&nbsp;&nbsp;(2019.01 ~ 2020.02)</p>
                            
                            <p>5. 프로슈머양성 메이커인스트럭터<br/>  &nbsp;&nbsp;&nbsp;&nbsp;(LINK + 사업단 창원대학교) 수료</p>
                        </div>
                    </div>
                </div>
                <div className="sungu">
                    <div className="sungu_img">
                        <img src={Junghun} height="100%" width="100%"/>
                    </div>
                    <div className="sungu_talk">
                    <div className="talk_title">
                            <p id="team_name">김정훈</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 화학시스템공학과 15학번</p>
                            
                            <p>2. 창원대학교 분리분석 연구실<br/>(2018.09 ~ )</p>
                            
                            <p>3. 해양플랜트 태국 TPTI 교육 <br/>(2019.02 ~ 2019.01)</p>
                            
                            <p>4. 대만 기업체 연수 (2018.07 ~ 2018.08)</p>
                        </div>
                    </div>
                </div>
                 {/*3 */}
                 <div className="dongu">
                    <div className="dongu_img">
                        <img src={One} height="100%" width="100%"/>
                    </div>
                    <div className="dongu_talk">
                        <div className="talk_title">
                            <p id="team_name">허원영</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 컴퓨터공학과 15학번</p>
                            
                            <p>2. 경남창조혁신센터 공유경제활동가 <br/> &nbsp;&nbsp;&nbsp;&nbsp;양성과정</p>
                            
                            <p>3. 2020학생 창업 유망팀 300교육형</p>
                            
                            <p>4. 2019 큐슈공업대학 교환학생 과정<br/> &nbsp;&nbsp;&nbsp;&nbsp;(2019.01 ~ 2020.02)</p>
                            
                            <p>5. 프로슈머양성 메이커인스트럭터<br/>  &nbsp;&nbsp;&nbsp;&nbsp;(LINK + 사업단 창원대학교) 수료</p>
                        </div>
                    </div>
                </div>
                <div className="sungu">
                    <div className="sungu_img">
                        <img src={Junghun} height="100%" width="100%"/>
                    </div>
                    <div className="sungu_talk">
                    <div className="talk_title">
                            <p id="team_name">박민철</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>1. 창원대학교 화학시스템공학과 15학번</p>
                            
                            <p>2. 창원대학교 분리분석 연구실<br/>(2018.09 ~ )</p>
                            
                            <p>3. 해양플랜트 태국 TPTI 교육 <br/>(2019.02 ~ 2019.01)</p>
                            
                            <p>4. 대만 기업체 연수 (2018.07 ~ 2018.08)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;