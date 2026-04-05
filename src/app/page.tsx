export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. 플로팅 헤더 (유리알 효과) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black text-blue-900 tracking-tighter">SEOUL HANS</h1>
          <div className="hidden md:flex space-x-12 text-sm font-medium text-gray-500">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">진료안내</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">의료진</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">상담/예약</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-200">
            빠른 예약
          </button>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (여백 중심) */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
            Expert Dental Care
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
            가장 앞선 기술로, <br />
            <span className="text-blue-600">가장 편안한 진료</span>를 제공합니다.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            서울대학교 치과대학 출신 전문의의 정밀한 진단과 <br />
            첨단 장비를 활용한 1:1 맞춤형 치료 시스템입니다.
          </p>
        </div>
      </section>

      {/* 3. 진료 과목 (구획 없는 깔끔한 카드) */}
      <section className="bg-slate-50/50 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "임상치과교정", desc: "정밀 분석을 통한 자연스러운 치열 교정", color: "blue" },
              { title: "통합치의학", desc: "분야별 협진이 필요 없는 통합 솔루션", color: "blue" },
              { title: "디지털 임플란트", desc: "정교한 식립으로 얻는 건강한 제3의 치아", color: "blue" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="h-0.5 w-10 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 푸터 */}
      <footer className="py-20 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">대구광역시 동구 서울한스치과 (대표: 주호성)</p>
        <p className="text-slate-300 text-xs mt-2">© 2026 Seoul Hans Dental. All rights reserved.</p>
      </footer>
    </div>
  );
}