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
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-50/50 px-4 py-3 md:p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-black text-blue-900 italic tracking-tighter">서울한스치과의원</h1>
          </Link>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-900 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-xs font-bold shadow-lg"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 히어로 섹션 */}
      <section className="relative pt-32 pb-20 md:pt-60 md:pb-32 px-6 bg-gradient-to-b from-blue-50/40 to-white overflow-hidden text-center text-left">
        <div className="absolute right-[-5%] md:right-[15%] top-[15%] md:top-[20%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] opacity-[0.035] pointer-events-none rotate-12">
          <img src="/snu-logo.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-white text-blue-900 text-xs md:text-sm font-black tracking-tight shadow-md border border-blue-100">
             <img src="/snu-logo.png" alt="SNU" className="w-5 h-5 object-contain" />
             <span>서울대학교 출신 전문의 진료</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-6 md:mb-10 leading-tight tracking-tighter break-keep">
            토·일 주말 진료, <br />
            <span className="text-blue-900">서울대 출신 올인원 케어</span>
          </h2>
          <p className="text-base md:text-xl text-slate-500 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto font-medium break-keep">
            임플란트부터 치아교정까지, 보건복지부 인증 전문의가 <br className="hidden md:block" /> 처음부터 끝까지 책임지는 통합 진료를 약속드립니다.
          </p>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-10 py-5 md:px-14 md:py-6 rounded-2xl font-bold text-base md:text-lg hover:bg-blue-900 transition-all shadow-xl active:scale-95">
            네이버 실시간 예약하기
          </Link>
        </div>
      </section>

      {/* 3. 의료진 소개 */}
      <section id="intro" className="py-16 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="w-full md:sticky md:top-32">
            <div className="aspect-[4/5] md:aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-2 border-white relative group">
              <img src="/doctor.jpg" alt="주호성 대표원장" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
               <p className="text-blue-900 font-bold text-base md:text-lg leading-relaxed italic break-keep">
                 &quot;임플란트와 교정의 경계를 허무는 통합적 안목으로 <br className="hidden md:block" />가장 효율적인 치료 계획을 제시합니다.&quot;
               </p>
            </div>
          </div>

          <div className="w-full pt-4 font-sans text-left">
            <h3 className="text-blue-900 font-bold mb-3 tracking-widest text-xs uppercase font-sans">대표원장 소개</h3>
            <h4 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight font-sans">주호성 대표원장</h4>
            
            <div className="mb-10">
              <p className="text-blue-900 font-bold text-sm mb-5 tracking-widest uppercase border-l-4 border-blue-900 pl-3">학력 및 전문의</p>
              <ul className="space-y-4 text-slate-700 text-base md:text-[17px] break-keep">
                <li className="flex items-start gap-3 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 서울대학교 졸업</li>
                <li className="flex items-start gap-3 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 서울대학교 치의학대학원 졸업</li>
                <li className="flex items-start gap-3 font-extrabold text-blue-900 italic underline decoration-blue-200 decoration-4 underline-offset-4 font-sans"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 서울대학교 치의학대학원 석사</li>
                <li className="flex items-start gap-3 font-extrabold text-blue-900 italic underline decoration-blue-200 decoration-4 underline-offset-4 font-sans"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 보건복지부 인증 통합치의학 전문의</li>
                <li className="flex items-start gap-3 font-extrabold text-blue-900 italic underline decoration-blue-200 decoration-4 underline-offset-4 font-sans"><span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0"></span> 가톨릭대학교 임상치과대학원 치과교정학 전공</li>
              </ul>
            </div>

            <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 font-sans">
              <p className="text-blue-900 font-bold text-sm mb-5 tracking-tighter border-b border-blue-100 pb-2">인증 및 연구 협력</p>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base font-bold">
                <li className="flex items-center gap-2">● 오스템 임플란트 연구 자문 치과</li>
                <li className="flex items-center gap-2">● 디지털 투명교정 매직얼라인 우수 사용 치과</li>
                <li className="flex items-center gap-2">● 투명교정 슈어스마일 인증 치과</li>
              </ul>
            </div>

            <div>
              <p className="text-blue-900 font-bold text-sm mb-5 tracking-tighter border-b border-blue-100 pb-2 font-sans">학회 및 수료</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-slate-600 text-sm md:text-base font-medium font-sans">
                <li className="flex items-start gap-2">• 대한 통합치과학회 정회원</li>
                <li className="flex items-start gap-2">• 대한 치과보철학회 정회원</li>
                <li className="flex items-start gap-2">• 대한 악안면임플란트학회 정회원</li>
                <li className="flex items-start gap-2">• 오스템 AIC 임플란트 고급과정 수료</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 블로그 섹션 */}
      <section id="blog" className="py-16 md:py-32 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div>
              <span className="text-blue-900 font-black text-xs uppercase tracking-widest mb-2 block italic font-sans">진료 일지</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight font-sans">대표원장이 직접 쓰는 치아 이야기</h3>
              <p className="text-sm md:text-lg text-slate-500 font-medium break-keep font-sans">환자분들께 꼭 알려드리고 싶은 치아 건강 정보를 전문의가 직접 전합니다.</p>
            </div>
            <Link href={BLOG_MAIN_URL} target="_blank" className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold text-sm active:scale-95 shadow-lg font-sans">블로그 전체보기 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.link} target="_blank" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm active:bg-slate-50">
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 font-black text-[10px] uppercase tracking-widest font-sans">진료 일지</div>
                <div className="p-7 text-left">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-900 text-[10px] font-black rounded-full mb-4 uppercase font-sans">{post.category}</span>
                  <h4 className="text-base md:text-xl font-bold text-slate-800 mb-4 leading-snug tracking-tight break-keep group-hover:text-blue-900 transition-colors font-sans">{post.title}</h4>
                  <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase border-t pt-4 font-sans">
                    <span>{post.date}</span>
                    <span className="italic underline underline-offset-2">자세히 보기 +</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 진료시간 및 오시는 길 (주말 점심시간 반영) */}
      <section id="location" className="py-16 md:py-32 px-4 md:px-6 bg-slate-50/50 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
          <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center border-b border-blue-50 pb-4 mb-8">
              <h4 className="text-xl md:text-2xl font-black text-blue-900 italic font-sans">진료 시간 안내</h4>
              <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-black font-sans">목요일 휴진</span>
            </div>
            
            <div className="space-y-6 font-sans text-left">
              {/* 공통 점심시간 안내 */}
              <div className="px-2 pb-6 border-b border-slate-100">
                <div className="flex justify-between items-center py-1">
                  <span className="font-bold text-base md:text-lg text-slate-900 font-sans tracking-tight">전 요일 점심시간</span>
                  <span className="font-black text-blue-900 text-lg md:text-xl font-sans">13:00 - 14:00</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium font-sans">※ 주말(토·일)도 점심시간은 평일과 동일합니다.</p>
              </div>

              {/* 평일 진료 시간 */}
              <div className="px-2 pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm md:text-lg text-slate-400 italic font-sans">평일(월·화·수·금)</span>
                  <span className="font-black text-slate-900 text-base md:text-xl font-sans tracking-tight">10:00 - 17:00</span>
                </div>
              </div>

              {/* 주말 진료 (강조) */}
              <div className="bg-blue-900 p-6 md:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-xl md:text-2xl tracking-tight italic font-sans uppercase">주말 진료 (토·일)</span>
                  <span className="text-[10px] md:text-xs bg-white text-blue-900 px-3 py-1 rounded-full font-black font-sans tracking-tighter">정상 진료</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-blue-100 text-xs md:text-sm font-bold leading-tight font-sans">
                    바쁜 분들을 위한 <br /> 
                    토·일요일 주말 진료
                  </p>
                  <span className="font-black text-3xl md:text-4xl tracking-tighter font-sans">10:00 - 16:00</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="tel:053-216-3636" className="w-full bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center active:bg-blue-900 shadow-xl transition-all font-sans">
                <div>
                  <p className="text-[10px] font-black text-blue-300 uppercase mb-1 tracking-widest font-sans">실시간 예약 및 상담 문의</p>
                  <p className="text-2xl font-black tracking-tight underline underline-offset-4 font-sans">053-216-3636</p>
                </div>
                <span className="text-3xl animate-bounce font-sans">📞</span>
              </a>
              <p className="text-center text-slate-400 text-xs mt-4 italic font-medium tracking-tight font-sans">※ 번호를 누르면 바로 전화가 연결됩니다.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 font-sans">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight px-2 font-sans">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="group relative min-h-[350px] md:min-h-[450px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-2xl flex justify-between items-center border border-white">
                  <div>
                    <p className="text-blue-900 font-black text-sm font-sans">서울한스치과의원</p>
                    <p className="text-slate-500 text-[10px] font-sans">스타벅스 건물 3층 (주차장 완비)</p>
                  </div>
                  <span className="bg-blue-900 text-white text-[10px] px-4 py-2 rounded-full font-black font-sans">네이버 지도 →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 bg-white text-center border-t font-sans">
        <p className="text-slate-900 font-black text-sm mb-3 italic tracking-widest uppercase font-sans">Seoul Hans Dental Clinic</p>
        <p className="text-slate-400 text-[9px] font-bold leading-relaxed break-keep font-sans">
          대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | 사업자번호: 000-00-00000 <br />
          대표번호: 053-216-3636 | ⓒ 2026 Seoul Hans Dental. All rights reserved.
        </p>
      </footer>
    </div>
  );
}