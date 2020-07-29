import React from 'react';
import './MainPicture.css';

class MainPicture extends React.Component{
    render(){
        return(
        
            <div className="mainpicture">
                <div className="mainpicture_main">
                <div >
                   <p class="mainpicture_title">WeSix</p>
                </div>
                <div className="mainpicture_body">
                    저희는 창원대학교 컴퓨터공학과 <br/>
                     화학시스템공학과로 이루어진 <br/>
                     창업동아리입니다
                </div>
                <div className="mainpicture_tail">
                    "딱 여섯개 사업 제대로 하자 !"
                </div>
                </div>
                
            </div>
            
        )
    }
}

export default MainPicture;