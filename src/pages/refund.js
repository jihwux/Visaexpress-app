import React from "react";
import Link from "next/link";

const RefundPolicyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 md:text-3xl">
          비자 익스프레스 환불 정책
        </h2>
        <div className="mt-6 text-gray-700">
          <p className="mb-2">
            비자 익스프레스(이하 '회사') 회원(이하 '회원')은 회사에 환불을
            요구할 수 있습니다. 환불은 회사가 안내하는 정책 및 방법에 따라
            진행됩니다.
          </p>
          <ul className="list-disc ml-5">
            <li>
              회원은 모든 서류가 회사에서 접수 전 전액환불을 요구할 수 있습니다.
            </li>
            <li>
              영사관 접수 전 (사전심사 통과 완료) 취소 시, 66,000원 제외 후
              환불됩니다.
            </li>
            <li>
              회원의 중국 비자 서류가 영사관에 도착 시 비용은 환불되지 않습니다.
            </li>
            <li>
              회원의 중국 비자 서류가 영사관에 도착해서 거절 시, 비용 환불되지
              않습니다.
            </li>
          </ul>
          <p className="mt-4">
            본사의 환불 금액 기준은 서비스 진행에 따라 환불 금액의 차이가 있을
            수 있습니다:
          </p>
          <ul className="list-disc ml-5 mb-2">
            <li>회사 접수 전: 전액 환불</li>
            <li>
              중국 비자 센터 사전 심사 후 및 영사관 도착 전: 66,000원 제외 후
              나머지 부분 환불
            </li>
            <li>중국 영사관 도착 후: 전액 환불 불가</li>
          </ul>
          <p className="mt-4">특정 국가 방문자에 대한 주의사항:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>
              터키, 레바논, 이스라엘, 시리아, 요르단, 이라크, 쿠웨이트, 바레인,
              이란, 사우디, 카타르, 예멘, 오만, 아프가니스탄을 방문한 적 있는
              분들은 다녀오신 후 2달 뒤 비자 접수 가능하며, 주의 국가에 다녀온
              기록이 많으신 분들은 비자 심사 지연 가능성이 있으므로 참고해주시기
              바랍니다.
            </li>
          </ul>
          <p className="mt-4">추가 서류 요청에 따른 주의사항:</p>
          <p className="mb-2">
            그 외 중국 영사관에서 추가 서류를 요청할 경우, 비자 발급 시간이
            지연되거나 비자 취소될 수 있으며, 이에 따른 비자 신청 취소나 환불이
            불가함을 알려 드립니다.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link href="/" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              홈으로
            </a>
          </Link>
          <Link href="/location" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded">
              고객 지원
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
