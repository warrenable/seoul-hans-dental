import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CasesSlider from '@/components/CasesSlider';
import KakaoMap from '@/components/KakaoMap';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 scroll-smooth">
      <Head>
        <title>서울한스치과 - 통합치의학 전문의 · 치과교정학 전공</title>
        <meta name="description" content="경기도 분당구 구미동에 위치한 서울한스치과입니다. 서울대 출신 대표원장 1:1 책임진료." />
      </Head>

      {/* 1. Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900">
            SEOUL HANS
          </div>
          <nav className="hidden lg:flex space-x-8 text-[15px] font-semibold text-gray-700">
            <a href="#staff" className="hover:text-blue-600 transition-colors">의료진 소개</a>
            <a href="#treatments" className="hover:text-blue-600 transition-colors">진료과목</a>
            <a href="#hans-philosophy" className="hover:text-blue-600 transition-colors">진료 철학</a>
            <a href="#implant" className="hover:text-blue-600 transition-colors">임플란트</a>
            <a href="#cases" className="hover:text-blue-600 transition-colors">증례별 전후사진</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">둘러보기</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">오시는 길</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 mt-20">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-6">SEOUL HANS DENTAL CLINIC</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-[1.3]">
            바른 진료로 보답하는 <br className="hidden md:block" /> 평생 치아 건강의 동반자
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 font-medium">
            서울대 출신 통합치의학과 전문의 대표원장 1:1 책임진료
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
             {['통합치의학과 전문의', '치과교정학 전공', '자연치아 살리기'].map((item) => (
               <span key={item} className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-sm font-bold border border-gray-200 text-gray-800">
                 {item}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. 진료과목 */}
      <section id="treatments" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">진료과목</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['치아교정', '임플란트', '충치치료', '신경치료', '사랑니발치', '턱관절치료', '치아미백', '예방치료'].map((subject, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gray-100 aspect-square rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-500 bg-slate-50">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  </div>
                </div>
                <h3 className="text-center font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Medical Staff (의료진 소개) */}
      <section id="staff" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">서울한스치과 의료진 소개</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 max-w-2xl w-full">
              <div className="h-96 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="대표원장" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">대표원장 [원장님 성함]</h3>
                <ul className="text-gray-600 space-y-3 text-[16px] leading-relaxed font-medium">
                  <li>· 서울대학교 치과대학 졸업</li>
                  <li>· 보건복지부 인증 통합치의학과 전문의</li>
                  <li>· 임상치의학대학원 치과교정학 전공</li>
                  <li>· [추가하실 학회나 약력을 이곳에 입력해주세요]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Blanc Film (무삭제 라미네이트 - 다크 테마 및 넓은 이미지) - 원본 유지 */}
      <section id="blanc-film" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1000&q=80" alt="Film Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-gray-400 font-bold tracking-[0.2em] mb-4 text-sm">BLANC FILM BY SEOUL BLANC</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">서울블랑치과의 <br/> 무삭제 라미네이트</h2>
          <div className="space-y-6 text-lg text-gray-300 font-light">
            <p><strong className="text-white font-bold">POINT 01.</strong> 개개인의 황금비에 맞추어 100% 수작업되는 "블랑필름"</p>
            <p><strong className="text-white font-bold">POINT 02.</strong> 소중한 자연치 보존을 위해 0.1mm Film 두께로 구현한 기술력</p>
            <p><strong className="text-white font-bold">POINT 03.</strong> 불필요한 치아삭제를 방지하기 위한 선교정 후 블랑필름 진행</p>
          </div>
        </div>
      </section>

      {/* 6. Implant (장비 및 임플란트 표면 라인업) - 원본 유지 */}
      <section id="implant" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">오스템임플란트 정품 사용</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              서울블랑치과에서는 저렴한 임플란트 픽스쳐는 사용하지 않습니다. <br/>
              가장 우수한 BA 표면 제품만을 취급하며, 모든 환자분들께 정품 보증서를 제공합니다.
            </p>
          </div>
          
          <div className="w-full h-80 bg-slate-50 rounded-2xl border border-gray-100 flex items-center justify-center flex-col shadow-sm">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <p className="text-gray-400 font-medium">[오스템 임플란트 표면 라인업 비교 인포그래픽 영역]</p>
          </div>
        </div>
      </section>

      {/* 7. 치료전후 슬라이더 컴포넌트 호출 - 원본 유지 */}
      <CasesSlider />

      {/* 8. 둘러보기 (Gallery - 인테리어 사진 그리드) - 원본 유지 */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">서울블랑치과 둘러보기</h2>
          <p className="text-center text-gray-500 mb-16">치과 치료를 편안하게 받으실 수 있도록</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Interior 1" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" alt="Interior 2" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1538108149393-cebb47ac0925?auto=format&fit=crop&w=600&q=80" alt="Interior 3" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" alt="Interior 4" className="w-full h-64 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* 9. 카카오맵 컴포넌트 호출 */}
      <KakaoMap />

      {/* 10. Footer */}
      <footer className="bg-[#f8f9fa] py-16 text-[14px] text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-10 mb-8 gap-8">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800 mb-6">서울한스치과의원</h2>
              <p>주소 : 경기도 분당구 구미동 [상세 주소 및 층수 입력]</p>
              <p>상호명 : 서울한스치과의원 | 대표 : [원장님 성함] | 사업자등록번호 : [사업자번호 입력]</p>
              <p>대표전화 : <span className="font-bold text-gray-800">[전화번호 입력]</span></p>
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
            <p>© 2026 Seoul Hans Dental Clinic. All Right Reserved.</p>
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