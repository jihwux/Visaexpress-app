// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="text-sm">
          <p>사업자: 313-36-01073</p>
          <p>
            주소: 서울특별시 영등포구 경인로77길49, 109동 상가 2층
            201-4호(문래동4가 리버뷰 신안인스빌)
          </p>
          <p>대표자: 김성찬</p>
          <p>
            대표전화:
            <a
              href="tel:070-8028-3829"
              className="text-blue-400 hover:text-blue-300"
            >
              &nbsp;070-8028-3829
            </a>
          </p>
          <p>
            Email:
            <a
              href="mailto:visaexpress2183@naver.com"
              className="text-blue-400 hover:text-blue-300"
            >
              &nbsp;visaexpress2183@naver.com
            </a>
          </p>
          <p>운영시간: AM 9:00 - PM 6:00 (토, 일, 공휴일 휴무)</p>
        </div>
      </div>
    </footer>
  );
}
