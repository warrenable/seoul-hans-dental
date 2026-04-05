import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/YOUR_ID";
  const NAVER_MAP_LINK = "https://naver.me/GpCzMuWN"; // 원장님이 주신 단축 URL

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
      
      {/* 1. 상단 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-black text-blue-900 tracking-tighter cursor-pointer">SEOUL HANS</h1>
          </Link>
          <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-500">
            <span className="hover:text-blue-600 cursor-pointer">의료진</span>
            <span className="hover:text-blue-600 cursor-pointer">진료안내</span>
            <span className="hover:text-blue-600 cursor-pointer text-blue-600">오시는 길</span>
          </div>
          <Link href={NAVER_BOOKING_URL} target="_blank" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg">
            실시간 예약
          </Link>
        </div>
      </nav>

      {/* 2. 메인 히어로 섹션 */}
      <section className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em]">
            SEOUL NATIONAL UNIVERSITY ALUMNUS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.15]">
            대구 안심역 앞, <br />
            <span className="text-blue-600">정직하고 정밀한 진료</span>
          </h2>
          <Link href={NAVER_BOOKING_URL} target="_blank" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl">
            네이버 실시간 예약하기
          </Link>
        </div>
      </section>

      {/* 3. 지도 및 진료 정보 섹션 */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* 왼쪽: 지도 이미지 카드 (클릭 시 네이버 지도로 이동) */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-slate-900">오시는 길</h3>
              <Link 
                href={NAVER_MAP_LINK} 
                target="_blank" 
                className="group relative flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
              >
                {/* 지도 배경 이미지 (실제 지도로 보이게 하는 역할) */}
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://api.tiles.mapbox.com/v4/mapbox.streets/pin-s-l+3b82f6(128.7061,35.8756)/128.7061,35.8756,15/800x600.png?access_token=none" 
                    alt="서울한스치과 지도" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* 중앙 마커와 안내 문구 */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-