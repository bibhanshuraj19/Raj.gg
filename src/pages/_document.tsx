import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Bibhanshu Raj — AI/ML Engineer. Building intelligent systems that think, speak, and learn."
        />
        <meta name="theme-color" content="#060606" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-surface text-on-surface">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
