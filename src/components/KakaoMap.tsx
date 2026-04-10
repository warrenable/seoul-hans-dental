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
      
      // 서울한스치과 대구 동구 좌표 (대략적인 위치이므로, 카카오맵 API에서 정확한 건물 위경도 추출 후 숫자 수정 권장)
      const clinicPosition = new window.kakao.maps.LatLng(35.8776, 128.6286); 

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
          서울한스치과의원
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
            <p className="text-gray-500 font-medium">대구광역시 동구 동부로 30길 12, 3층 (스타벅스 건물)</p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">지하철 이용</span>
              <ul className="space-y-1">
                <li>1호선 동대구역 하차 후 도보 이동 (상세 출구 수정 필요)</li>
              </ul>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">버스 이용</span>
              <ul className="space-y-1">
                <li>동대구역 관련 버스 정류장 하차 (상세 노선 수정 필요)</li>
              </ul>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-blue-600 min-w-[100px]">자가용 이용</span>
              <p>스타벅스 건물 내 주차장 이용 (주차권 발급)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}