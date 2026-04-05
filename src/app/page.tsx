import Link from 'next/link';

export default function Home() {
  // 1. 설정값 (원장님 정보에 맞춰 수정됨)
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/YOUR_ID";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN";
  
  // 서울한스치과 실제 좌표 (대구 동구 신천동 근처)
  const LAT = "35.8756";
  const LNG = "128.6273";
  
  // 네이버 정적 지도 이미지 URL (연결 거부 에러가 나지 않는 방식)
  const STATIC_MAP_IMAGE = `https://navercp.api.ncloud.com/map-static/v2/raster-preview?w=800&h=500&center=${LNG},${LAT}&level=16&markers=type:d|size:mid|pos:${LNG}%20${LAT}|color:blue&public_id=GpCzMuWN`;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
      
      {/* 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-black text-blue-900 tracking-tighter cursor-pointer italic">SEOUL HANS</h1>
          </Link>
          <Link 
            href={NAVER_BOOKING_URL} 
            target="_blank" 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg hover:bg-blue-700 transition-all"
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
            대구 신천동, <br />
            <span className="text-blue-600">품격 있는 정밀 진료</span>
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

      {/* 지도 및 진료 정보 섹션 (수정된 주소 반영) */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* 왼쪽: 시각화된 지도 카드 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-slate-900">오시는 길</h3>
              <Link 
                href={NAVER_MAP_LINK} 
                target="_blank" 
                className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200"
              >
                {/* 실제 지도로 보이는 이미지 영역 */}
                <img 
                  src={STATIC_MAP_IMAGE} 
                  alt="서울한스치과 지도" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex justify-between items-center">
                    <div>
                      <p className="text-blue-900 font-bold text-sm">서울한스치과의원</p>
                      <p className="text-slate-500 text-xs">클릭하면 길찾기로 연결됩니다</p>
                    </div>
                    <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">MAP</span>
                  </div>
                </div>
              </Link>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-widest">Address</p>
                <p className="text-slate-800 font-extrabold text-xl mb-2">대구광역시 동구 동부로 30길 12 3층</p>
                <p className="text-slate-500 font-medium">스타벅스 건물 3층 / 건물 전용 주차장 완비</p>
              </div>
            </div>

            {/* 오른쪽: 진료 시간 정보 */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-blue-900 mb-8 pb-4 border-b border-blue-50 text-center lg:text-left">진료 시간 안내</h4>
                <div className="space-y-6 text-slate-600">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-lg">월 · 수 · 금</span>
                    <span className="font-bold text-slate-900 text-lg">09:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-blue-50/50 -mx-4 px-6 rounded-2xl">
                    <span className="text-blue-700 font-bold text-lg italic text-shadow-sm">화 · 목 (야간진료)</span>
                    <span className="font-bold text-blue-700 text-lg">09:30 - 20:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-lg">토요일 진료</span>
                    <span className="font-bold text-slate-900 text-lg">09:30 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 font-medium pt-4">
                    <span>점심 시간 (평일)</span>
                    <span>13:00 - 14:00</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl text-sm text-slate-500 leading-relaxed border border-slate-100">
                <p>• 일요일 및 공휴일은 휴진입니다.</p>
                <p className="mt-2 text-slate-700 font-semibold">병원문의: 053-XXX-XXXX</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h5 className="text-blue-900 font-black text-lg mb-1 italic">SEOUL HANS DENTAL</h5>
            <p className="text-slate-400 text-[10px] leading-relaxed">
              대구광역시 동구 동부로 30길 12 3층 (대표: 주호성) <br />
              © 2026 Seoul Hans Dental. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
             <Link href={NAVER_MAP_LINK} target="_blank" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">NAVER MAP</Link>
             <Link href={NAVER_BOOKING_URL} target="_blank" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">BOOKING</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}