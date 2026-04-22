'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CasesSlider from '@/components/CasesSlider';
import KakaoMap from '@/components/KakaoMap';

export default function Home() {
  // 한스 시그니처 탭 관리를 위한 State
  const [activeTab, setActiveTab] = useState('pain-free');
  // 모바일 햄버거 메뉴 관리를 위한 State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    {/* 프리텐다드 폰트 적용 (인라인 스타일 활용하여 강제 적용) */}
    <div 
      className="bg-white min-h-screen text-gray-900 scroll-smooth relative"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif" }}
    >
      <Head>
        <title>서울한스치과 - 설계하고 진료하는 공학도 출신 치과의사</title>
        <meta name="description" content="대구 동구 동부로에 위치한 서울한스치과입니다. 서울대 전기공학부 출신 대표원장의 공학적 정밀 진료." />
        {/* 프리텐다드 폰트 CDN 로드 */}
        <link rel="stylesheet" as="style" crossOrigin="true" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
      </Head>

      {/* 화면 하단 고정 예약 버튼 (플로팅) */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-[100] w-[90%] max-w-[400px] flex justify-center">
        <a 
          href="https://booking.naver.com/booking/13/bizes/804953"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 w-full px-8 py-4 md:py-5 bg-[#03C75A] hover:bg-[#02b351] text-white text-lg md:text-xl font-bold rounded-full transition-all shadow-[0_10px_25px_rgba(3,199,90,0.4)] hover:shadow-[0_15px_35px_rgba(3,199,90,0.5)] transform hover:-translate-y-1"
        >
          <span>네이버로 간편 예약하기</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* 1. Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-[110] transition-all">
        <div className="w-full px-6 md:px-12 py-6 flex justify-between items-center">
          {/* 로고 영역 */}
          <div className="text-3xl md:text-4xl font-black tracking-tighter text-blue-900">
            서울한스치과의원
          </div>
          
          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex space-x-10 text-[16px] font-semibold text-gray-700">
            <a href="#staff" className="hover:text-blue-900 transition-colors">원장 소개</a>
            <a href="#philosophy" className="hover:text-blue-900 transition-colors">진료 철학</a>
            <a href="#signature" className="hover:text-blue-900 transition-colors">한스 시그니처</a>
            <a href="#blog" className="hover:text-blue-900 transition-colors">진료 일기</a>
            <a href="#location" className="hover:text-blue-900 transition-colors">오시는 길</a>
          </nav>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-blue-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl">
            <nav className="flex flex-col px-6 py-4 space-y-2 text-[17px] font-bold text-gray-800">
              <a href="#staff" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-50 hover:text-blue-900">원장 소개</a>
              <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-50 hover:text-blue-900">진료 철학</a>
              <a href="#signature" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-50 hover:text-blue-900">한스 시그니처</a>
              <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-50 hover:text-blue-900">진료 일기</a>
              <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 hover:text-blue-900">오시는 길</a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-white">
          <Image 
            src="/hero-bg.webp" 
            alt="서울한스치과 메인 배경"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center mt-12 pb-16">
          {/* 전문가 배지 섹션 */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 animate-fade-in-up w-full">
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-50 rounded-full text-xs md:text-sm font-bold border border-blue-100 text-blue-900 shadow-sm whitespace-nowrap">
              서울대학교 전기공학부 졸업
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-900 rounded-full text-xs md:text-sm font-semibold text-white shadow-md whitespace-nowrap">
              서울대학교 치의학 석사
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gray-50 rounded-full text-xs md:text-sm font-medium border border-gray-100 text-gray-700 whitespace-nowrap">
              통합치의학 전문의
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gray-50 rounded-full text-xs md:text-sm font-medium border border-gray-100 text-gray-700 whitespace-nowrap">
              가톨릭대학교 치과교정학 전공
            </span>
          </div>

          <div className="relative w-full flex justify-center items-center">
            <div className="w-full max-w-4xl text-center text-gray-900 relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-[1.3] tracking-tight">
                바뀌지 않는 주치의, <br className="md:hidden" />
                <span className="text-blue-900">변하지 않는 책임감</span>으로 함께 합니다.<br/>
                <span className="text-2xl md:text-3xl font-bold text-gray-700 mt-4 block leading-snug">
                  진료의 시작부터 끝까지, <br className="md:hidden" />책임의 무게를 아는 단 한 명의 원장.
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-800 leading-relaxed font-medium mx-auto max-w-2xl">
                분업화된 치과 시스템 속에서 낯설고 불안한 순간을 줄여드립니다.<br className="hidden md:block" />
                체계적인 진단부터 교정, 고난이도 수술까지<br className="hidden md:block" />
                당신의 상태를 가장 잘 아는 주치의가 끝까지 함께하며 세심하게 관리합니다.<br className="hidden md:block" />
                서울한스치과는 <span className="font-bold text-blue-900">진료 중간에 담당 의사가 바뀌지 않습니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Medical Staff & Director's Message */}
      <section id="staff" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* 좌측: 원장님 프로필 이미지 */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative aspect-[3/4]">
                <img src="/doctor.jpg" alt="대표원장 주호성" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            
            {/* 우측: 상세 약력 */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div>
                <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-2">REPRESENTATIVE DIRECTOR</p>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">대표원장 주호성</h2>
                
                <div className="space-y-8">
                  {/* 학력 및 이력 */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 학력 및 주요 이력
                    </h3>
                    <ul className="text-gray-600 space-y-2.5 text-[16px] leading-relaxed font-medium">
                      <li>· 서울대학교 전기공학부 졸업</li>
                      <li>· 서울대학교 치의학대학원 졸업</li>
                      <li>· 서울대학교 치의학 석사</li>
                      <li>· 서울대학교 치과병원 종합진료실 역임</li>
                      <li className="text-blue-900 font-bold">· 보건복지부 인증 통합치의학 전문의</li>
                      <li>· 가톨릭대학교 임상치과학대학원 치과교정학 전공</li>
                    </ul>
                  </div>

                  {/* 학회 활동 */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 학회 활동
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px] leading-relaxed">
                      <li>· 대한 통합치과학회 정회원</li>
                      <li>· 대한 치과보철학회 정회원</li>
                      <li>· 대한 악안면 임플란트학회 정회원</li>
                    </ul>
                  </div>

                  {/* 인증 및 자문 */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 인증 및 연구 자문
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px] leading-relaxed">
                      <li>· 디지털투명교정 매직얼라인 우수사용치과</li>
                      <li>· 디지털투명교정 슈어스마일 인증치과</li>
                      <li>· 오스템임플란트 연구자문치과</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 원장 메시지 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-serif text-2xl">"</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">왜 홈페이지를 직접 코딩하냐고요?</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  정형화된 마케팅 문구로는 저의 진료철학과 마음을 온전히 담기 어렵다고 느꼈습니다.<br/><br/>
                  그래서 이 공간만큼은 환자분들께 더 솔직하고, 더 정확하게 전달하고 싶어 한 줄 한 줄 직접 설계하고 만들었습니다.<br/><br/>
                  보이지 않는 작은 부분까지 꼼꼼히 챙기는 마음, 그대로 진료에도 담고 있습니다.<br/>
                  홈페이지를 만드는 방식처럼 환자 한 분, 한 분의 치료 역시 처음부터 끝까지 책임지고 함께하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section id="philosophy" className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#3b82f6" strokeWidth="0.2" />
            <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="#60a5fa" strokeWidth="0.1" />
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <p className="text-blue-400 font-mono text-sm mb-4 tracking-widest">{`// PHILOSOPHY OF SEOUL HANS`}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">공학도의 통찰이 담긴 <br/> <span className="text-blue-400">디지털 토탈 케어</span></h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-20 leading-relaxed">
            교정부터 수술, 그리고 임플란트까지. 여러 병원을 전전할 필요 없습니다. <br className="hidden md:block"/>
            하나의 치과, 단 한 명의 주치의가 환자분의 전체 구강 상태를 통제하는 정밀한 마스터플랜.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">전기공학부 출신의 통찰력</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                디지털 장비가 도출하는 결과값을 맹신하지 않습니다. 데이터의 산출 원리와 알고리즘을 이해하는 공학도의 시선으로 기계의 한계를 보완하고, 0.01mm의 오차를 통제합니다.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">끊임없이 연구하는 주치의</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                가톨릭대 교정학 전공, 통합치의학 전문의. 멈추지 않고 공부합니다. 최신 AI 기술과 디지털 덴티스트리 논문을 진료실에 가장 먼저 도입하여 환자분께 최선의 선택지를 제안합니다.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">원스톱(One-Stop) 토탈 케어</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                교정 중 발치가 필요한 매복 사랑니, 임플란트 전후의 교합 관리. 파편화된 진료가 아닌, 하나의 거대한 시스템을 설계하듯 원장 한 명이 모든 과정을 유기적으로 아우릅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hans Signature Series (Tab UI) */}
      <section id="signature" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-4">HANS SIGNATURE CARE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">오직 서울한스에만 있는 시그니처 케어</h2>
            <p className="text-gray-600">환자분의 고민에 가장 완벽한 해답을 제시하는 세 가지 특화 프로토콜</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
            <button 
              onClick={() => setActiveTab('pain-free')}
              className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl transition-all ${activeTab === 'pain-free' ? 'bg-teal-500 text-white shadow-lg transform -translate-y-1' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              한스 무통증 케어
            </button>
            <button 
              onClick={() => setActiveTab('smile')}
              className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl transition-all ${activeTab === 'smile' ? 'bg-[#c6a87c] text-white shadow-lg transform -translate-y-1' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              한스 스마일
            </button>
            <button 
              onClick={() => setActiveTab('digital')}
              className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl transition-all ${activeTab === 'digital' ? 'bg-gray-900 text-white shadow-lg transform -translate-y-1' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              한스 디지털 셋업
            </button>
          </div>

          <div className="relative min-h-[500px]">
            
            {/* Tab 1: 한스 무통증 케어 */}
            {activeTab === 'pain-free' && (
              <div className="animate-fade-in-up bg-white rounded-3xl overflow-hidden shadow-xl border border-teal-50 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-teal-500 font-bold tracking-widest text-sm mb-4">PAIN-FREE PROTOCOL</span>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6 leading-snug">치과는 아프고 시린 곳이라는 <br/> 편견을 깹니다.</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    날카로운 기구로 긁어내는 공포는 이제 잊으세요. 부드러운 입자가 분사되는 에어플로우(Airflow) 장비와 원장님의 섬세한 손길이 만나, 마치 치과 스파(Spa)를 받듯 편안한 예방 관리가 가능합니다.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 섬세하고 꼼꼼한 사전 검진</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 통증과 시림을 최소화한 파우더 워터 분사</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 에어플로우를 통한 쾌적한 스케일링 체감</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 relative min-h-[300px] bg-teal-50">
                  <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="편안한 치과 진료" fill className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block"></div>
                </div>
              </div>
            )}

            {/* Tab 2: 한스 스마일 */}
            {activeTab === 'smile' && (
              <div className="animate-fade-in-up bg-white rounded-3xl overflow-hidden shadow-xl border border-[#f4ecd8] flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-[#faf8f5]">
                  <span className="text-[#c6a87c] font-bold tracking-widest text-sm mb-4">AESTHETIC MASTERPLAN</span>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6 leading-snug">당신에게 가장 잘 어울리는 핏(Fit), <br/> 밝은 미소의 알고리즘.</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    단순한 치아 성형이 아닙니다. 치아의 색상, 형태, 배열을 유기적으로 고려하여 가장 자연스럽고 눈부신 미소를 완성하는 4단계 스텝 바이 스텝(Step-by-step) 마스터플랜입니다.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#c6a87c] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div><h4 className="font-bold text-gray-900">에어플로우</h4><p className="text-sm text-gray-500">착색 및 플라그 제거로 깨끗한 바탕 만들기</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#c6a87c] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div><h4 className="font-bold text-gray-900">투명 교정</h4><p className="text-sm text-gray-500">치아의 불필요한 삭제를 막기 위한 바른 배열 확보</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#c6a87c] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div><h4 className="font-bold text-gray-900">라미네이트</h4><p className="text-sm text-gray-500">비율과 황금비에 맞춘 정교한 심미 보철 완성</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#c6a87c] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div><h4 className="font-bold text-gray-900">전문가 미백</h4><p className="text-sm text-gray-500">전체적인 톤업으로 눈부신 스마일 라인 마무리</p></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative min-h-[300px]">
                  <Image src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80" alt="밝은 미소 심미치료" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-[#faf8f5] via-transparent to-transparent hidden md:block"></div>
                </div>
              </div>
            )}

            {/* Tab 3: 한스 디지털 셋업 */}
            {activeTab === 'digital' && (
              <div className="animate-fade-in-up bg-[#111827] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center text-white">
                  <span className="text-blue-400 font-mono tracking-widest text-sm mb-4">{`// HIGH-TECH PROTOCOL`}</span>
                  <h3 className="text-3xl font-extrabold mb-6 leading-snug">0.01mm의 오차까지 고려하는 <br/> 정밀한 진단과 설계.</h3>
                  <div className="text-gray-400 mb-8 leading-relaxed space-y-4">
                    <p>사람의 감각에만 의존하지 않고, 정확한 3D 데이터와 공학적 분석을 기반으로 보다 예측 가능하고 안정적인 결과를 설계합니다.</p>
                    <p>정밀함은 결국 환자분의 편안함과 안전을 위한 것이라고 생각합니다.<br/>그래서 보이지 않는 과정까지 세심하게 고민하며 진료합니다.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                      <h4 className="font-bold text-blue-300 mb-2">3D 구강 스캐너</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">불편함을 최소화하면서 정밀한 구강 데이터를 빠르게 확보합니다.</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                      <h4 className="font-bold text-blue-300 mb-2">임플란트 가이드</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">신경과 구조를 고려한 설계를 통해 보다 안전하고 정확한 위치에 식립합니다.</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10 sm:col-span-2">
                      <h4 className="font-bold text-blue-300 mb-2">디지털 투명 교정</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">개인별 데이터를 기반으로 자연스럽고 안정적인 치아 이동을 설계합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative min-h-[300px]">
                  <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="디지털 덴티스트리" fill className="object-cover opacity-60 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/50 to-transparent"></div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* 6. 증례별 전후사진 슬라이더 */}
      <CasesSlider />

      {/* 7. Live Blog Feed */}
      <section id="blog" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Blog Feed</h2>
              <p className="text-gray-600">살아있는 홈페이지, 끊임없이 연구하고 소통하는 진료실의 일상</p>
            </div>
            <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-blue-900 font-bold hover:text-blue-900 hover:opacity-80 transition-colors">
              원장 블로그 바로가기 &rarr;
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="block bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-900 text-xs font-bold rounded-full mb-4">교정학 연구 일지</span>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors leading-snug">
                가톨릭대 임상치과학대학원 교정학 석박사 과정, 오늘의 저널 리뷰
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">더 나은 교정 치료 결과를 위해 주말에도 논문을 읽고 연구합니다. 오늘 다룬 최신 생체 역학 논문의 핵심은...</p>
              <p className="text-xs text-gray-400 font-mono">2 days ago</p>
            </a>

            <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="block bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-4">임상 케이스</span>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors leading-snug">
                타 병원 의뢰 없이 원스톱으로 해결한 교정 중 복합 발치 증례
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">환자분의 번거로움을 덜어드리기 위해 교정 발치와 사랑니 수술을 통합치의학적 관점에서 동시 진행한 케이스입니다.</p>
              <p className="text-xs text-gray-400 font-mono">1 week ago</p>
            </a>

            <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="block bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-4">공학도의 시선</span>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors leading-snug">
                오스템임플란트 연구자문치과 선정: 데이터로 증명하는 식립의 정확도
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">자문치과로서 최신 임플란트 기술을 가장 먼저 검토하고, 환자분들에게 최적의 재료와 공법을 제안합니다.</p>
              <p className="text-xs text-gray-400 font-mono">2 weeks ago</p>
            </a>
          </div>
        </div>
      </section>

      {/* 8. 카카오맵 컴포넌트 호출 */}
      <div id="location" className="pb-20">
        <KakaoMap />
      </div>

      {/* 9. Footer */}
      <footer className="bg-[#f8f9fa] py-16 text-[14px] text-gray-500 border-t border-gray-200 pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-10 mb-8 gap-8">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800 mb-6">서울한스치과의원</h2>
              <p>주소 : 대구광역시 동구 동부로 30길 12, 3층 <span className="font-semibold text-blue-900">(스타벅스 건물 3층)</span></p>
              <p>상호명 : 서울한스치과의원 | 대표 : 주호성 | 사업자등록번호 : 861-96-00766</p>
              <p>대표전화 : <span className="font-bold text-gray-800">053-216-3636</span></p>
            </div>
            <div className="md:text-right space-y-2">
              <h3 className="font-bold text-gray-800 mb-6 text-lg">진료시간</h3>
              <p>월, 수, 금 : AM 09:30 ~ PM 06:30 (점심시간 PM 01:00-PM 02:00)</p>
              <p>화요일 (야간진료) : AM 09:30 ~ PM 08:30</p>
              <p>토요일 : AM 09:30 ~ PM 02:00 (점심시간 없음)</p>
              <p className="text-red-500 font-bold mt-2">※ 목요일, 일요일 및 공휴일 휴진</p>
              <p className="text-xs mt-1">(대학원 수업으로 인한 목요일 휴진을 안내합니다)</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p>© 2026 Seoul Hans Dental Clinic. All Right Reserved.</p>
              <p className="text-xs font-mono text-gray-400 mt-2">Built by Director Joo with Next.js & Tailwind CSS</p>
            </div>
            <div className="flex space-x-6 font-medium text-gray-600">
              <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="hover:text-blue-900 transition-colors">네이버 블로그</a>
              <a href="#" className="hover:text-blue-900 transition-colors">인스타그램</a>
              <a href="#" className="hover:text-blue-900 transition-colors">카카오 채널</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}