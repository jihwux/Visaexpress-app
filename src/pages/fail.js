import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PaymentFailPage = () => {
  const router = useRouter();
  const { error } = router.query;

  // useEffect(() => {
  //   // 결제 과정을 거치지 않고 바로 페이지에 접근했다면 경고창 표시 후 홈으로 리다이렉트
  //   if (!error) {
  //     alert("비자 신청에 실패했습니다. 확인 후 다시 시도해주세요.");
  //     router.push("/visa");
  //   }
  // }, [error, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 md:text-3xl">
          결제 실패
        </h2>
        <div
          className="mt-6 p-4 mb-6 bg-red-100 border-l-4 border-red-500 text-red-700"
          role="alert"
        >
          <p className="font-bold">실패!</p>
          <p>결제 처리에 실패하였습니다. 다시 시도해 주세요.</p>

          {/* 에러 메시지 표시 */}
          {error && (
            <div className="mt-4 text-sm md:text-base text-red-700">
              <p>실패 원인: {decodeURIComponent(error)}</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link href="/" legacyBehavior>
            <a className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              홈으로 돌아가기
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailPage;
