import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  const BLOG_MAIN_URL = "https://blog.naver.com/seoulhansdental";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      
      {/* 1. 글로벌 네비게이션 (서울블랑 스타일: 슬림 & 미니멀) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-50 px-6 py-5 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-black text-blue-950 tracking-tighter italic">서울한스치과의원</h1>
          </Link>
          <div className="hidden lg:flex items-center gap-16 text-[13px] font-bold text-slate-500 tracking-widest uppercase">
            <a href="#intro" className="hover:text-blue-950 transition-colors">원장소개</a>
            <a href="#subject" className="hover:text-blue-950 transition-colors">진료과목</a>
            <a href="#blog" className="hover:text-blue-950 transition-colors">진료일지</a>
            <a href="#location" className="hover:text-blue-950 transition-colors">오시는길</a>
          </div>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="bg-blue-950 text-white px-7 py-3 rounded-full text-[11px] font-bold tracking-widest hover:bg-slate-800 transition-all shadow-xl"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (서울블랑 스타일의 파격적 타이포그래피) */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 bg-[#F9FAFB] overflow-hidden">
        {/* 우측 하단에 거대하게 배치된 배경 로고 */}
        <div className="absolute right-[-15%] bottom-[-10%] w-[500px] md:w-[900px] h-[500px] md:h-[900px] opacity-[0.025] pointer-events-none rotate-12">
          <img src="/snu-logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="inline-flex items-center gap-3 px-1 mb-10 text-blue-950 animate-fade-in">
             <img src="/snu-logo.png" alt="SNU" className="w-6 h-6 object-contain" />
             <span className="text-sm md:text-lg font-black tracking-tight underline underline-offset-8 decoration-2">서울대학교 출신 전문의 진료</span>
          </div>
          <h2 className="text-5xl md:text-[110px] font-black text-slate-900 leading-[1.05] tracking-tighter mb-12">
            Perfect Detail, <br />
            <span className="text-blue-950 italic">Seoul Hans</span>
          </h2>
          <p className="text-lg md:text-3xl text-slate-400 font-medium max-w-3xl leading-relaxed break-keep mb-16">
            임플란트부터 교정까지, 주말에도 멈추지 않는 <br className="hidden md:block" />
            서울대 출신 전문의의 정밀한 올인원 케어.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
             <Link href={NAVER_BOOKING_URL} target="_blank" className="bg-blue-950 text-white px-12 py-7 rounded-2xl font-bold text-lg text-center shadow-2xl hover:bg-slate-800 transition-all">네이버 실시간 예약</Link>
             <a href="tel:053-216-3636" className="bg-white text-slate-900 border border-slate-200 px-12 py-7 rounded-2xl font-bold text-lg text-center hover:bg-slate-50 transition-all">전화 문의 상담</a>
          </div>
        </div>
      </section>

      {/* 3. 진료 철학 섹션 (서울블랑의 와이드 텍스트 스타일) */}
      <section className="py-32 md:py-56 px-6 bg-white border-b border-slate-50">
        <div className="max-w-5xl mx-auto text-center">
           <span className="text-blue-900 font-black text-xs tracking-[0.4em] uppercase mb-10 block">Philosophy</span>
           <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-snug break-keep mb-12">
             &quot;한 사람을 위한 가장 완벽한 설계, <br />
             서울한스치과가 지향하는 가치입니다.&quot;
           </h3>
           <div className="w-16 h-[1px] bg-slate-200 mx-auto"></div>
        </div>
      </section>

      {/* 4. 의료진 섹션 (약력 하이라이트 유지 & 하이엔드 레이아웃) */}
      <section id="intro" className="py-32 md:py-56 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 w-full relative">
            <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[20px] border-white">
               <img src="/doctor.jpg" alt="주호성 원장" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 w-full">
            <span className="text-blue-900 font-black text-xs tracking-[0.4em] uppercase mb-6 block">Medical Director</span>
            <h4 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 tracking-tighter underline underline-offset-[16px] decoration-blue-50 decoration-8">주호성 대표원장</h4>
            
            <div className="space-y-12">
              <div className="group">
                <h5 className="text-blue-950 font-black text-xl mb-6 flex items-center gap-4">
                  <span className="w-10 h-[2px] bg-blue-950"></span> 학력 및 전문의
                </h5>
                <ul className="space-y-4 text-slate-600 text-lg md:text-xl font-medium tracking-tight">
                  <li>서울대학교 졸업 / 서울대학교 치의학대학원 졸업</li>
                  <li>
                    <span className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-[-2px]">서울대학교 치의학대학원 석사</span>
                  </li>
                  <li>
                    <span className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-[-2px]">보건복지부 인증 통합치의학 전문의</span>
                  </li>
                  <li>
                    <span className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-[-2px]">가톨릭대학교 임상치과대학원 치과교정학 전공</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-10 bg-[#F9FAFB] rounded-[40px] border border-slate-100">
                  <h6 className="text-blue-950 font-black text-xs uppercase mb-6 tracking-widest">인증 및 자문</h6>
                  <ul className="space-y-3 text-slate-500 text-sm font-bold">
                    <li>오스템 임플란트 연구 자문 치과</li>
                    <li>매직얼라인 투명교정 우수 사용</li>
                    <li>투명교정 슈어스마일 인증 치과</li>
                  </ul>
                </div>
                <div className="p-10 bg-[#F9FAFB] rounded-[40px] border border-slate-100">
                  <h6 className="text-blue-950 font-black text-xs uppercase mb-6 tracking-widest">학회 활동</h6>
                  <ul className="space-y-3 text-slate-500 text-sm font-bold">
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

      {/* 5. 진료 과목 예고 (장비/증례 추가를 위한 그리드 설계) */}
      <section id="subject" className="py-32 md:py-56 px-6 bg-[#111827] text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div>
                  <span className="text-blue-400 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Our Specialties</span>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter">완성도 높은 <br />진료 과목</h3>
               </div>
               <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md break-keep">
                 첨단 디지털 장비와 교정 전문의의 안목으로 치아의 기능과 심미를 동시에 회복합니다.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {['디지털 임플란트', '치아 교정', '심미 보철'].map((item, i) => (
                 <div key={i} className="aspect-square bg-white/5 rounded-[50px] p-12 flex flex-col justify-between hover:bg-blue-950 transition-all cursor-pointer group border border-white/10">
                    <span className="text-5xl font-black text-white/10 group-hover:text-white/20">0{i+1}</span>
                    <h5 className="text-2xl font-black tracking-tight">{item}</h5>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. 진료 시간 & 오시는 길 (서울블랑 스타일: 거대하고 선명하게) */}
      <section id="location" className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-blue-900 font-black text-xs tracking-[0.4em] uppercase mb-8 block font-sans">Time and Place</span>
            <h4 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 tracking-tighter">진료 시간</h4>
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                  <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">월·화·수·금</span>
                  <div className="text-right">
                    <span className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight block">10:00 - 17:00</span>
                    <span className="text-slate-300 font-bold text-xs uppercase mt-2 block italic tracking-widest">Break 13:00 - 14:00</span>
                  </div>
               </div>
               
               <div className="bg-blue-950 p-10 md:p-14 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-10 relative z-10">
                     <span className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase font-sans">Weekend Open</span>
                     <span className="bg-red-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">목요일 휴진</span>
                  </div>
                  <div className="flex justify-between items-end relative z-10">
                     <div>
                        <span className="text-4xl md:text-6xl font-black tracking-tighter block mb-2 font-sans">토 · 일 진료</span>
                        <p className="text-blue-200 text-sm font-bold tracking-tight italic">전 요일 점심시간 동일 (1시-2시)</p>
                     </div>
                     <span className="text-4xl md:text-6xl font-black tracking-tighter font-sans">10:00 - 16:00</span>
                  </div>
               </div>

               <div className="pt-8">
                  <a href="tel:053-216-3636" className="flex items-center gap-8 group">
                    <span className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter group-hover:text-blue-900 transition-all underline underline-offset-[12px] decoration-slate-100">053-216-3636</span>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full flex items-center justify-center text-4xl group-hover:bg-blue-950 group-hover:text-white transition-all shadow-xl">📞</div>
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Link href={NAVER_MAP_LINK} target="_blank" className="group relative block h-full min-h-[500px] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white cursor-pointer">
               <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/95 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl flex justify-between items-center border border-white transform group-hover:-translate-y-3 transition-transform">
                   <div>
                     <p className="text-blue-950 font-black text-2xl mb-1 tracking-tighter">서울한스치과의원</p>
                     <p className="text-slate-400 font-bold tracking-tight">대구광역시 동구 동부로 30길 12 3층</p>
                   </div>
                   <span className="bg-blue-950 text-white px-8 py-4 rounded-full font-black text-sm shadow-xl">길찾기</span>
                 </div>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 (서울블랑의 미니멀 스타일) */}
      <footer className="py-32 px-6 border-t border-slate-50 bg-white text-center">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h5 className="text-slate-900 font-black text-xl italic tracking-widest mb-10">SEOUL HANS DENTAL CLINIC</h5>
            <div className="text-slate-300 text-xs font-bold leading-relaxed space-y-2 uppercase tracking-widest opacity-60">
              <p>대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | TEL: 053-216-3636</p>
              <p>© 2026 Seoul Hans Dental. All rights reserved.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}