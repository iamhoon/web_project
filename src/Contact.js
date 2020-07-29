import React from 'react'
import './Contact.css'

class Contact extends React.Component{
    render(){
        return(
            <div className="bottom">
                <div className="contactus">Contact Us</div>
                <div className="contactus_phone"> 대표전화 <br/> 010-6573-2265 <br/> jrns05@nate.com</div>
                <div className="coming"> 찾아 오시는 길 <div className="address">경상남도 창원시 의창구 사림동 창원대학로 20 공대 5호관 510호</div></div>
                <div className="rights">‌ⓒ2020 WeSix. All rights reserved.</div>
            </div>

        )
    }
}

export default Contact;