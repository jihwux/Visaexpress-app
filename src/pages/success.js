import React from "react";
import Link from "next/link"; // Next.js의 Link 컴포넌트를 가져옵니다.
import { useRouter } from "next/router";

const PaymentSuccessPage = () => {
  const router = useRouter();

  const { name, amount, stayDuration, visaDuration, serviceType } =
    router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 md:text-3xl">
          결제 완료
        </h2>
        <div
          className="mt-6 p-4 mb-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700"
          role="alert"
        >
          <p className="font-bold">성공!</p>
          <p>결제가 성공적으로 완료되었습니다.</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">결제 내역:</h3>
          <p>비자 타입: {name}</p>
          <p>체류 기간: {stayDuration}</p>
          <p>비자 기간: {visaDuration}</p>
          <p>서비스 유형: {serviceType}</p>
          <p>결제 금액: {amount}</p>
          <p>이런식으로 모든 신청정보가 나오게 됩니다.</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link href="/" legacyBehavior>
            <a className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              홈으로
            </a>
          </Link>
          <Link href="/location" legacyBehavior>
            <a className="w-full sm:w-auto bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded">
              위치 보기
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
