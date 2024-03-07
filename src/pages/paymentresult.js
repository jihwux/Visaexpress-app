import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PaymentResultPage = () => {
  const router = useRouter();
  const { imp_success, imp_uid } = router.query;
  const [visaFormData, setVisaFormData] = useState();
  const [mobileData, setMobileData] = useState();

  // 로컬 스토리지에서 visaFormData를 불러옵니다.
  useEffect(() => {
    const savedVisaFormData = localStorage.getItem("visaFormData");
    if (savedVisaFormData) {
      const parsedVisaFormData = JSON.parse(savedVisaFormData);
      setVisaFormData(parsedVisaFormData);
    }
  }, []);
  useEffect(() => {
    const savedMobileData = localStorage.getItem("mobileData");
    if (savedMobileData) {
      const parsedMobileData = JSON.parse(savedMobileData);
      setMobileData(parsedMobileData);
    }
  }, []);

  // router와 visaFormData가 준비된 상태에서만 실행
  // router와 visaFormData가 준비된 상태에서만 실행
  useEffect(() => {
    if (router.isReady && mobileData) {
      if (imp_success === "true") {
        // 성공 시 success 쿼리 파라미터를 추가합니다.
        const queryString = new URLSearchParams({
          ...mobileData,
          success: "true",
        }).toString();
        router.push(`/success?${queryString}`);
      } else if (imp_success === "false") {
        // 실패 시 fail 쿼리 파라미터를 추가합니다.
        const queryString = new URLSearchParams({
          ...mobileData,
          fail: "true",
        }).toString();
        router.push(`/fail?${queryString}`);
      } else {
        // imp_success 없거나 null인 경우 홈으로 리다이렉트합니다.
        console.log("ad");
        // router.push("/");
      }
    }
  }, [router.isReady, mobileData]);

  useEffect(() => {
    if (router.isReady && visaFormData && imp_success) {
      const sendPaymentSuccess = async () => {
        try {
          console.log("visaFormData before sending:", visaFormData); // 전송 전 데이터 확인
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              visaFormData,
              imp_success: imp_success,
            }),
          });
          const result = await response.json();
          if (response.ok && result.success) {
            // 결제 검증 성공 시, 성공 페이지로 리디렉션
            const queryString = new URLSearchParams(visaFormData).toString();
            router.push(`/success?${queryString}`);
          } else {
            // 결제 검증 실패 시, 실패 페이지로 리디렉션
            router.push("/fail");
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          router.push("/fail"); // 에러 발생 시, 실패 페이지로 리디렉션
        }
      };

      sendPaymentSuccess();
    }
  }, [router.isReady, visaFormData, imp_success, imp_uid]);

  // 리디렉션 대기 중 사용자에게 보여줄 UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center md:text-3xl">
          결제 처리 중...
        </h2>
        <p className="text-center mt-4">잠시만 기다려 주세요.</p>
      </div>
    </div>
  );
};

export default PaymentResultPage;
// PaymentResultPage.js
