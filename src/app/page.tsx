import Link from 'next/link';

export default function Home() {
  const NAVER_BOOKING_URL = "https://booking.naver.com/booking/13/bizes/804953";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
      
      {/* 1. 상단 네비게이션 (Fixed Layout) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-black text-blue-900 tracking-tighter cursor-pointer">
              SEOUL HANS DENTAL
            </h1>
          </Link>
          <div className="hidden md:flex space-x-12 text-sm font-medium text-gray-500">
            <span className="hover:text-blue-600 transition-colors cursor-pointer text-blue-600 font-bold">홈</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">진료안내</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">의료진</span>
          </div>
          {/* 상단바 예약 버튼 */}
          <Link 
            href={NAVER_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
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
            전문의의 정밀한 진단, <br />
            <span className="text-blue-600">당신의 미소를 책임집니다.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            서울대학교 치과대학 졸업, 통합치의학 전문의 주호성 원장이 <br />
            직접 진단하고 1:1 맞춤형 진료를 약속드립니다.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* 메인 예약 버튼 (강조) */}
            <Link 
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              네이버 실시간 예약하기
            </Link>
            <button className="bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              진료 시간 안내
            </button>
          </div>
        </div>
      </section>

      {/* 3. 진료 과목 섹션 */}
      <section className="bg-slate-50/50 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <div className="h-0.5 w-10 bg-blue-600 mb-8 group-hover:w-full transition-all duration-500" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">임상치과교정</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                임상치과대학원 전공의 정밀한 분석을 통한 개인별 맞춤형 치열 교정 솔루션
              </p>
            </div>
            <div className="group">
              <div className="h-0.5 w-10 bg-blue-600 mb-8 group-hover:w-full transition-all duration-500" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">통합치의학</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                치과 전 분야를 아우르는 통합적 진단으로 불필요한 과잉 진료를 배제합니다.
              </p>
            </div>
            <div className="group">
              <div className="h-0.5 w-10 bg-blue-600 mb-8 group-hover:w-full transition-all duration-500" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">디지털 임플란트</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                3D 첨단 장비를 활용한 정교한 식립으로 자연치아의 건강함을 되찾아드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 푸터 영역 */}
      <footer className="py-24 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-blue-900 font-black text-lg mb-2">SEOUL HANS DENTAL</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              대구광역시 동구 서울한스치과 (대표: 주호성) <br />
              사업자등록번호: 000-00-00000 | 전화: 053-000-0000
            </p>
          </div>
          <div className="text-slate-300 text-xs">
            © 2026 Seoul Hans Dental. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}