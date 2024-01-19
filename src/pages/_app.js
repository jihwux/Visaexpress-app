// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import Layout from "@/components/Layout";
// import Header from "@/components/Header";
// import Footer from "@/components/footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>        <title>비자익스프레스</title>
        <link
          rel="icon"
          href="https://modo-phinf.pstatic.net/20230425_180/16824135831875xEty_PNG/mosaf0vGXi.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
// pages/_do 