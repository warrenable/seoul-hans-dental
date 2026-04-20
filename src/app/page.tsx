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
            서울한스치과의원
          </div>
          <nav className="hidden lg:flex space-x-8 text-[15px] font-semibold text-gray-700">
            <a href="#staff" className="hover:text-blue-900 transition-colors">원장 소개</a>
            <a href="#brand-core" className="hover:text-blue-900 transition-colors">진료 철학</a>
            <a href="#dev-note" className="hover:text-blue-900 transition-colors">Developer's Note</a>
            <a href="#roadmap" className="hover:text-blue-900 transition-colors">통합 로드맵</a>
            <a href="#hans-film" className="hover:text-blue-900 transition-colors">Hans Film</a>
            <a href="#blog" className="hover:text-blue-900 transition-colors">진료 일기</a>
            <a href="#location" className="hover:text-blue-900 transition-colors">오시는 길</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section (빈 공간을 하얀색으로 확실하게 덮도록 bg-white 추가) */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-white">
        
        {/* 원장님이 제작하신 커스텀 배경 이미지: 컨테이너에 bg-white를 추가하여 양옆 빈 공간을 하얗게 채움 */}
        <div className="absolute inset-0 z-0 bg-white">
          <Image 
            src="/hero-bg.webp" 
            alt="서울한스치과 메인 배경"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center mt-12">
          
          {/* 전문가 배지 섹션 */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 animate-fade-in-up w-full">
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-50 rounded-full text-xs md:text-sm font-bold border border-blue-100 text-blue-900 shadow-sm whitespace-nowrap">
              서울대학교 전기공학부 졸업
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-900 rounded-full text-xs md:text-sm font-semibold text-white shadow-md whitespace-nowrap">
              서울대학교 치의학대학원 졸업
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gray-50 rounded-full text-xs md:text-sm font-medium border border-gray-100 text-gray-700 whitespace-nowrap">
              통합치의학 전문의
            </span>
            <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gray-50 rounded-full text-xs md:text-sm font-medium border border-gray-100 text-gray-700 whitespace-nowrap">
              가톨릭대학교 치과교정학 전공
            </span>
          </div>

          {/* 상단 텍스트(중앙) 컨테이너 */}
          <div className="relative w-full flex justify-center items-center">
            
            {/* 중앙 텍스트 영역 */}
            <div className="w-full max-w-3xl text-center text-gray-900 relative z-10">
              {/* 메인 Title */}
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-[1.3] tracking-tight">
                당신의 주치의는 <span className="text-blue-900">바뀌지 않습니다.</span><br/>
                <span className="text-2xl md:text-3xl font-bold text-gray-700 mt-4 block leading-snug">
                  진료의 시작부터 끝까지, <br className="md:hidden" />책임의 무게를 아는 단 한 명의 원장.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-xl text-gray-800 leading-relaxed font-medium mx-auto max-w-2xl">
                분업화된 치과 시스템 속에서 길을 잃지 마세요. <br className="hidden md:block" />
                체계적인 진단부터, 교정과 수술까지, 당신의 모든 데이터를 가장 잘 아는 원장이 곁을 지킵니다. <br className="hidden md:block" />
                서울한스치과에는 <span className="font-bold text-blue-900">'중간에 바뀌는 의사'</span>가 없습니다.
              </p>
            </div>
          </div>

          {/* 예약하기 버튼 */}
          <div className="w-full flex justify-center mt-12 md:mt-16 animate-fade-in-up relative z-20" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://booking.naver.com/booking/13/bizes/804953"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-10 py-4 md:px-12 md:py-5 bg-[#03C75A] hover:bg-[#02b351] text-white text-lg md:text-xl font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(3,199,90,0.3)] hover:shadow-[0_15px_30px_rgba(3,199,90,0.4)] transform hover:-translate-y-1"
            >
              <span>네이버로 간편 예약하기</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Medical Staff & Director's Message */}
      <section id="staff" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* 좌측: 원장님 프로필 이미지 */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative aspect-[3/4]">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="대표원장 주호성" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            
            {/* 우측: 약력 및 메시지 */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-2">REPRESENTATIVE DIRECTOR</p>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">대표원장 주호성</h2>
                <ul className="text-gray-600 space-y-3 text-[16px] leading-relaxed font-medium">
                  <li>· 서울대학교 전기공학부 졸업</li>
                  <li>· 서울대학교 치과대학 졸업</li>
                  <li>· 통합치의학 전문의</li>
                  <li>· 가톨릭대학교 임상치과학대학원 치과교정학 석박사 과정</li>
                  <li>· 대한치과교정학회 정회원</li>
                </ul>
              </div>

              {/* 원장이 직접 전하는 메시지 공간 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-serif text-2xl">"</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">왜 홈페이지를 직접 코딩하냐고요?</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  마케팅 업체의 정형화된 글로는 제 진료 철학을 온전히 담을 수 없었습니다. 
                  그래서 Next.js 프레임워크를 활용해 클론코딩하며 이 공간을 한 줄 한 줄 직접 설계했습니다. <br/><br/>
                  전기공학도로서 익힌 '시스템적 사고'와 오차를 허용하지 않는 '완벽주의'. 
                  홈페이지 코드를 짜는 이 집요함과 꼼꼼함 그대로, 환자분의 입안을 책임지고 진료합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Core */}
      <section id="brand-core" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">정교한 설계, 책임 있는 완성</h2>
            <p className="text-gray-600 font-medium">서울한스치과를 지탱하는 두 개의 핵심 축, Logical & Responsible</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative mt-12">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 w-2/3 mx-auto h-0.5 bg-gray-200 z-0"></div>
            
            <div className="relative z-10 flex-1 text-center px-4 mb-10 md:mb-0">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-900 rounded-full flex items-center justify-center text-sm font-black text-blue-900 mb-6 shadow-sm">LOGICAL</div>
              <h3 className="font-bold text-lg mb-3">Engineering Mind</h3>
              <p className="text-sm text-gray-500 leading-relaxed">전기공학적 베이스를 바탕으로 한<br/>데이터 기반의 정확한 진단과<br/>최첨단 디지털 장비 활용의 근거</p>
            </div>

            <div className="relative z-10 flex-1 text-center px-4 mb-10 md:mb-0">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-800 rounded-full flex items-center justify-center text-sm font-black text-gray-800 mb-6 shadow-sm">RESPONSIBLE</div>
              <h3 className="font-bold text-lg mb-3">Total Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed">통합치의학 전문의로서<br/>"내 환자는 내가 끝까지 책임진다"는<br/>진료의 완결성</p>
            </div>

            <div className="relative z-10 flex-1 text-center px-4">
              <div className="w-24 h-24 mx-auto bg-blue-900 border-4 border-blue-900 rounded-full flex items-center justify-center text-sm font-black text-white mb-6 shadow-sm">DIRECT</div>
              <h3 className="font-bold text-lg mb-3">Direct Communication</h3>
              <p className="text-sm text-gray-500 leading-relaxed">마케팅 대행사의 가공된 언어가 아닌<br/>홈페이지 제작부터 진료까지<br/>원장의 날것 그대로의 진심</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Developer's Note */}
      <section id="dev-note" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-blue-900 font-mono text-sm mb-2">{`// THE DEVELOPER'S NOTE`}</p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">원장이 직접 쓴 디지털 치과 가이드</h2>
            <p className="text-gray-600">최신 디지털 장비를 도입하는 공학자의 시선</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-900 transition-colors">
              <div className="text-blue-900 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">3D 프린터와 구강 스캐너의 본질</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "왜 값비싼 장비를 고집할까요? 단순히 보여주기 위함이 아닙니다. 엔지니어의 관점에서 3D 구강 스캐너의 데이터 추출 정확도는 기존 아날로그 본뜨기의 변형 오차율을 혁신적으로 낮춥니다. 인풋(Input) 데이터가 완벽해야 아웃풋(보철물)이 완벽하다는 공학의 기본 원리입니다."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-900 transition-colors">
              <div className="text-blue-900 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">디지털 가이드 임플란트의 알고리즘</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "임플란트 식립은 감으로 하는 것이 아닙니다. 수술 전 CT 데이터를 3D 공간에 매핑(Mapping)하여 뼈의 밀도와 신경관의 위치를 시뮬레이션합니다. 최적의 경로를 코딩하듯 미리 가이드를 설계하여, 절개를 최소화하고 회복 기간을 획기적으로 단축시킵니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. All-in-One Roadmap */}
      <section id="roadmap" className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All-in-One Roadmap: 끊김 없는 치료 경험</h2>
            <p className="text-gray-600">"여기저기 다닐 필요 없습니다." 통합치의학 전문의가 환자의 시간을 아껴드립니다.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-100 ml-4 md:ml-12 space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute w-6 h-6 bg-blue-900 rounded-full -left-[15px] top-1 border-4 border-white shadow-sm"></div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="text-blue-900 font-bold text-sm mb-2 block">Phase 01. 정밀 진단 & 치아 교정</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">교정학 전공의 심미안으로 기초 설계</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    단순히 치아를 펴는 것을 넘어, 얼굴 전체의 황금비율을 고려하여 교정 계획을 수립합니다. 교정 진행 중 발생할 수 있는 충치나 잇몸 질환도 타 병원 의뢰 없이 즉각적으로 대처합니다.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute w-6 h-6 bg-blue-900 rounded-full -left-[15px] top-1 border-4 border-white shadow-sm"></div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="text-blue-900 font-bold text-sm mb-2 block">Phase 02. 외과적 처치</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">교정 중 발견된 매복 사랑니, 당일 발치</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    교정 도중 발치가 필요한 매복 사랑니가 발견되어도 문제없습니다. 통합치의학 전문의의 풍부한 임상 경험으로 대학병원에 갈 필요 없이 본원에서 안전하게 구강 외과적 수술을 진행합니다.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute w-6 h-6 bg-gray-800 rounded-full -left-[15px] top-1 border-4 border-white shadow-sm"></div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="text-gray-800 font-bold text-sm mb-2 block">Phase 03. 임플란트 & 평생 유지 관리</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">치료의 마침표, 그리고 새로운 시작</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    결손된 치아는 디지털 가이드 임플란트로 완벽하게 복원하며, 모든 치료가 끝난 후에도 교정 유지 장치 체크와 보철물 사후 관리리를 원장 1인이 책임지고 평생 관리합니다. 주치의가 바뀌어 생기는 소통의 오류는 없습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hans Film */}
      <section id="hans-film" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden border-t border-gray-800">
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

      {/* 8. 증례별 전후사진 슬라이더 */}
      <CasesSlider />

      {/* 9. Live Blog Feed */}
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
                오차율 0.01mm에 도전하다: 최신 3D 프린터 세팅 후기
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">장비를 도입하는 데 그치지 않고, 공학적 지식을 활용해 우리 병원만의 환경에 맞춘 최적의 캘리브레이션 값을 세팅했습니다.</p>
              <p className="text-xs text-gray-400 font-mono">2 weeks ago</p>
            </a>
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