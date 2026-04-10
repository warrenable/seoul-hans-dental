'use client';

import React, { useState, useEffect } from 'react';

// 실제 웹사이트의 증례 데이터 기반
const casesData = [
  {
    id: 1,
    title: '인비절라인 투명교정',
    description: '대표원장 본인 셀프교정 / 30대 여성, 앞니 사이 틈, 과개교합, 웃을때 잇몸보임 (2023.11~2024.04)',
    beforeImg: '/images/case1-before.jpg', // 실제 이미지 경로로 변경 필요
    afterImg: '/images/case1-after.jpg',
  },
  {
    id: 2,
    title: '세라믹 부분교정',
    description: '30대 여성 / 빠른 앞니 치아배열, 개방교합 / 6개월',
    beforeImg: '/images/case2-before.jpg',
    afterImg: '/images/case2-after.jpg',
  },
  {
    id: 3,
    title: '돌출입 세라믹교정 5개월차',
    description: '10대 여성 / 돌출입, 치아 사이 틈, 배열 / 5개월 경과',
    beforeImg: '/images/case3-before.jpg',
    afterImg: '/images/case3-after.jpg',
  }
];

export default function CasesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 효과 (5초마다 전환)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === casesData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === casesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? casesData.length - 1 : prev - 1));
  };

  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">서울블랑치과의원 치료전후</h2>
        
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* 슬라이드 영역 */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {casesData.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <div className="w-full md:w-1/2 relative">
                    <span className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-sm font-bold rounded">BEFORE</span>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                      [Before 이미지 영역]
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 relative">
                    <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded">AFTER</span>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                      [After 이미지 영역]
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 좌우 이동 버튼 */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition"
          >
            &#10094;
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition"
          >
            &#10095;
          </button>

          {/* 하단 인디케이터 */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {casesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}