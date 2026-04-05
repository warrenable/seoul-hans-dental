import type { Metadata } from "next";
import "./globals.css";

// 탭에 표시될 제목과 검색 엔진용 설명을 설정합니다.
export const metadata: Metadata = {
  title: "서울한스치과 | 서울대 출신 통합치의학 전문의 진료",
  description: "대구 동구 위치, 임상치과대학원 교정학 전공 주호성 원장의 정밀 진단 및 1:1 맞춤형 치과 진료 서비스입니다.",
  keywords: ["서울한스치과", "대구치과", "대구교정치과", "주호성원장", "통합치의학전문의"],
  icons: {
    icon: "/favicon.ico", // public 폴더의 파일을 가리킵니다.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}