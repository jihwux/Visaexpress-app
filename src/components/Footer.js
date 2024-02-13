import Image from "next/image"; // 로고 이미지를 사용하려면 이 주석을 해제하세요.
// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white text-black-400 py-6">
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
        <div className="flex flex-wrap justify-start items-center pt-10 gap-2 sm:gap-4 md:gap-16">
          {/* 로고 이미지 예시입니다. 실제 경로로 교체해 주세요. */}
          <Image
            src="/f2.png"
            alt="로고"
            width={100}
            height={100}
            className="mb-2 sm:mb-4 md:mb-6"
          />
          {/* 각 Image에 적용된 className은 반응형 마진을 위한 것입니다. */}
          <Image
            src="/pngwinga.png"
            alt="로고"
            width={100}
            height={100}
            className="mb-2 sm:mb-4 md:mb-6"
          />
          <Image
            src="/f4.png"
            alt="로고"
            width={140}
            height={100}
            className="mb-2 sm:mb-4 md:mb-6"
          />
          <Image
            src="/f5.png"
            alt="로고"
            width={130}
            height={120}
            className="mb-2 sm:mb-4 md:mb-6"
          />
          <Image
            src="/f6.png"
            alt="로고"
            width={140}
            height={120}
            className="mb-2 sm:mb-4 md:mb-6"
          />

          <Image
            src="/pngegg.png"
            alt="로고"
            width={100}
            height={120}
            className="mb-2 sm:mb-4 md:mb-6"
          />
          <Image
            src="/f1.png"
            alt="로고"
            width={120}
            height={120}
            className="mb-2 sm:mb-4 md:mb-6"
          />
        </div>
      </div>
    </footer>
  );
}
