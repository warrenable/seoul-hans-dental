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
      
      {/* 1. 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/"><h1 className="text-xl font-black text-blue-900 italic cursor-pointer tracking-tighter">SEOUL HANS DENTAL</h1></Link>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
            <a href="#intro" className="hover:text-blue-900 transition-colors">의료진</a>
            <a href="#blog" className="hover:text-blue-900 transition-colors">원장의 진료일지</a>
            <a href="#location" className="hover:text-blue-900 transition-colors">오시는길</a>
          </div>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-100 hover:bg-slate-800 transition-all"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (서울대 마크 위치 조정 완료) */}
      <section className="relative pt-60 pb-32 px-6 bg-gradient-to-b from-blue-50/40 to-white overflow-hidden">
        
        {/* 🌟 배경 마크 위치 수정: 오른쪽 끝에서 가운데 쪽으로 이동 🌟 */}
        <div className="absolute right-[5%] md:right-[15%] top-[25%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] opacity-[0.035] pointer-events-none rotate-[15deg]">
          <img 
            src="/snu-logo.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full bg-white text-blue-900 text-[11px] font-black tracking-[0.3em] shadow-md border border-blue-100 uppercase">
             <img src="/snu-logo.png" alt="SNU" className="w-5 h-5 object-contain" />
             <span>SNU ALUMNUS 전문의 진료</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 leading-[1.05] tracking-tighter">
            토·일 주말 진료, <br />
            <span className="text-blue-900 drop-shadow-sm">서울대 출신 올인원 케어</span>
          </h2>
          <p className="text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
            임플란트부터 치아교정까지, 보건복지부 인증 전문의가 <br className="hidden md:block" />
            처음부터 끝까지 책임지는 통합 진료를 약속드립니다.
          </p>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-slate-900 text-white px-12 py-6 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-2xl hover:scale-[1.03] active:scale-[0.97]"
          >
            네이버 실시간 예약하기
          </Link>
        </div>
      </section>

      {/* 3. 의료진 소개 */}
      <section id="intro" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-32">
            <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <img src="/doctor.jpg" alt="주호성 대표원장" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="mt-8 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center shadow-sm">
               <p className="text-blue-900 font-bold leading-relaxed italic text-lg font-sans">
                 &quot;임플란트와 교정의 경계를 허무는 통합적 안목으로 <br/>
                 가장 효율적인 치료 계획을 제시합니다.&quot;
               </p>
            </div>
          </div>
          <div className="pt-4 font-sans">
            <h3 className="text-blue-900 font-bold mb-4 uppercase tracking-[0.3em] text-[10px]">Medical Director</h3>
            <h4 className="text-4xl font-bold mb-8 text-slate-900 tracking-tight flex items-baseline gap-3">
              주호성 <span className="text-xl font-medium text-slate-500">대표원장</span>
            </h4>
            <div className="mb-10">
              <p className="text-blue-900 font-bold text-sm mb-5 tracking-widest uppercase border-l-4 border-blue-900 pl-3">학력 및 전문의</p>
              <ul className="space-y-4 text-slate-700 text-[17px] font-sans">
                <li className="flex items-center gap-3 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 서울대학교 졸업 / 치의학대학원 졸업</li>
                <li className="flex items-center gap-3 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 서울대학교 치의학대학원 석사</li>
                <li className="flex items-center gap-3 text-blue-900 font-extrabold italic"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 보건복지부 인증 통합치의학 전문의</li>
                <li className="flex items-center gap-3 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span> 가톨릭대학교 임상치과대학원 치과교정학 전공</li>
              </ul>
            </div>
            <div className="mb-10 p-7 bg-slate-50 rounded-3xl border border-slate-100 font-sans">
              <p className="text-blue-900 font-bold text-[11px] mb-5 uppercase tracking-tighter">인증 및 연구 협력</p>
              <ul className="space-y-4 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-3 font-bold text-slate-800 tracking-tight">● 오스템 임플란트 연구 자문 치과</li>
                <li className="flex items-center gap-3 font-bold text-slate-800 tracking-tight">● 디지털 투명교정 매직얼라인 우수 사용 치과</li>
                <li className="flex items-center gap-3 font-bold text-slate-800 tracking-tight">● 투명교정 슈어스마일 인증 치과</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 font-bold text-[10px] mb-4 uppercase font-sans">학회 및 수료</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-500 text-[13px] font-sans">
                <li>• 대한 통합치과학회 정회원</li>
                <li>• 대한 치과보철학회 정회원</li>
                <li>• 대한 악안면임플란트학회 정회원</li>
                <li>• 오스템 AIC 임플란트 고급과정 수료</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 블로그 섹션 */}
      <section id="blog" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="font-sans">
              <span className="text-blue-900 font-black text-xs uppercase tracking-[0.25em] mb-3 block italic">Medical Column</span>
              <h3 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight font-sans">대표원장이 직접 전하는 진료 이야기</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl font-sans">
                환자분들께 꼭 알려드리고 싶은 치아 건강 정보를 <br className="hidden md:block" />
                전문의 주호성이 직접 한땀한땀 써내려갑니다.
              </p>
            </div>
            <Link 
              href={BLOG_MAIN_URL} 
              target="_blank" 
              className="group bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-900 transition-all flex items-center gap-2 shadow-xl font-sans"
            >
              블로그 전체보기 
              <span className="group-hover:translate-x-1 transition-transform font-serif">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.link} target="_blank" className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-2xl">
                <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center text-slate-300 italic group-hover:bg-blue-50 transition-colors font-black text-[10px] uppercase tracking-[0.3em] font-sans">Journal Article</div>
                <div className="p-9">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-900 text-[10px] font-black rounded-full mb-5 uppercase tracking-tighter font-sans">{post.category}</span>
                  <h4 className="text-xl font-bold text-slate-800 mb-6 leading-snug group-hover:text-blue-900 transition-colors min-h-[4rem] tracking-tight font-sans">{post.title}</h4>
                  <div className="flex justify-between items-center text-slate-400 text-[10px] uppercase font-black tracking-widest pt-6 border-t border-slate-50 font-sans">
                    <span>{post.date}</span>
                    <span className="group-hover:text-blue-900 transition-colors italic">Read More +</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 오시는 길 및 진료시간 */}
      <section id="location" className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch font-sans">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold tracking-tight">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="group relative flex-1 min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200">
              <img src="/map-capture.png" alt="Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-lg px-8 py-5 rounded-[1.5rem] shadow-2xl flex justify-between items-center transform group-hover:-translate-y-2 transition-transform border border-white">
                  <div>
                    <p className="text-blue-900 font-black text-base">서울한스치과의원</p>
                    <p className="text-slate-500 text-xs font-medium">스타벅스 건물 3층</p>
                  </div>
                  <span className="bg-blue-900 text-white text-[11px] px-5 py-2 rounded-full font-black shadow-lg">길찾기</span>
                </div>
              </div>
            </Link>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <p className="text-blue-900 font-black text-xs mb-3 uppercase tracking-widest">Hospital Address</p>
              <p className="text-slate-800 font-extrabold text-2xl mb-3 tracking-tight leading-tight">대구광역시 동구 동부로 30길 12 3층</p>
              <p className="text-slate-500 font-bold text-base italic">건물 내 전용 주차장 완비</p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-50 pb-6 mb-10">
                <h4 className="text-2xl font-black text-blue-900 tracking-tight italic uppercase">Clinic Hours</h4>
                <div className="mt-3 md:mt-0 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest tracking-tight">Closed on Thursday</div>
              </div>
              <div className="space-y-8 text-slate-600 font-sans px-2">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="font-bold text-lg text-slate-400">월 화 수 금</span>
                  <span className="font-black text-slate-900 text-xl tracking-tight font-sans">10:00 - 17:00</span>
                </div>
                <div className="bg-blue-900 p-8 rounded-[2rem] text-white shadow-2xl shadow-blue-100 relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-black text-2xl tracking-tight uppercase italic underline decoration-white/30 decoration-4 underline-offset-8">Weekend Open</span>
                    <span className="text-[10px] bg-white text-blue-900 px-3 py-1 rounded-full font-black uppercase tracking-widest tracking-tight font-sans">Full Day</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100 text-sm font-bold leading-tight">토요일 일요일 <br />오후 4시까지 진료</p>
                    <span className="font-black text-4xl tracking-tighter font-sans">10:00 - 16:00</span>
                  </div>
                </div>
                <p className="text-center text-slate-400 text-xs font-bold pt-4 tracking-tighter italic">※ 점심시간 없이 진료합니다. / 목요일 및 공휴일 휴진</p>
              </div>
            </div>
            <div className="mt-14 p-10 bg-slate-900 rounded-[2rem] text-white flex justify-between items-center group cursor-pointer hover:bg-blue-900 transition-all shadow-2xl">
              <div>
                <p className="text-blue-200 text-[11px] font-black uppercase tracking-[0.3em] mb-2 font-sans">Registration No.</p>
                <p className="text-3xl font-black tracking-tight underline decoration-blue-400 decoration-4 underline-offset-8 transform group-hover:scale-105 transition-transform font-sans">053-216-3636</p>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/5 font-sans">
                <span className="text-3xl">📞</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-24 px-6 border-t border-slate-100 bg-white text-center font-sans">
        <div className="max-w-6xl mx-auto opacity-40">
           <p className="text-slate-900 font-black text-sm mb-3 italic tracking-widest">SEOUL HANS DENTAL CLINIC</p>
           <p className="text-slate-400 text-[10px] font-bold leading-relaxed font-sans">
             대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | TEL: 053-216-3636 <br />
             © 2026 Seoul Hans Dental. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}