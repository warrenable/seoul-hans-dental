import Link from 'next/link';

export default function Home() {
  // 1. 변수 선언 (함수 바로 아래에 위치해야 합니다)
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/YOUR_ID";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
      
      {/* 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-black text-blue-900 tracking-tighter cursor-pointer">SEOUL HANS</h1>
          </Link>
          <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-500">
            <span className="hover:text-blue-600 cursor-pointer text-blue-600">홈</span>
            <span className="hover:text-blue-600 cursor-pointer">진료안내</span>
            <span className="hover:text-blue-600 cursor-pointer">오시는 길</span>
          </div>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg"
          >
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em]">
            SEOUL NATIONAL UNIVERSITY ALUMNUS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15]">
            대구 안심역 앞, <br />
            <span className="text-blue-600">정직하고 정밀한 진료</span>
          </h2>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl"
          >
            네이버 실시간 예약하기
          </Link>
        </div>
      </section>

      {/* 지도 및 진료 정보 섹션 */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* 왼쪽: 지도 안내 카드 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-slate-900 font-sans">오시는 길</h3>
              <Link 
                href={NAVER_MAP_LINK} 
                target="_blank" 
                className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-blue-50"
              >
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div className="space-y-4">
                    <div className="text-5xl">📍</div>
                    <p className="text-blue-900 font-bold text-xl leading-snug">
                      네이버 지도로 <br /> 위치 확인하기
                    </p>
                    <p className="text-blue-600 text-sm font-medium bg-white/80 px-4 py-2 rounded-full inline-block">
                      클릭 시 지도로 이동합니다
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors" />
              </Link>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-800 font-bold text-lg mb-1">대구광역시 동구 안심로 266 2층</p>
                <p className="text-slate-500 text-sm">안심역 1번 출구 도보 5분 / 건물 뒤편 전용 주차장</p>
              </div>
            </div>

            {/* 오른쪽: 진료 시간 정보 */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-blue-900 mb-8 pb-4 border-b border-blue-50">진료 시간 안내</h4>
                <div className="space-y-5 text-slate-600">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">월 · 수 · 금</span>
                    <span className="font-bold text-slate-900">09:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-blue-50/50 -mx-4 px-4 rounded-xl">
                    <span className="text-blue-700 font-bold">화 · 목 (야간진료)</span>
                    <span className="font-bold text-blue-700">09:30 - 20:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">토요일 진료</span>
                    <span className="font-bold text-slate-900">09:30 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 text-sm mt-4">
                    <span>점심 시간</span>
                    <span>13:00 - 14:00</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl text-sm text-slate-500 leading-relaxed">
                <p>* 일요일 및 공휴일은 휴진입니다.</p>
                <p className="mt-2 font-medium text-slate-700">문의: 053-XXX-XXXX</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>대구광역시 동구 서울한스치과 (대표: 주호성)</p>
          <p>© 2026 Seoul Hans Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}