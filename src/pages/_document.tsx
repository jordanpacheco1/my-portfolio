import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Site pessoal de Jordan Pacheco Borges"
        />
        <meta
          name="keywords"
          content="jordan, pacheco, borges, portfolio, site, pessoal, jordan pacheco borges"
        />
        <meta
          name="google-site-verification"
          content="MRAZQ0ZgMdwoPbs3wue4cLt7Ko9iOyggke5hC-3U2KI"
        />
        <meta name="author" content="Jordan Pacheco Borges" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="copyright" content="&copy; 2022 Jordan Pacheco Borges" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Space+Mono&family=Rock+Salt&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Mono&family=Rock+Salt&display=swap"
          />
        </noscript>
      </Head>
      <body className="antialiased scrollbar-thin scrollbar-track-transparent dark:bg-slate-900 text-2xl dark:text-slate-400 scrollbar-thumb-white font-SpaceMono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
