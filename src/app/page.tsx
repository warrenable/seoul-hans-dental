import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  const BLOG_MAIN_URL = "https://blog.naver.com/seoulhansdental";

  const blogPosts = [
    {
      title: "과잉진료 없는 정직한 치과를 찾는 3가지 기준",
      date: "2026.03.11",
      link: "https://blog.naver.com/seoulhansdental/224238671886",
      category: "진료철학"
    },
    {
      title: "대구 안심역 교정치과, 왜 전문의 진단이 필수일까?",
      date: "2026.03.05",
      link: "https://blog.naver.com/seoulhansdental/224227971814",
      category: "치아교정"
    },
    {
      title: "서울대 출신 전문의가 들려주는 올인원 진료 이야기",
      date: "2026.02.28",
      link: "https://blog.naver.com/seoulhansdental/224220900652",
      category: "공지사항"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      
      {/* 1. 상단 네비게이션 (서울블랑 스타일의 슬림&화이트) */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-black text-blue-950 tracking-tighter italic">서울한스치과의원</h1>
          </Link>
          <div className="hidden md:flex items-center gap-12 text-sm font-bold text-slate-600 tracking-tight">
            <a href="#intro" className="hover:text-blue-900 transition-colors">의료진 소개</a>
            <a href="#blog" className="hover:text-blue-900 transition-colors">진료 일지</a>
            <a href="#location" className="hover:text-blue-900 transition-colors">오시는 길</a>
          </div>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-xl hover:bg-blue-800 transition-all"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 프리미엄 히어로 섹션 (와이드 디자인) */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-[#f8f9fb] overflow-hidden">
        {/* 배경에 투영되는 거대한 서울대 로고 */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none rotate-12">
          <img src="/snu-logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full bg-white text-blue-950 text-xs md:text-sm font-black shadow-sm border border-slate-100 tracking-tighter">
             <img src="/snu-logo.png" alt="SNU" className="w-5 h-5 object-contain" />
             <span>서울대학교 출신 전문의 진료</span>
          </div>
          <h2 className="text-4xl md:text-[84px] font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
            일요일도 만나는 <br />
            <span className="text-blue-950 underline decoration-blue-200 decoration-8 underline-offset-[12px]">품격 있는 진료</span>
          </h2>
          <p className="text-base md:text-2xl text-slate-500 mb-14 leading-relaxed font-medium break-keep">
            임플란트부터 교정까지, 보건복지부 인증 전문의가 <br className="hidden md:block" /> 처음부터 끝까지 정교하게 진료합니다.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href={NAVER_BOOKING_URL} target="_blank" className="w-full md:w-auto bg-blue-950 text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:bg-blue-800 transition-all active:scale-95">
              네이버 실시간 예약
            </Link>
            <a href="tel:053-216-3636" className="w-full md:w-auto bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              전화 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 3. 의료진 소개 (서울블랑 스타일의 깔끔한 구성) */}
      <section id="intro" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 w-full md:sticky md:top-32">
            <div className="aspect-[3/4] bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white relative group">
              <img src="/doctor.jpg" alt="주호성 대표원장" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          <div className="md:col-span-7 w-full pt-8">
            <span className="text-blue-900 font-black text-sm tracking-[0.3em] uppercase mb-4 block">Medical Director</span>
            <h4 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">주호성 대표원장</h4>
            
            <div className="space-y-16">
              {/* 학력 섹션 */}
              <div>
                <h5 className="text-blue-900 font-bold text-lg mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-900"></span> 학력 및 전문의
                </h5>
                <ul className="space-y-5 text-slate-700 text-lg md:text-xl font-medium">
                  <li>서울대학교 졸업 / 서울대학교 치의학대학원 졸업</li>
                  <li className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-2">서울대학교 치의학대학원 석사</li>
                  <li className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-2">보건복지부 인증 통합치의학 전문의</li>
                  <li className="text-blue-950 font-black italic underline decoration-blue-100 decoration-8 underline-offset-2">가톨릭대학교 임상치과대학원 치과교정학 전공</li>
                </ul>
              </div>

              {/* 인증 섹션 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                  <h5 className="text-slate-900 font-black text-sm mb-6 uppercase tracking-widest">인증기관</h5>
                  <ul className="space-y-3 text-slate-600 text-sm font-bold">
                    <li>● 오스템 임플란트 연구 자문 치과</li>
                    <li>● 디지털 투명교정 매직얼라인 우수 사용</li>
                    <li>● 투명교정 슈어스마일 인증 치과</li>
                  </ul>
                </div>
                <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                  <h5 className="text-slate-900 font-black text-sm mb-6 uppercase tracking-widest">학회활동</h5>
                  <ul className="space-y-3 text-slate-600 text-sm font-bold">
                    <li>• 대한 통합치과학회 정회원</li>
                    <li>• 대한 치과보철학회 정회원</li>
                    <li>• 대한 악안면임플란트학회 정회원</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 블로그 (카드 스타일 강화) */}
      <section id="blog" className="py-24 md:py-48 px-6 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <span className="text-blue-900 font-black text-sm tracking-widest mb-4 block italic uppercase">Medical Column</span>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">원장의 정성이 담긴 진료 일지</h3>
            </div>
            <Link href={BLOG_MAIN_URL} target="_blank" className="hidden md:block bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-slate-900 hover:text-white transition-all">
              전체보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.link} target="_blank" className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400 font-black text-[10px] tracking-widest uppercase">Journal</div>
                <div className="p-10">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-900 text-[10px] font-black rounded-full mb-6 uppercase">{post.category}</span>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug break-keep group-hover:text-blue-900 transition-colors">{post.title}</h4>
                  <div className="flex justify-between items-center text-slate-400 text-xs font-bold border-t pt-6">
                    <span>{post.date}</span>
                    <span className="text-blue-900 italic">Read More +</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 진료시간 및 오시는 길 (서울블랑 스타일의 정보 집중 레이아웃) */}
      <section id="location" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          
          {/* 진료 시간 정보 */}
          <div className="flex flex-col justify-center">
            <h4 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter">진료 시간 안내</h4>
            <div className="space-y-10">
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div>
                  <span className="text-slate-400 font-bold text-lg block mb-2">월 · 화 · 수 · 금</span>
                  <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">10:00 - 17:00</span>
                </div>
                <span className="text-slate-300 font-medium text-sm italic mb-1 uppercase">Break 13:00 - 14:00</span>
              </div>

              <div className="bg-blue-950 p-10 md:p-14 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-8 relative z-10">
                   <h5 className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase">Weekend Open</h5>
                   <span className="bg-white text-blue-950 px-4 py-1 rounded-full text-xs font-black uppercase">토·일 진료</span>
                </div>
                <div className="flex justify-between items-end relative z-10">
                   <p className="text-blue-200 text-sm md:text-lg font-bold leading-snug">점심시간은 1시부터 2시까지 <br />평일과 동일하게 운영됩니다.</p>
                   <span className="text-4xl md:text-6xl font-black tracking-tighter">10:00 - 16:00</span>
                </div>
                {/* 배경 패턴 */}
                <div className="absolute right-[-20px] bottom-[-20px] text-white/5 text-9xl font-black italic pointer-events-none">WEEK</div>
              </div>

              <div className="pt-4">
                 <p className="text-slate-400 font-medium text-sm italic mb-10 tracking-tight">※ 목요일 및 공휴일은 휴진입니다.</p>
                 <a href="tel:053-216-3636" className="inline-flex items-center gap-6 group">
                   <span className="text-4xl md:text-6xl font-black text-slate-900 group-hover:text-blue-900 transition-colors tracking-tighter underline underline-offset-8 decoration-4">053-216-3636</span>
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl group-hover:bg-blue-950 group-hover:text-white transition-all">📞</div>
                 </a>
              </div>
            </div>
          </div>

          {/* 오시는 길 지도 */}
          <div className="flex flex-col gap-10">
            <Link href={NAVER_MAP_LINK} target="_blank" className="group relative flex-1 min-h-[400px] md:min-h-[600px] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white cursor-pointer">
              <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl flex justify-between items-center transform group-hover:-translate-y-2 transition-transform">
                  <div>
                    <p className="text-blue-950 font-black text-xl mb-1">서울한스치과의원</p>
                    <p className="text-slate-500 font-medium">대구 동구 동부로 30길 12 3층</p>
                  </div>
                  <span className="bg-blue-950 text-white px-6 py-3 rounded-full font-black text-sm">길찾기</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 (서울블랑 스타일의 미니멀) */}
      <footer className="py-24 px-6 border-t border-slate-100 bg-white text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
           <h5 className="text-slate-900 font-black text-xl italic tracking-widest">SEOUL HANS DENTAL CLINIC</h5>
           <div className="text-slate-400 text-xs font-bold leading-relaxed space-y-2 opacity-60 uppercase">
             <p>대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | TEL: 053-216-3636</p>
             <p>© 2026 Seoul Hans Dental. All rights reserved.</p>
           </div>
        </div>
      </footer>
    </div>
  );
}