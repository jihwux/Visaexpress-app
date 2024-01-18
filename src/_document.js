// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
        {/* <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive"/>
    <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" strategy="beforeInteractive" /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
