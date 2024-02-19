// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import Layout from "@/components/Layout";
// import Header from "@/components/Header";
// import Footer from "@/components/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        <title>비자익스프레스</title>
        <link
          rel="icon"
          href="https://modo-phinf.pstatic.net/20230425_180/16824135831875xEty_PNG/mosaf0vGXi.png"
        />
        <meta
          name="naver-site-verification"
          content="c7113e8f76ec3214cb485bc70b25d9708878e8ca"
        />
        <meta
          name="google-site-verification"
          content="NQWDsuv5lGlukn4F4rUJ_UqwWsoCvCkh6-TzDtl51EM"
        />
        <meta
          name="description"
          content="중국 비자 준비는 비자익스프레스에서, 상담과 필요 서류, 가격 조회를 한 번에 해결하세요.
"
        />
        <meta
          name="keywords"
          content="비자, 신청, 상담, 조회, 가격, 서류, 비자익스프레스"
        />
        <meta name="author" content="비자익스프레스" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://visaexpress.co.kr" />
        {/* SNS 공유시 사용되는 메타 태그 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비자익스프레스" />
        <meta
          property="og:description"
          content="편리한 중국 비자 신청 서비스를 이용해보세요."
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://visaexpress.co.kr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="비자익스프레스" />
        <meta
          name="twitter:description"
          content="편리한 비자 신청 서비스를 이용해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/images/twitter-image.jpg"
        />
      </Head>
      <Layout>
        <Component {...pageProps} /> <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
// pages/_do
