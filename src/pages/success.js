import React from "react";
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옵니다.

const PaymentSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 md:text-3xl">
          결제 완료
        </h2>
        <div
          className="mt-6 p-4 mb-6 bg-red-100 border-l-4 border-red-500 text-red-700"
          role="alert"
        >
          <p className="font-bold">성공!</p>
          <p>결제가 성공적으로 완료되었습니다.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">결제 내역:</h3>
          {/* 결제 내역 정보 표시 */}
          <p className="text-sm md:text-base">상품 이름: XXX</p>
          <p className="text-sm md:text-base">결제 금액: ₩0000</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          {/* <Link href="/order-details" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              주문 상세 보기
            </a>
          </Link> */}
          <Link href="/" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              홈으로
            </a>
          </Link>
          <Link href="/location" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded">
              위치 보기
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
