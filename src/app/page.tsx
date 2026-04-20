import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 1. 배경 이미지: 어둡게 처리하여 텍스트 가독성 극대화 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80" 
          alt="서울한스치과 배경"
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        
        {/* 전문가 배지 섹션: 공학적 정밀함과 의료 전문성 강조 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="px-4 py-1.5 bg-blue-950/80 backdrop-blur-md rounded-full text-sm font-bold border border-blue-400/50 text-blue-200 shadow-lg">
            서울대학교 전기공학부 졸업
          </span>
          <span className="px-4 py-1.5 bg-blue-600/90 rounded-full text-sm font-semibold text-white shadow-md">
            서울대학교 치의학대학원 졸업
          </span>
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-white">
            보건복지부 인증 통합치의학 전문의
          </span>
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-white">
            가톨릭대학교 치과교정학 전공
          </span>
        </div>

        {/* 2. 메인 Title: 진정성 있는 책임 진료 강조 */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.2] tracking-tight">
          홈페이지 코드 한 줄부터,<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            당신의 미소까지 직접
          </span> 설계합니다.
        </h1>

        {/* 3. Subtitle: 요청하신 문구 반영 및 가독성(Darker/Bold) 강화 */}
        <p className="text-lg md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-md">
          분업화된 치과 시스템 속에서 길을 잃지 마세요. <br className="hidden md:block" />
          체계적인 진단부터, 교정과 수술까지, 당신의 모든 데이터를 가장 잘 아는 원장이 곁을 지킵니다. <br className="hidden md:block" />
          <span className="text-blue-300">서울한스치과에는 '중간에 바뀌는 의사'가 없습니다.</span>
        </p>

        {/* 5. 예약하기 버튼: 네이버 브랜드 컬러 적용 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://booking.naver.com/booking/13/bizes/123456" // 실제 예약 주소로 수정 필요
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-12 py-5 bg-[#03C75A] hover:bg-[#02b351] text-white text-xl font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(3,199,90,0.3)] hover:shadow-[0_15px_30px_rgba(3,199,90,0.4)] transform hover:-translate-y-1"
          >
            <span>네이버로 간편 예약하기</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;