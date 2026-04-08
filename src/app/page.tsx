import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  const BLOG_MAIN_URL = "https://blog.naver.com/seoulhansdental";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      
      {/* 1. 상단 네비게이션: 투명감 있고 아주 얇은 라인 */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-6 md:px-16">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-black text-blue-950 tracking-tighter italic">서울한스치과의원</h1>
          </Link>
          <div className="hidden lg:flex items-center gap-16 text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase">
            <a href="#intro" className="hover:text-blue-950 transition-colors">원장소개</a>
            <a href="#philosophy" className="hover:text-blue-950 transition-colors">진료철학</a>
            <a href="#location" className="hover:text-blue-950 transition-colors">진료안내</a>
          </div>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="bg-blue-950 text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest hover:bg-slate-800 transition-all shadow-xl"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 초대형 히어로 섹션: 서울블랑의 시그니처 와이드 레이아웃 */}
      <section className="relative h-screen flex items-center px-6 md:px-16 bg-[#FAFAFA] overflow-hidden">
        {/* 우측 배경 로고: 예술적인 배치 */}
        <div className="absolute right-[-10%] bottom-[-5%] w-[60vw] h-[60vw] opacity-[0.02] pointer-events-none">
          <img src="/snu-logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-[1800px] mx-auto w-full z-10">
          <div className="mb-12 overflow-hidden">
             <div className="flex items-center gap-4 text-blue-950 mb-6 translate-y-0">
                <img src="/snu-logo.png" alt="SNU" className="w-8 h-8 object-contain" />
                <span className="text-sm md:text-xl font-black tracking-widest uppercase">Seoul National University Alumnus</span>
             </div>
             <h2 className="text-5xl md:text-[140px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-12">
                Pure Dental, <br />
                <span className="text-blue-950 italic">Professional.</span>
             </h2>
          </div>
          <p className="text-lg md:text-3xl text-slate-400 font-medium max-w-4xl leading-relaxed break-keep mb-20 tracking-tight">
            임플란트부터 치아교정까지, 보건복지부 인증 전문의가 선사하는 <br className="hidden md:block" />
            가장 정교하고 품격 있는 서울대학교식 정밀 진료.
          </p>
          <div className="flex flex-wrap gap-6">
             <Link href={NAVER_BOOKING_URL} target="_blank" className="bg-blue-950 text-white px-14 py-8 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-800 transition-all">네이버 실시간 예약</Link>
             <a href="tel:053-216-3636" className="bg-white text-slate-900 border border-slate-200 px-14 py-8 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">대표번호 문의</a>
          </div>
        </div>
      </section>

      {/* 3. 진료 철학 섹션: 압도적인 화이트 스페이스 */}
      <section id="philosophy" className="py-40 md:py-80 px-6 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div>
                <span className="text-blue-900 font-black text-xs tracking-[0.5em] uppercase mb-12 block">Philosophy</span>
                <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter break-keep">
                  본질에 집중하는 <br />
                  치료의 깊이.
                </h3>
             </div>
             <div className="space-y-12">
                <p className="text-xl md:text-3xl text-slate-500 leading-relaxed font-medium break-keep">
                  서울한스치과는 단순히 통증을 해결하는 것을 넘어, <br />
                  평생의 치아 건강을 설계하는 파트너가 되고자 합니다.
                </p>
                <div className="w-20 h-[2px] bg-blue-950"></div>
                <p className="text-slate-400 text-lg md:text-xl font-medium">
                   과잉진료 없는 정직함, 서울대학교 치과병원의 원칙을 대구에서 이어갑니다.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. 의료진 섹션: 고밀도 정보 & 미니멀 이미지 */}
      <section id="intro" className="py-40 md:py-80 px-6 bg-[#F5F5F5]">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-6 w-full relative">
            <div className="aspect-[3/4] rounded-[80px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] border-[25px] border-white">
               <img src="/doctor.jpg" alt="주호성 원장" className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" />
            </div>
          </div>
          <div className="lg:col-span-6 w-full px-4">
            <span className="text-blue-900 font-black text-xs tracking-[0.5em] uppercase mb-8 block">Medical Director</span>
            <h4 className="text-6xl md:text-[100px] font-black text-slate-900 mb-20 tracking-tighter leading-none">주호성</h4>
            
            <div className="space-y-20">
              <div className="group">
                <h5 className="text-blue-950 font-black text-2xl mb-10 flex items-center gap-6">
                  <span className="w-12 h-[3px] bg-blue-950"></span> 약력 및 전문성
                </h5>
                <ul className="space-y-6 text-slate-600 text-xl md:text-2xl font-bold tracking-tighter leading-snug">
                  <li>서울대학교 졸업 및 치의학대학원 졸업</li>
                  <li className="text-blue-950 italic underline decoration-blue-100 decoration-[12px] underline-offset-[-2px]">서울대학교 치의학대학원 석사</li>
                  <li className="text-blue-950 italic underline decoration-blue-100 decoration-[12px] underline-offset-[-2px]">보건복지부 인증 통합치의학 전문의</li>
                  <li className="text-blue-950 italic underline decoration-blue-100 decoration-[12px] underline-offset-[-2px]">가톨릭대학교 임상치과대학원 치과교정학 전공</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200">
                <div className="space-y-6">
                   <h6 className="text-slate-900 font-black text-sm uppercase tracking-widest">연구 및 자문</h6>
                   <ul className="space-y-3 text-slate-400 text-base font-bold">
                     <li>오스템 임플란트 연구 자문</li>
                     <li>매직얼라인 우수 사용 치과</li>
                     <li>슈어스마일 인증 치과</li>
                   </ul>
                </div>
                <div className="space-y-6">
                   <h6 className="text-slate-900 font-black text-sm uppercase tracking-widest">학회 활동</h6>
                   <ul className="space-y-3 text-slate-400 text-base font-bold">
                     <li>대한 통합치과학회 정회원</li>
                     <li>대한 치과보철학회 정회원</li>
                     <li>대한 악안면임플란트학회 정회원</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 진료 시간 및 오시는 길: 서울블랑 스타일의 정보 레이아웃 */}
      <section id="location" className="py-40 md:py-80 px-6 bg-white">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-blue-900 font-black text-xs tracking-[0.5em] uppercase mb-12 block">Hours &amp; Contact</span>
            <h4 className="text-6xl md:text-[100px] font-black text-slate-900 mb-20 tracking-tighter leading-none">진료 시간</h4>
            <div className="space-y-16">
               <div className="flex justify-between items-end border-b border-slate-100 pb-12">
                  <span className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter italic">월화수금</span>
                  <div className="text-right">
                    <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter block">10:00 - 17:00</span>
                    <span className="text-slate-300 font-bold text-sm uppercase mt-4 block italic tracking-widest tracking-widest">Lunch 13:00 - 14:00</span>
                  </div>
               </div>
               
               <div className="bg-blue-950 p-12 md:p-20 rounded-[100px] text-white shadow-[0_50px_100px_-20px_rgba(23,37,84,0.3)] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-16 relative z-10">
                     <span className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase underline decoration-white/20 underline-offset-[12px] decoration-4">Weekends</span>
                     <span className="bg-red-500 text-white px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-widest">Thursday Closed</span>
                  </div>
                  <div className="flex justify-between items-end relative z-10">
                     <div>
                        <span className="text-5xl md:text-8xl font-black tracking-tighter block mb-4 italic">토 · 일</span>
                        <p className="text-blue-200 text-base md:text-xl font-bold tracking-tight opacity-70 italic">일요일도 점심시간 동일 (1시-2시)</p>
                     </div>
                     <span className="text-5xl md:text-8xl font-black tracking-tighter">10:00 - 16:00</span>
                  </div>
                  <div className="absolute right-[-20%] bottom-[-20%] text-white/5 text-[300px] font-black italic pointer-events-none">HANS</div>
               </div>

               <div className="pt-12">
                  <a href="tel:053-216-3636" className="flex items-center gap-12 group">
                    <span className="text-5xl md:text-[100px] font-black text-slate-900 tracking-tighter group-hover:text-blue-900 transition-all underline underline-offset-[20px] decoration-slate-50">053-216-3636</span>
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-slate-100 rounded-full flex items-center justify-center text-5xl group-hover:bg-blue-950 group-hover:text-white transition-all shadow-2xl">📞</div>
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Link href={NAVER_MAP_LINK} target="_blank" className="group relative block h-full min-h-[600px] md:min-h-[800px] rounded-[100px] overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.1)] border-[30px] border-white cursor-pointer">
               <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
               <div className="absolute bottom-16 left-16 right-16">
                 <div className="bg-white/95 backdrop-blur-3xl p-12 rounded-[60px] shadow-2xl flex flex-col md:flex-row justify-between items-center border border-white transform group-hover:-translate-y-5 transition-transform gap-8">
                   <div className="text-center md:text-left">
                     <p className="text-blue-950 font-black text-3xl mb-2 tracking-tighter italic uppercase">Seoul Hans Dental</p>
                     <p className="text-slate-400 text-xl font-bold tracking-tight">대구광역시 동구 동부로 30길 12 3층</p>
                   </div>
                   <span className="bg-blue-950 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl tracking-widest uppercase">Go Map</span>
                 </div>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터: 서울블랑 스타일의 미니멀 마감 */}
      <footer className="py-40 px-6 bg-white text-center">
         <div className="max-w-[1800px] mx-auto flex flex-col items-center">
            <h5 className="text-slate-900 font-black text-2xl italic tracking-[0.4em] mb-12 uppercase">Seoul Hans</h5>
            <div className="w-16 h-[2px] bg-slate-100 mb-12"></div>
            <div className="text-slate-300 text-[12px] font-bold leading-relaxed space-y-4 uppercase tracking-[0.3em] opacity-80">
              <p>대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | TEL: 053-216-3636</p>
              <p>© 2026 Seoul Hans Dental. All rights reserved.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}