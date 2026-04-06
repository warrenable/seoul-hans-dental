import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900">
      
      {/* 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/"><h1 className="text-xl font-black text-blue-900 italic cursor-pointer">SEOUL HANS</h1></Link>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
            <a href="#intro" className="hover:text-blue-600 transition-colors">의료진</a>
            <a href="#subject" className="hover:text-blue-600 transition-colors">진료과목</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">오시는길</a>
          </div>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700">실시간 예약</Link>
        </div>
      </nav>

      {/* 1. 히어로 섹션 */}
      <section className="pt-48 pb-24 px-6 text-center bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white text-blue-600 text-[10px] font-bold tracking-[0.2em] shadow-sm border border-blue-100">SEOUL NATIONAL UNIVERSITY ALUMNUS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight">대구 신천동, <br /><span className="text-blue-600">전문의의 정밀한 진단</span></h2>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl hover:scale-[1.02]">네이버 실시간 예약하기</Link>
        </div>
      </section>

      {/* 2. 의료진 소개 섹션 (New!) */}
      <section id="intro" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-slate-400">
            {/* 나중에 원장님 프로필 사진을 public/doctor.jpg로 넣고 아래 img 태그를 활성화하세요 */}
            {/* <img src="/doctor.jpg" alt="주호성 원장" className="w-full h-full object-cover" /> */}
            원장님 프로필 사진 영역
          </div>
          <div>
            <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Medical Director</h3>
            <h4 className="text-4xl font-bold text-slate-900 mb-6">주호성 대표원장</h4>
            <div className="space-y-4 text-slate-600 text-lg">
              <p className="font-bold text-slate-800 underline decoration-blue-200 decoration-4 underline-offset-8">보건복지부 인증 통합치의학 전문의</p>
              <ul className="space-y-2 text-base leading-relaxed">
                <li>• 서울대학교 치과대학 졸업</li>
                <li>• 경북대학교 임상치과대학원 교정학 전공</li>
                <li>• 대한치과교정학회 회원</li>
                <li>• 전) 서울 하얀치과 원장</li>
              </ul>
              <p className="pt-6 text-slate-500 italic text-base font-medium">"환자 한 분 한 분의 미소를 소중히 생각하며, <br/>정직하고 수준 높은 진료를 약속드립니다."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 진료 과목 섹션 (New!) */}
      <section id="subject" className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">전문 진료 안내</h3>
          <p className="text-slate-500">각 분야 전문성을 바탕으로 체계적인 진료를 제공합니다.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "임상 치과 교정", desc: "개인별 맞춤 진단을 통한 정밀한 치열 교정 솔루션" },
            { title: "통합 진료", desc: "충치 치료부터 고난도 수술까지 아우르는 통합적 케어" },
            { title: "디지털 임플란트", desc: "첨단 장비를 활용한 오차 없는 정교한 식립" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors flex items-center justify-center">
                <span className="text-blue-600 group-hover:text-white font-bold">{idx + 1}</span>
              </div>
              <h5 className="text-xl font-bold mb-4">{item.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 오시는 길 & 진료시간 */}
      <section id="location" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200">
              <img src="/map-capture.png" alt="서울한스치과 지도" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex justify-between items-center">
                  <div>
                    <p className="text-blue-900 font-bold text-sm">서울한스치과의원</p>
                    <p className="text-slate-500 text-[10px]">클릭 시 네이버 지도로 연결</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">길찾기</span>
                </div>
              </div>
            </Link>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-slate-800 font-extrabold text-xl mb-2 leading-tight">대구광역시 동구 동부로 30길 12 3층</p>
              <p className="text-slate-500 font-medium">스타벅스 건물 3층 / 건물 전용 주차장 완비</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col justify-between">
            <h4 className="text-2xl font-bold text-blue-900 mb-8 pb-4 border-b border-blue-50">진료 시간 안내</h4>
            <div className="space-y-6 text-slate-600">
              <div className="flex justify-between items-center py-1 font-semibold text-lg"><span>월 · 수 · 금</span><span>09:30 - 18:30</span></div>
              <div className="flex justify-between items-center py-4 bg-blue-50/50 -mx-4 px-6 rounded-2xl text-blue-700 font-bold text-lg italic tracking-tight"><span>화 · 목 (야간진료)</span><span>09:30 - 20:30</span></div>
              <div className="flex justify-between items-center py-1 font-semibold text-lg"><span>토요일 진료</span><span>09:30 - 14:00</span></div>
              <div className="flex justify-between items-center text-slate-400 font-medium pt-4"><span>점심 시간 (평일)</span><span>13:00 - 14:00</span></div>
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl text-sm text-slate-500 leading-relaxed border border-slate-100">
              <p>• 일요일 및 공휴일은 휴진입니다.</p>
              <p className="mt-2 text-slate-700 font-semibold italic text-base">문의: 053-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white text-center">
        <div className="max-w-6xl mx-auto text-slate-400 text-[10px] leading-relaxed">
          <p className="mb-2">대구광역시 동구 동부로 30길 12 3층 (대표: 주호성)</p>
          <p>© 2026 Seoul Hans Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}