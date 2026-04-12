import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CasesSlider from '@/components/CasesSlider';
import KakaoMap from '@/components/KakaoMap';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 scroll-smooth">
      <Head>
        <title>서울한스치과 - 설계하고 진료하는 공학도 출신 치과의사</title>
        <meta name="description" content="대구 동구 동부로에 위치한 서울한스치과입니다. 서울대 전기공학부 출신 대표원장의 공학적 정밀 진료." />
      </Head>

      {/* 1. Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900">
            SEOUL HANS
          </div>
          <nav className="hidden lg:flex space-x-8 text-[15px] font-semibold text-gray-700">
            <a href="#lab" className="hover:text-blue-600 transition-colors">Director's Lab</a>
            <a href="#workflow" className="hover:text-blue-600 transition-colors">Digital Workflow</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">통합진료 여정</a>
            <a href="#staff" className="hover:text-blue-600 transition-colors">의료진 소개</a>
            <a href="#hans-film" className="hover:text-blue-600 transition-colors">Hans Film</a>
            <a href="#cases" className="hover:text-blue-600 transition-colors">증례별 전후사진</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">오시는 길</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section (첫인상 개편) */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {/* 비주얼 팁 반영: 코딩/데이터 스캔 느낌을 줄 수 있는 추상적/공학적 배경 이미지로 교체 권장 */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Engineering and Dentistry" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/60 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 mt-20">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-6">ENGINEERING & DENTISTRY</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-[1.3] tracking-tight">
            설계(Engineering)하고, <br className="hidden md:block" /> 진료(Treat)합니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 font-medium">
            코드 한 줄의 정교함으로 치아의 미래를 그리는 서울한스치과
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
             {['서울대 전기공학부 출신', '통합치의학과 전문의', '디지털 정밀 진료'].map((item) => (
               <span key={item} className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-sm font-bold border border-blue-100 text-blue-900">
                 {item}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. The Director's Lab 신설 (브랜딩 핵심) */}
      <section id="lab" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4">THE DIRECTOR'S LAB</h2>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 leading-snug">
            "마케팅 업체의 정형화된 글이 아닌, <br/> 제 진심을 직접 코딩했습니다."
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            전기공학을 전공하며 익힌 <strong>'시스템적 사고'</strong>와 <strong>'오차를 허용하지 않는 디테일'</strong>. <br/>
            이 홈페이지를 직접 설계하고 구현한 그 집요함 그대로 환자분의 입안을 진료합니다. <br/>
            작은 픽셀 하나까지 통제하듯, 임플란트 가이드 설계부터 교정 시뮬레이션까지 모든 과정을 제가 직접 통제합니다.
          </p>
          <div className="inline-block px-6 py-3 bg-gray-50 rounded-xl text-sm font-mono text-gray-500 border border-gray-200">
            <code>// Precision is not a choice, it's a standard.</code>
          </div>
        </div>
      </section>

      {/* 4. Digital Workflow 개편 (공학적 강점) */}
      <section id="workflow" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">디지털 치의학 센터</h2>
            <p className="text-gray-600">0.1mm의 오차도 허용하지 않는 공학도의 고집, 디지털 장비로 실현합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI 진단 및 분석</h3>
              <p className="text-gray-600 leading-relaxed">경험에만 의존하지 않습니다. 수만 건의 데이터를 학습한 AI 알고리즘이 교합과 골밀도를 분석하여 인간의 눈이 놓칠 수 있는 미세한 오차를 차단합니다.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">3D 디지털 시뮬레이션</h3>
              <p className="text-gray-600 leading-relaxed">진료 전, 모니터 상에서 모든 치료 결과를 시뮬레이션합니다. 코드를 테스트하듯, 시술 전 결과를 예측하여 가장 안전하고 완벽한 경로를 찾아냅니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Care 환자 여정 신설 */}
      <section id="journey" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">처음부터 끝까지, 책임지는 통합치의학</h2>
            <p className="text-gray-600">주치의가 바뀌어 생기는 소통의 오류, 서울한스에서는 일어나지 않습니다.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            
            <div className="relative z-10 flex-1 text-center px-4 mb-8 md:mb-0">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-blue-600 mb-6 shadow-sm">STEP 1</div>
              <h3 className="font-bold text-lg mb-2">정밀 교정</h3>
              <p className="text-sm text-gray-500">치과교정학 전공의 심미안으로<br/>배열과 교합의 기초를 바로잡습니다.</p>
            </div>

            <div className="relative z-10 flex-1 text-center px-4 mb-8 md:mb-0">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 mb-6">STEP 2</div>
              <h3 className="font-bold text-lg mb-2">고난도 수술 및 발치</h3>
              <p className="text-sm text-gray-500">통합치의학과 전문의의 숙련도로<br/>어려운 사랑니 발치도 안전하게 진행합니다.</p>
            </div>

            <div className="relative z-10 flex-1 text-center px-4">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 mb-6">STEP 3</div>
              <h3 className="font-bold text-lg mb-2">임플란트 및 사후 관리</h3>
              <p className="text-sm text-gray-500">디지털 가이드 임플란트로 식립부터<br/>평생 치아 건강을 위한 관리까지 책임집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Medical Staff (의료진 소개 - 내용 보강) */}
      <section id="staff" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">서울한스치과 의료진 소개</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 max-w-2xl w-full">
              <div className="h-96 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="대표원장 주호성" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">대표원장 주호성</h3>
                <ul className="text-gray-600 space-y-3 text-[16px] leading-relaxed font-medium">
                  <li>· 서울대학교 전기공학부 졸업</li>
                  <li>· 서울대학교 치과대학 졸업</li>
                  <li>· 보건복지부 인증 통합치의학과 전문의</li>
                  <li>· 임상치의학대학원 치과교정학 전공</li>
                  <li>· 대한치과교정학회 정회원</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hans Film (무삭제 라미네이트) */}
      <section id="hans-film" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1000&q=80" alt="Film Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-gray-400 font-bold tracking-[0.2em] mb-4 text-sm">HANS FILM BY SEOUL HANS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">서울한스치과의 <br/> 무삭제 라미네이트</h2>
          <div className="space-y-6 text-lg text-gray-300 font-light">
            <p><strong className="text-white font-bold">POINT 01.</strong> 개개인의 황금비에 맞추어 100% 수작업되는 "한스필름"</p>
            <p><strong className="text-white font-bold">POINT 02.</strong> 소중한 자연치 보존을 위해 0.1mm Film 두께로 구현한 기술력</p>
            <p><strong className="text-white font-bold">POINT 03.</strong> 불필요한 치아삭제를 방지하기 위한 선교정 후 한스필름 진행</p>
          </div>
        </div>
      </section>

      {/* 8. 치료전후 슬라이더 */}
      <CasesSlider />

      {/* 9. Director's Log (블로그 연동 섹션 신설) */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Director's Log</h2>
              <p className="text-gray-600">공학도 원장이 직접 기록하는 생생한 진료 일기</p>
            </div>
            <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              블로그 전체보기 &rarr;
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 추후 실제 블로그 API 연동 또는 하드코딩 업데이트용 컴포넌트 */}
            {[
              { category: "오늘의 케이스", title: "오차 없는 디지털 가이드 임플란트 식립 과정", date: "2026.04.10" },
              { category: "장비 리뷰", title: "새로 도입한 3D 구강 스캐너, 공학적 관점의 분석", date: "2026.04.05" },
              { category: "교정 이야기", title: "보이지 않는 힘의 설계: 투명 교정의 원리", date: "2026.03.28" }
            ].map((post, idx) => (
              <a key={idx} href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="block bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                <span className="text-xs font-bold text-blue-500 mb-3 block">{post.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-400">{post.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 카카오맵 컴포넌트 호출 */}
      <div id="location">
        <KakaoMap />
      </div>

      {/* 11. Footer */}
      <footer className="bg-[#f8f9fa] py-16 text-[14px] text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-10 mb-8 gap-8">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800 mb-6">서울한스치과의원</h2>
              <p>주소 : 대구광역시 동구 동부로 30길 12, 3층 <span className="font-semibold text-blue-700">(스타벅스 건물 3층)</span></p>
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
              {/* 전문가 조언 반영: 개발자 서명 이스터에그 추가 */}
              <p className="text-xs font-mono text-gray-400 mt-2">Built by Director Joo with Next.js & Tailwind CSS</p>
            </div>
            <div className="flex space-x-6 font-medium text-gray-600">
              <a href="https://blog.naver.com/seoulhansdental" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">네이버 블로그</a>
              <a href="#" className="hover:text-blue-600 transition-colors">인스타그램</a>
              <a href="#" className="hover:text-blue-600 transition-colors">카카오 채널</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}