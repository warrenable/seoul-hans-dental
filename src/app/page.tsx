import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 scroll-smooth">
      <Head>
        <title>서울블랑치과 - 치아교정, 인비절라인, 무삭제라미네이트</title>
      </Head>

      {/* 1. Header & Navigation */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            {/* 실제 사이트의 로고 이미지 영역 */}
            SEOUL BLANC
          </div>
          <nav className="hidden lg:flex space-x-6 text-[15px] font-medium text-gray-800">
            <a href="#staff" className="hover:text-gray-500 transition-colors">의료진 소개</a>
            <a href="#treatments" className="hover:text-gray-500 transition-colors">진료과목</a>
            <a href="#blanc-film" className="hover:text-gray-500 transition-colors">Blanc Film</a>
            <a href="#implant" className="hover:text-gray-500 transition-colors">임플란트</a>
            <a href="#cases" className="hover:text-gray-500 transition-colors">증례별 전후사진</a>
            <a href="#reviews" className="hover:text-gray-500 transition-colors">환자후기</a>
            <a href="#gallery" className="hover:text-gray-500 transition-colors">둘러보기</a>
            <a href="#hours" className="hover:text-gray-500 transition-colors">진료시간</a>
            <a href="#location" className="hover:text-gray-500 transition-colors">오시는 길</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section (메인 비주얼) */}
      <section className="bg-gray-50 py-32 text-center flex flex-col items-center">
        <p className="text-sm font-semibold tracking-widest text-gray-500 mb-4">SEOUL BLANC DENTAL</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
          편안하게 쉬면서 아름다워지는 <br className="hidden md:block" /> 공간을 만들었습니다.
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          서울대 출신 대표원장이 1:1 책임진료하는 교정/심미치과
        </p>
        
        {/* 통증완화 시스템 강조 포인트 */}
        <div className="flex flex-wrap justify-center gap-4">
           <span className="px-5 py-2.5 bg-white rounded-full shadow-sm text-sm font-medium border border-gray-100">가글마취</span>
           <span className="px-5 py-2.5 bg-white rounded-full shadow-sm text-sm font-medium border border-gray-100">도포마취</span>
           <span className="px-5 py-2.5 bg-white rounded-full shadow-sm text-sm font-medium border border-gray-100">무통마취기</span>
        </div>
      </section>

      {/* 3. Medical Staff (의료진 소개) */}
      <section id="staff" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">서울블랑치과 의료진 소개</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* 백진아 대표원장 */}
            <div className="bg-gray-50 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-4">대표원장 백진아</h3>
              <ul className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
                <li>· 서울대학교 치과대학 치의학대학원 졸업</li>
                <li>· 가톨릭대학교 임상치과학대학원 치과교정학과 석박사과정</li>
                <li>· 미국 인비절라인(Invisalign) 투명교정 인증의</li>
                <li>· 투명교정의 정확도 향상을 위한 특허 출원</li>
              </ul>
            </div>
            {/* 오윤정 라미네이트 수석원장 */}
            <div className="bg-gray-50 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-4">라미네이트 수석원장 오윤정</h3>
              <ul className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
                <li>· 보건복지부인증 통합치의학과 전문의</li>
                <li>· 경북대학교 치의학대학원 졸업</li>
                <li>· 오스템 임플란트 MASTER COURSE SURGERY 수료</li>
                <li>· 라미네이트 2만 케이스</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Blanc Film (시그니처: 무삭제 라미네이트) */}
      <section id="blanc-film" className="py-24 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-stone-400 font-semibold tracking-widest mb-4">BLANC FILM BY SEOUL BLANC</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">서울블랑치과의 무삭제 라미네이트</h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            개개인의 황금비에 맞추어 100% 수작업되는 "블랑필름"<br />
            소중한 자연치 보존을 위해 0.1mm Film 두께로 구현한 기술력입니다.
          </p>
        </div>
      </section>

      {/* 5. Implant (오스템 정품 강조) */}
      <section id="implant" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">서울블랑치과 임플란트</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            저렴한 임플란트 픽스쳐는 사용하지 않고, 오스템 임플란트 정품만을 고집합니다. 
            그중에서도 BA 표면 제품만을 취급하며, 모든 환자분들께 정품 보증서를 제공합니다.
          </p>
        </div>
      </section>

      {/* 6. Footer (하단 정보) */}
      <footer className="bg-gray-100 py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-8 mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">서울블랑치과의원</h2>
              <div className="space-y-1">
                <p>주소 : 서울 구로구 디지털로 243 지하이시티 2층 202호</p>
                <p>대표 : 백진아 | 사업자등록번호 : 433-16-02801</p>
                <p>대표전화 : 02-2224-0055 | 팩스 : 02-2224-0056</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 text-left md:text-right">
              <h3 className="font-bold text-gray-800 mb-2">진료시간</h3>
              <p>월, 수 : PM 02:00 ~ PM 09:00</p>
              <p>화, 금 : AM 10:30 ~ PM 07:00</p>
              <p>토요일 : AM 10:00 ~ PM 02:30</p>
              <p className="text-red-400 mt-1">목요일, 일요일 및 공휴일 휴진</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>Copyright 2025 Seoul Blanc Dental Clinic. All Right Reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-800">네이버 블로그</a>
              <a href="#" className="hover:text-gray-800">인스타그램</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}