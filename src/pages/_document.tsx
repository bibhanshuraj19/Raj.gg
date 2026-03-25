import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Bibhanshu Raj — AI/ML Engineer. Building intelligent systems that think, speak, and learn." />
        <meta name="theme-color" content="#0e0e0e" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
