// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-sm text-left">
          <div>
            <p>
              {" "}
              상호명: 비자익스프레스 &nbsp;&nbsp; 사업자등록번호:
              313-36-01073&nbsp;&nbsp;&nbsp; 통신판매업신고번호:
              제2023-서울영등포-1087호
            </p>

            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              주소: 서울특별시 영등포구 경인로77길49, 109동 상가 2층
              201-4호(문래동4가 리버뷰 신안인스빌)
            </p>
            <p>
              대표자: JIN XINGCAN &nbsp;&nbsp;&nbsp;대표전화:
              <a
                href="tel:070-8028-3829"
                className="text-blue-400 hover:text-blue-300"
              >
                070-8028-3829{" "}
              </a>{" "}
            </p>
            <p></p>
            <p>
              Email:
              <a
                href="mailto:visaexpress2183@naver.com"
                className="text-blue-400 hover:text-blue-300"
              >
                visaexpress2183@naver.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
