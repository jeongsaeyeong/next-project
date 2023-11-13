import "@/assets/scss/style.scss";

export const metadata = {
  title: 'Next.js를 이용한 포트폴리오 사이트 만들기',
  description: 'Nest.js를 이용한 사이트를 만들었습니다.',
  keywords: ['포트폴리오', 'next.js', '리액트', 'protfolio']
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
