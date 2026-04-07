import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900">
      
      {/* 1. 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/"><h1 className="text-xl font-black text-blue-900 italic cursor-pointer">SEOUL HANS</h1></Link>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
            <a href="#intro" className="hover:text-blue-600 transition-colors">의료진</a>
            <a href="#subject" className="hover:text-blue-600 transition-colors">진료과목</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">오시는길</a>
          </div>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">실시간 예약</Link>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (주말 진료 & 전문성 강조) */}
      <section className="pt-48 pb-24 px-6 text-center bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white text-blue-600 text-[10px] font-bold tracking-[0.2em] shadow-sm border border-blue-100 uppercase">
            SAT · SUN OPEN / SNU ALUMNUS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight">
            토·일 주말 진료, <br />
            <span className="text-blue-600 font-extrabold text-shadow-sm">서울대 출신 올인원 케어</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            임플란트부터 치아교정까지, 보건복지부 인증 전문의가 <br/>
            처음부터 끝까지 책임지는 통합 진료를 약속드립니다.
          </p>
          <Link href={NAVER_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]">네이버 실시간 예약하기</Link>
        </div>
      </section>

      {/* 3. 의료진 소개 (올인원 진료 철학 반영) */}
      <section id="intro" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <img 
                src="/doctor.jpg" 
                alt="주호성 대표원장" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800/f1f5f9/64748b?text=Doctor+Image"; }}
              />
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
               <p className="text-blue-800 font-bold text-center leading-relaxed">
                 "임플란트와 교정의 경계를 허무는 통합적 안목으로 <br/>
                 가장 효율적인 치료 계획을 제시합니다."
               </p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Medical Director</h3>
            <h4 className="text-4xl font-bold mb-8 text-slate-900 tracking-tight flex items-baseline gap-3">
              주호성 <span className="text-xl font-medium text-slate-500">대표원장</span>
            </h4>
            
            {/* 메인 약력 */}
            <div className="mb-10">
              <p className="text-blue-600 font-bold text-sm mb-4">학력 및 전문의</p>
              <ul className="space-y-3 text-slate-700 text-[16px]">
                <li className="flex items-center gap-2 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 서울대학교 졸업 / 치의학대학원 졸업</li>
                <li className="flex items-center gap-2 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 서울대학교 치의학대학원 석사</li>
                <li className="flex items-center gap-2 text-blue-700 font-bold italic"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 보건복지부 인증 통합치의학 전문의</li>
                <li className="flex items-center gap-2 font-semibold text-slate-900"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> 가톨릭대학교 임상치과대학원 치과교정학 전공</li>
              </ul>
            </div>

            {/* 인증 및 자문 */}
            <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-blue-600 font-bold text-xs mb-4">인증 및 연구 협력</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-2 font-bold">• 오스템 임플란트 연구 자문 치과</li>
                <li className="flex items-center gap-2">• 디지털 투명교정 매직얼라인 우수 사용 치과</li>
                <li className="flex items-center gap-2">• 투명교정 슈어스마일 인증 치과</li>
              </ul>
            </div>

            {/* 학회 활동 */}
            <div>
              <p className="text-slate-400 font-bold text-xs mb-4">학회 및 수료</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-500 text-sm">
                <li>• 대한 통합치과학회 정회원</li>
                <li>• 대한 치과보철학회 정회원</li>
                <li>• 대한 악안면임플란트학회 정회원</li>
                <li>• 오스템 AIC 임플란트 고급과정 수료</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 오시는 길 & 진료시간 (주말 진료 강조 버전) */}
      <section id="location" className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* 왼쪽: 오시는 길 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold">오시는 길</h3>
            <Link href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200">
              <img src="/map-capture.png" alt="지도" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex justify-between items-center">
                  <div>
                    <p className="text-blue-900 font-bold text-sm">서울한스치과의원</p>
                    <p className="text-slate-500 text-[10px]">스타벅스 건물 3층</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] px-4 py-1.5 rounded-full font-bold shadow-md shadow-blue-100">길찾기</span>
                </div>
              </div>
            </Link>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-slate-800 font-extrabold text-xl mb-2">대구광역시 동구 동부로 30길 12 3층</p>
              <p className="text-slate-500 font-medium">건물 내 전용 주차장 완비</p>
            </div>
          </div>

          {/* 오른쪽: 진료 시간 (주말 진료 강조) */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-50 pb-4 mb-8">
                <h4 className="text-2xl font-bold text-blue-900">진료 시간 안내</h4>
                <div className="mt-2 md:mt-0 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold">목요일 휴진</div>
              </div>
              
              <div className="space-y-6 text-slate-600">
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-lg italic text-slate-400">월 · 화 · 수 · 금</span>
                  <span className="font-bold text-slate-900 text-lg tracking-tight">10:00 - 17:00</span>
                </div>

                <div className="group bg-blue-600 p-6 rounded-3xl text-white shadow-xl shadow-blue-100 transition-all hover:scale-[1.02]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-extrabold text-xl">토 · 일 (주말 진료)</span>
                    <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded font-bold">OPEN</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-blue-100 text-sm">일요일도 늦게까지 진료</span>
                    <span className="font-black text-3xl">10:00 - 16:00</span>
                  </div>
                </div>

                <p className="text-center text-slate-400 text-xs font-medium pt-4">※ 목요일 / 공휴일은 휴진입니다.</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex justify-between items-center group cursor-pointer hover:bg-blue-600 transition-all">
              <div>
                <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-1">Reservation</p>
                <p className="text-2xl font-black tracking-tight group-hover:scale-105 transition-transform">053-216-3636</p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className="text-xl">📞</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-400 text-[10px] leading-relaxed">대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) | TEL: 053-216-3636 <br />© 2026 Seoul Hans Dental. All rights reserved.</p>
      </footer>
    </div>
  );
}