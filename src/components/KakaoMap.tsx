'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  // 카카오맵 로드 완료 시 실행될 함수
  const initMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      
      // 서울블랑치과 좌표 (예시 좌표이므로 실제 좌표로 수정 필요)
      const clinicPosition = new window.kakao.maps.LatLng(37.4815, 126.8920); 

      const mapOption = {
        center: clinicPosition,
        level: 3, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 마커 생성 및 표시
      const marker = new window.kakao.maps.Marker({
        position: clinicPosition,
      });
      marker.setMap(map);

      // 커스텀 오버레이 (병원 이름 표시)
      const overlayContent = `
        <div style="padding:5px; background:white; border:1px solid #ccc; border-radius:4px; font-size:12px; font-weight:bold; color:#333;">
          서울블랑치과의원
        </div>
      `;
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: clinicPosition,
        content: overlayContent,
        yAnchor: 2.5,
      });
      customOverlay.setMap(map);
    });
  };

  return (
    <section id="location" className="py-24 bg-white">
      {/* 카카오맵 API 스크립트 비동기 로드 */}
      <Script 
        strategy="afterInteractive" 
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`} 
        onLoad={initMap} 
      />
      
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* 지도 렌더링 영역 */}
        <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
          <div id="map" className="w-full h-full"></div>
        </div>

        {/* 상세 오시는 길 정보 */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">오시는 길</h2>
            <p className="text-gray-500 font-medium">구로 에이스 하이엔드 1차 건물 건너편 지하이시티 2층</p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">지하철 이용</span>
              <ul className="space-y-1">
                <li>7호선 남구로역 2번출구 도보 10분</li>
                <li>2호선 구로디지털단지역 도보 15분</li>
              </ul>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">버스 이용</span>
              <ul className="space-y-1">
                <li>간선 643번 가리봉파출소 하차</li>
                <li>간선 504번 삼부르네상스 하차</li>
              </ul>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">자가용 이용</span>
              <p>건물 내 지하주차장 이용 (주차권 발급)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}