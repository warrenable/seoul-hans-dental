import Link from 'next/link';

export default function Home() {
  // 네이버 예약 주소 (실제 주소로 수정 가능)
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/YOUR_ID";
  
  // 네이버 지도 공유용 URL (원장님이 주신 링크를 버튼으로 연결)
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";

  // 지도 영역에 표시될 네이버 지도 iframe (대구 서울한스치과 좌표 기준)
  const MAP_IFRAME = `
    <iframe 
      src="https://m.map.naver.com/staticmap/v3/staticmap.naver?center=128.7061,35.8756&level=12&w=800&h=500&markers=type:default|size:mid|pos:128.7061%2035.8756&public_id=GpCzMuWN" 
      width="100%" 
      height="100%" 
      frameborder="0" 
      style="border:0;" 
      allowfullscreen>
    </iframe>
  `;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
      
      {/* 1. 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-black text-blue-900 tracking-tighter cursor-pointer">
              SEOUL HANS DENTAL
            </h1>
          </Link>
          <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-500">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">의료진 소개</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">진료 안내</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer text-blue-600">오시는 길</span>
          </div>
          <Link 
            href={NAVER_BOOKING_URL}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-100"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 메인 히어로 섹션 */}
      <section className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            Seoul National University Alumnus
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight">
            가까운 곳에서 만나는 <br />
            <span className="text-blue-600">서울대 수준의 정밀 진료</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            통합치의학 전문의 주호성 원장이 대구 동구 지역 주민의 <br />
            평생 치아 건강을 책임집니다.
          </p>
          <div className="flex justify-center">
            <Link 
              href={NAVER_BOOKING_URL}
              target="_blank"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              네이버 실시간 예약하기
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 지도 및 진료 정보 섹션 */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            
            {/* 왼쪽: 지도 카드 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">위치</span>
                오시는 길
              </h3>
              <div className="flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50 border-4 border-white bg-white relative">
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: MAP_IFRAME }}
                />
                {/* 지도 상세 보기 버튼 (모바일 배려) */}
                <Link 
                  href={NAVER_MAP_LINK}
                  target="_blank"
                  className="absolute bottom-6 right-6 bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-md border border-slate-100 hover:bg-slate-50"
                >
                  네이버 지도로 보기 →
                </Link>
              </div>
              <p className="text-slate-600 font-medium px-2">
                📍 대구광역시 동구 안심로 266 2층 (안심역 1번 출구 인근)
              </p>
            </div>

            {/* 오른쪽: 진료 정보 카드 */}
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h4 className="text-2xl font-bold text-blue-900 mb-8 border-b border-blue-50 pb-6">진료 시간 안내</h4>
              <div className="space-y-5 text-slate-600">
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="font-semibold text-slate-700 text-lg">월 · 수 · 금</span>
                  <span className="font-bold text-slate-900 text-lg">09:30 - 18:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-4 bg-blue-50/30 -mx-4 px-4 py-2 rounded-xl">
                  <span className="text-blue-700 font-bold text-lg italic">화 · 목 (야간진료)</span>
                  <span className="font-bold text-blue-700 text-lg">09:30 - 20:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="font-semibold text-slate-700 text-lg">토요일</span>
                  <span className="font-bold text-slate-900 text-lg">09:30 - 14:00</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 font-medium">
                  <span>점심 시간</span>
                  <span>13:00 - 14:00</span>
                </div>
                <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    * 일요일 및 공휴일은 휴진입니다.<br />
                    * 주차는 건물 뒤편 전용 주차장을 이용해 주세요.<br />
                    * <strong>화/목요일은 오후 8시 30분까지</strong> 야간 진료를 시행합니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h5 className="text-blue-900 font-black text-lg mb-2 italic">SEOUL HANS DENTAL</h5>
            <p className="text-slate-400 text-xs">
              대구 동구 서울한스치과 (대표: 주호성) | 사업자번호: 000-00-00000<br />
              © 2026 Seoul Hans Dental. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={NAVER_MAP_LINK} target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
              <span className="text-[10px] font-bold text-slate-600">지도</span>
            </Link>
            <Link href={NAVER_BOOKING_URL} target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
              <span className="text-[10px] font-bold text-slate-600">예약</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}