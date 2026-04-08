import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  const BLOG_MAIN_URL = "https://blog.naver.com/seoulhansdental";

  const blogPosts = [
    {
      title: "과잉진료 없는 정직한 치과를 찾는 3가지 기준",
      date: "최근 포스트",
      link: "https://blog.naver.com/seoulhansdental/224238671886",
      category: "진료철학"
    },
    {
      title: "대구 안심역 교정치과, 왜 전문의 진단이 필수일까?",
      date: "추천 포스트",
      link: "https://blog.naver.com/seoulhansdental/224227971814",
      category: "치아교정"
    },
    {
      title: "서울대 출신 전문의가 들려주는 올인원 진료 이야기",
      date: "인기 포스트",
      link: "https://blog.naver.com/seoulhansdental/224220900652",
      category: "공지사항"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      
      {/* 1. 상단 네비게이션 (모바일 가독성 개선) */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-50/50 px-4 py-3 md:p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-black text-blue-900 italic tracking-tighter">SEOUL HANS DENTAL</h1>
          </Link>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-900 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold shadow-lg"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (모바일 대응 배경 및 텍스트) */}
      <section className="relative pt-32 pb-20 md:pt-60 md:pb-32 px-6 bg-gradient-to-b from-blue-50/40 to-white overflow-hidden text-center">
        
        {/* 모바일에서는 배경 마크 크기를 줄이고 투명도를 더 낮춰 가독성 확보 */}
        <div className="absolute right-[-10%] top-[10%] w-[300px] h-[300px] md:w-[550px] md:h-[550px] opacity-[0.03] pointer-events-none rotate-12">
          <img src="/snu-logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white text-blue-900 text-[10px] md:text-[11px] font-black tracking-widest shadow-sm border border-blue-100 uppercase">
             <img src="/snu-logo.png" alt="SNU" className="w-4 h-4 object-contain" />
             <span>SNU ALUMNUS</span>
          </div>
          <h2 className="text-3xl md:text-7xl font-extrabold text-slate-900 mb-6 md:mb-10 leading-tight tracking-tighter">
            토·일 주말 진료, <br />
            <span className="text-blue-900">서울대 출신 올인원 케어</span>
          </h2>
          <p className="text-sm md:text-xl text-slate-500 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto font-medium break-keep">
            임플란트부터 치아교정까지, 보건복지부 인증 전문의가 처음부터 끝까지 책임지는 통합 진료를 약속드립니다.
          </p>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-slate-900 text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-bold text-sm md:text-base hover:bg-blue-900 transition-all shadow-xl active:scale-95"
          >
            네이버 실시간 예약하기
          </Link>
        </div>
      </section>

      {/* 3. 의료진 소개 (모바일 1컬럼 자동 전환) */}
      <section id="intro" className="py-16 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="w-full md:sticky md:top-32">
            <div className="aspect-[4/5] md:aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-2 border-white relative group">
              <img src="/doctor.jpg" alt="주호성 대표원장" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
               <p className="text-blue-900 font-bold text-sm md:text-lg leading-relaxed italic break-keep">
                 &quot;임플란트와 교정의 경계를 허무는 통합적 안목으로 <br className="hidden md:block" />가장 효율적인 치료 계획을 제시합니다.&quot;
               </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <h3 className="text-blue-900 font-bold mb-3 uppercase tracking-widest text-[10px]">Medical Director</h3>
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">주호성 대표원장</h4>
            
            <div className="mb-8">
              <p className="text-blue-900 font-bold text-xs mb-4 tracking-widest uppercase border-l-4 border-blue-900 pl-3">학력 및 전문의</p>
              <ul className="space-y-3 text-slate-700 text-sm md:text-[17px] break-keep">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 서울대학교 졸업 / 치의학대학원 졸업</li>
                <li className="flex items-start gap-3 font-bold text-blue-900 italic"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 보건복지부 인증 통합치의학 전문의</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 가톨릭대학교 임상치과대학원 교정학 전공</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-blue-900 font-bold text-[10px] mb-4 uppercase">인증 및 연구 협력</p>
              <ul className="space-y-3 text-slate-700 text-xs md:text-sm font-medium">
                <li className="flex items-center gap-2">● 오스템 임플란트 연구 자문 치과</li>
                <li className="flex items-center gap-2 font-bold">● 디지털 투명교정 매직얼라인 우수 사용</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 블로그 섹션 (가로 스크롤 또는 1열 배치) */}
      <section id="blog" className="py-16 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">원장의 진료 이야기</h3>
              <p className="text-sm md:text-lg text-slate-500 font-medium break-keep">원장이 한땀한땀 직접 쓰는 치아 건강 정보</p>
            </div>
            <Link href={BLOG_MAIN_URL} target="_blank" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm shadow-lg">전체보기 →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.link} target="_blank" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm active:bg-slate-50">
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 font-black text-[10px] uppercase tracking-widest">Journal</div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-900 text-[9px] font-black rounded-full mb-3 uppercase tracking-tighter">{post.category}</span>
                  <h4 className="text-base md:text-xl font-bold text-slate-800 mb-4 leading-snug tracking-tight break-keep">{post.title}</h4>
                  <p className="text-slate-400 text-[10px] uppercase font-black">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 오시는 길 및 진료시간 (모바일 최적화 배치) */}
      <section id="location" className="py-16 md:py-32 px-4 md:px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          
          {/* 진료 시간 카드 (모바일에서 가장 중요하므로 위로 배치하거나 눈에 띄게) */}
          <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center border-b border-blue-50 pb-4 mb-6 md:mb-10">
              <h4 className="text-xl md:text-2xl font-black text-blue-900 italic uppercase">Clinic Hours</h4>
              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[9px] md:text-[11px] font-black uppercase">Closed on Thu</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <span className="font-bold text-sm md:text-lg text-slate-400">평일(월화수금)</span>
                <span className="font-black text-slate-900 text-base md:text-xl">10:00 - 17:00</span>
              </div>

              <div className="bg-blue-900 p-6 md:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-lg md:text-2xl tracking-tight uppercase italic">Weekend Open</span>
                  <span className="text-[8px] md:text-[10px] bg-white text-blue-900 px-2 py-0.5 rounded font-black uppercase">토·일 진료</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-blue-100 text-[10px] md:text-sm font-bold">점심시간 없이 오후 4시까지</p>
                  <span className="font-black text-2xl md:text-4xl tracking-tighter">10:00 - 16:00</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <a href="tel:053-216-3636" className="flex-1 bg-slate-900 text-white p-5 rounded-2xl flex justify-between items-center active:bg-blue-900">
                <div>
                  <p className="text-[9px] font-black text-blue-300 uppercase mb-1">Call Us</p>
                  <p className="text-xl font-black tracking-tight underline underline-offset-4">053-216-3636</p>
                </div>
                <span className="text-2xl">📞</span>
              </a>
            </div>
          </div>

          {/* 오시는 길 지도 (모바일에서 터치하기 편하게) */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight px-2">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="group relative min-h-[300px] md:min-h-[450px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white cursor-pointer">
              <img src="/map-capture.png" alt="Map" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-2xl flex justify-between items-center border border-white">
                  <div>
                    <p className="text-blue-900 font-black text-sm">서울한스치과의원</p>
                    <p className="text-slate-500 text-[10px]">스타벅스 건물 3층</p>
                  </div>
                  <span className="bg-blue-900 text-white text-[10px] px-4 py-2 rounded-full font-black">길찾기</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-16 px-6 bg-white text-center border-t">
        <p className="text-slate-900 font-black text-xs mb-2 italic">SEOUL HANS DENTAL CLINIC</p>
        <p className="text-slate-400 text-[9px] font-bold leading-relaxed">
          대구광역시 동구 동부로 30길 12 3층 <br /> TEL: 053-216-3636 <br />
          © 2026 Seoul Hans Dental. All rights reserved.
        </p>
      </footer>
    </div>
  );
}