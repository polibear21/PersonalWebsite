import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="description" content="David Zhao - Full Stack Developer Portfolio" />
        <meta name="keywords" content="developer, portfolio, react, next.js, typescript" />
        <meta name="author" content="David Zhao" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 