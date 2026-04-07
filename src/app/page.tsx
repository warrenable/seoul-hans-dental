import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  // 원장님 블로그 메인 주소
  const BLOG_URL = "https://blog.naver.com/원장님아이디";

  // 블로그 게시글 데이터 (여기에 원장님 블로그 글 제목과 링크를 넣으세요)
  const blogPosts = [
    {
      title: "과잉진료 없는 정직한 치과를 찾는 법",
      date: "2026.03.11",
      link: "https://blog.naver.com/seoulhansdental/224238671886",
      category: "진료철학"
    },
    {
      title: "안심역 교정치과, 왜 전문의 진단이 중요할까요?",
      date: "2026.03.05",
      link: "https://blog.naver.com/seoulhansdental/224227971814",
      category: "치아교정"
    },
    {
      title: "서울한스치과 3월 진료 일정 안내",
      date: "2026.02.28",
      link: "https://blog.naver.com/seoulhansdental/224227971814",
      category: "공지사항"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/"><h1 className="text-xl font-black text-blue-900 italic cursor-pointer">SEOUL HANS</h1></Link>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
            <a href="#intro" className="hover:text-blue-600 transition-colors">의료진</a>
            <a href="#subject" className="hover:text-blue-600 transition-colors">진료과목</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">진료일지</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">오시는길</a>
          </div>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700">실시간 예약</Link>
        </div>
      </nav>

      {/* 1. 히어로 섹션 */}
      <section className="pt-48 pb-24 px-6 text-center bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white text-blue-600 text-[10px] font-bold tracking-[0.2em] shadow-sm border border-blue-100 uppercase">Seoul National University Alumnus</div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15]">대구 신천동, <br /><span className="text-blue-600">품격 있는 정밀 진료</span></h2>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl hover:scale-[1.02]">네이버 실시간 예약하기</Link>
        </div>
      </section>

      {/* 2. 의료진 소개 */}
      <section id="intro" className="py-32 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[3/4] bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 shadow-inner italic">Doctor Image Area</div>
        <div>
          <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Medical Director</h3>
          <h4 className="text-4xl font-bold mb-6 italic text-slate-800 tracking-tight text-shadow-sm">주호성 대표원장</h4>
          <div className="space-y-4 text-slate-600">
            <p className="font-bold text-slate-800 underline decoration-blue-200 decoration-4 underline-offset-8">보건복지부 인증 통합치의학 전문의</p>
            <ul className="space-y-2 text-base">
              <li>• 서울대학교 치과대학 졸업</li>
              <li>• 경북대학교 임상치과대학원 교정학 전공</li>
              <li>• 대한치과교정학회 회원</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 진료 과목 카드 */}
      <section id="subject" className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "임상 치과 교정", d: "전공의의 정밀 진단을 통한 개인별 맞춤 교정" },
            { t: "통합 진료", d: "치과 전 분야를 아우르는 전문적이고 정직한 케어" },
            { t: "디지털 임플란트", d: "첨단 장비를 이용한 안전하고 정확한 식립" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <h5 className="text-xl font-bold mb-4 text-slate-800 tracking-tight">{item.t}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 블로그 섹션 (New!) */}
      <section id="blog" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">원장님 진료 일지</h3>
              <p className="text-slate-500 font-medium">서울한스치과의 생생한 치료 이야기를 전해드립니다.</p>
            </div>
            <Link href={BLOG_URL} target="_blank" className="text-blue-600 font-bold text-sm hover:underline underline-offset-4 decoration-2">블로그 전체보기 →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.link} target="_blank" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl">
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 italic group-hover:bg-blue-50 transition-colors font-bold">Blog Post Image</div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-4">{post.category}</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-4 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h4>
                  <p className="text-slate-400 text-xs">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 오시는 길 & 진료시간 */}
      <section id="location" className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200">
              <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex justify-between items-center transform group-hover:-translate-y-1 transition-transform">
                  <div>
                    <p className="text-blue-900 font-bold text-sm">서울한스치과의원</p>
                    <p className="text-slate-500 text-[10px]">클릭 시 네이버 지도로 연결</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">길찾기</span>
                </div>
              </div>
            </Link>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-slate-800 font-extrabold text-xl mb-2">대구광역시 동구 동부로 30길 12 3층</p>
              <p className="text-slate-500 font-medium">스타벅스 건물 3층 / 건물 전용 주차장 완비</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col justify-between overflow-hidden relative">
            <h4 className="text-2xl font-bold text-blue-900 mb-8 pb-4 border-b border-blue-50">진료 시간 안내</h4>
            <div className="space-y-6 text-slate-600">
              <div className="flex justify-between items-center py-1 font-semibold text-lg"><span>월 · 수 · 금</span><span className="font-bold text-slate-900">09:30 - 18:30</span></div>
              <div className="flex justify-between items-center py-4 bg-blue-50/50 -mx-4 px-6 rounded-2xl text-blue-700 font-bold text-lg italic tracking-tight"><span>화 · 목 (야간진료)</span><span>09:30 - 20:30</span></div>
              <div className="flex justify-between items-center py-1 font-semibold text-lg"><span>토요일 진료</span><span className="font-bold text-slate-900">09:30 - 14:00</span></div>
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl text-[13px] text-slate-500 leading-relaxed">
              <p>• 일요일 및 공휴일은 휴진입니다.</p>
              <p className="mt-2 text-slate-700 font-semibold italic text-base">문의: 053-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-400 text-[10px] leading-relaxed">대구광역시 동구 동부로 30길 12 3층 (대표: 주호성)<br />© 2026 Seoul Hans Dental. All rights reserved.</p>
      </footer>
    </div>
  );
}