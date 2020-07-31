import React from 'react';
import './teammember.css';
import Dongu from './dongu.jpg';
import Sungu from './sungu.jpg';
import Jung from './jungyoungbean.jpg';
import Hwe from './hweje.jpg';
import Huk from './yunhuk.jpg';
import Junghun from './junghun.jpg';
import One from './one.png';
import Min from './min.jpg';

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
                            <p>창원대학교 컴퓨터공학과 15학번 이동규 <br/>입니다.<br/>소속 : 통신시스템 연구실(2018~)</p>
                            <p id="quoto">"Be the value myself"</p>
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
                            <p>창원대학교 화학시스템공학과 15학번 신성우 <br/>입니다.<br/>소속: 분리분석 연구실(2018~)</p>
                            <p id="quoto">"there is only time for loving and but ana instant, so to speak, for that the good life built with good relaion -Mark Twain"</p>
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
                            <p>창원대학교 컴퓨터공학과 16학번 정영빈 <br/>입니다.<br/>소속 : 데이터베이스 연구실(2019~)</p>
                            <p id="quoto">"Ability is decided by one's own effort"</p>
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
                            <p>창원대학교 컴퓨터공학과 15학번 정휘제 <br/>입니다.<br/> Cam-shift 알고리즘을 이용한 야구선수 객체 추적 논문(2019)</p>
                            <p id="quoto">"휘제야 적어도 남에게 피해주면서 살지는 말아라"</p>
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
                            <p>창원대학교 컴퓨터공학과 15학번 윤 혁 <br/>입니다.<br/>소속 : 통신시스템 연구실(2018~)</p>
                            <p id="quoto">"010 5797 6647 여친 급하게 구함"</p>
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
                            <p>창원대학교 컴퓨터공학과 15학번 김정훈 <br/>입니다.<br/>소속: 멀티미디어 연구실(2019~)</p>
                            <p id="quoto">"할 수 있다, 잘 될 것이다."</p>
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
                            <p>창원대학교 컴퓨터공학과 15학번 허원영 <br/>입니다.<br/> Cam-shift 알고리즘을 이용한 야구선수 객체 추적 논문(2019)</p>
                            <p id="quoto">"실수를 두려워 하지 마라 같은 실수를 여러번 하는 것을 두려워하라"</p>
                        </div>
                    </div>
                </div>
                <div className="sungu">
                    <div className="sungu_img">
                        <img src={Min} height="100%" width="100%"/>
                    </div>
                    <div className="sungu_talk">
                    <div className="talk_title">
                            <p id="team_name">박민철</p>
                            <p id="team_position">개발</p>
                        </div>
                        <div className="talk_body">
                            <p>창원대학교 컴퓨터공학과 16학번 박민철 <br/>입니다.<br/>소속 : 데이터베이스 연구실(2019~)</p>
                            <p id="quoto">"Whatever you are, be a good one."</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;