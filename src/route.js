/*global kakao*/
import React from 'react';
import './route.css';
import styled from "styled-components";

class Route extends React.Component{
    
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d522767fe16bedef43aa94e8f36a04f7&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
          kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
              center: new kakao.maps.LatLng(35.241388, 128.695870),
              level: 3
            };
    
            const map = new window.kakao.maps.Map(container, options);
            var positions = [
              {
                  title: ` <div id="pin_main">
                  <div id="pin_title"><p>맘스터치</p></div>
                  <div id="pin_image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvNs-Gc4xceXKL_1bbPxe7AQ5svfVXeXFtgw&usqp=CAU"  height="140px" width="200px"/></div>
                  <div id="pin_love"><p>좋아요</p></div>
                  <div id="pin_body"><p>정보</p></div>
              </div>`, 
                  latlng: new kakao.maps.LatLng(35.241388, 128.695870)
              }
           ];
          var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
          for (var i = 0; i < positions.length; i ++) {
          
              // 마커 이미지의 이미지 크기 입니다
              var imageSize = new kakao.maps.Size(24, 35); 
              
              // 마커 이미지를 생성합니다    
              var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
              var infowindow = new kakao.maps.InfoWindow({
                  content: positions[i].title // 인포윈도우에 표시할 내용
              });
              // 마커를 생성합니다
              var marker = new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: positions[i].latlng, // 마커를 표시할 위치
                  image : markerImage // 마커 이미지 
              });
            
             
              
          }
          });
        };
        
      }
    render(){
        return(
            <div className="route2">
                <div className="route_title">
                    <p>찾아오시는 길</p>
                    <hr/>
                </div>
            <div className="map">
            <MapContents id="Mymap"></MapContents>
            </div>
            </div>
            
        )
    }
}
const MapContents = styled.div`
    width: 100%;
    height: 100%;
  `;
export default Route;