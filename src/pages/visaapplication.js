import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VisaForm1 from "@/components/VisaForm1";
import VisaForm2 from "@/components/VisaForm2";
import VisaForm3 from "@/components/VisaForm3";
import VisaForm4 from "@/components/VisaForm4";
import VisaForm5 from "@/components/VisaForm5";

import VisaForm6 from "@/components/VisaForm6";
import { initiatePayment } from "@/components/Payment";

const VisaApplicationForm = () => {
  const router = useRouter();

  const [params, setParams] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const agreements = JSON.parse(localStorage.getItem("agreements") || "{}");
    const allAgreed = Object.values(agreements).every((value) => value);

    if (!allAgreed) {
      router.push("/agree");
    } else {
      console.log("All agreements have been agreed."); // 모든 약관 동의 로그
    }
  }, [router]);
  useEffect(() => {
    console.log(visaFormData.form1.calculatedPrice);
    console.log(visaFormData.form6);

    const requiredLabels = document.querySelectorAll(".required-label");

    requiredLabels.forEach((label) => {
      let nextElement = label.nextElementSibling;

      // fieldset 요소의 경우 첫 번째 radio 버튼을 찾습니다.
      if (nextElement && nextElement.tagName === "FIELDSET") {
        const firstRadio = nextElement.querySelector('input[type="radio"]');
        if (firstRadio) {
          firstRadio.setAttribute("required", true);
        }
      }

      // 일반 입력 요소의 경우 바로 다음 요소에 required 속성을 추가합니다.
      else if (
        nextElement &&
        (nextElement.tagName === "INPUT" ||
          nextElement.tagName === "SELECT" ||
          nextElement.tagName === "TEXTAREA")
      ) {
        nextElement.setAttribute("required", true);
      }
    });
  }, []);
  const [visaFormData, setVisaFormData] = useState({
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5: {},
    form6: {},
  });

  useEffect(() => {
    // visaFormData.form1.calculatedPrice가 유효한 숫자인지 확인합니다.
    if (visaFormData.form1 && !isNaN(visaFormData.form1.calculatedPrice)) {
      setParams((currentParams) => ({
        ...currentParams,
        amount: visaFormData.form1.calculatedPrice, // amount를 업데이트합니다.
      }));
    }
  }, [visaFormData.form1]); // visaFormData.form1이 변경될 때마다 실행됩니다.

  // ... onClickPayment 함수와 handleSubmit 함수 ...

  const handleVisaFormChange = (formId, data) => {
    setVisaFormData((prevData) => ({
      ...prevData,
      [formId]: data,
    }));
  };

  const IMP_UID = "imp21001741"; // 실제 가맹점 식별코드로 변경해야 함
  const [paymentParams, setPaymentParams] = useState({
    pg: "uplus.tlgdacomxpay",
    // pg: "uplus", // PG사 코드표 참조

    pay_method: "card",
    name: "테스트 주문",
    merchant_uid: `merchant_${Date.now()}`,
    amount: 100,
    // escrow: false,
    // tax_free: 1,
    buyer_name: "홍길동",
    buyer_email: "buyer@example.com",
    buyer_tel: "02-1670-5176",
    buyer_addr: "성수이로 20길 16",
    buyer_postcode: "04783",
    // m_redirect_url: "/success" // 필요시 주석 해제 후 사용
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!isFormDataValid(visaFormData)) {
    //   alert("모든 내용을 입력해주세요.");
    //   return;
    // }
    try {
      const result = await initiatePayment(IMP_UID, paymentParams);
      console.log("결제 및 검증 성공: ", result.message);
      // router.push("/success"); // 성공 시 페이지 이동
    } catch (error) {
      console.error("결제 또는 검증 실패: ", error.message);
    }

    // const response = await fetch("/api/sendEmail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(visaFormData), // 전체 폼 데이터를 JSON으로 변환
    // });

    // if (!response.ok) {
    //   console.error("Failed to send email");
    //   const errorData = await response.text(); // 또는 response.json() 이 될 수도 있습니다.
    //   console.error("Error response from server:", errorData);
    //   // 오류 메시지 표시 또는 추가 액션
    // } else {
    //   console.log("Email sent successfully");
    //   alert("Email sent successfully");
    // }
    // console.log(visaFormData);
    // API 라우트에 전체 폼 데이터를 POST 요청으로 전송합니다.
  };
  const isFormDataValid = (formData) => {
    for (const key of Object.keys(formData)) {
      // formData의 각 섹션이 빈 객체인지 확인합니다.
      if (Object.keys(formData[key]).length === 0) {
        return false; // 빈 객체가 있으면 false를 반환합니다.
      }
    }
    return true;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto my-20 p-6 bg-white shadow-md rounded-lg"
      >
        {/* 폼 내용 s*/}
        {/* 폼 내용 */}
        {/* 예시: 비자 종류 선택 필드 */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          중국 비자 신청서
        </h2>

        {/* <VisaForm1 formDetails={formDetails} handleChange={handleChange} /> */}
        <VisaForm1
          handleChange={(data) => handleVisaFormChange("form1", data)}
        />
        <VisaForm2
          onFormDataChange={(data) => handleVisaFormChange("form2", data)}
        />
        <VisaForm3
          onFormDataChange={(data) => handleVisaFormChange("form3", data)}
        />
        <VisaForm4
          onFormDataChange={(data) => handleVisaFormChange("form4", data)}
        />
        <VisaForm5
          onFormDataChange={(data) => handleVisaFormChange("form5", data)}
        />
        <VisaForm6
          onFormDataChange={(data) => handleVisaFormChange("form6", data)}
        />

        {/* 직장명 */}
        {/* ... 동일한 패턴으로 직장명, 직위, 상사 이름, 상사 연락처, 직장 주소 필드 추가 ... */}
        {/* 예시: 직장명 */}

        <div className="mt-5 p-4 rounded shadow-lg text-lg">
          <div className="font-semibold mb-2">비용 안내:</div>
          <div className="flex justify-between mb-1">
            <span>발급 비용:</span>
            <span className="font-bold">
              {visaFormData?.form1?.calculatedPrice?.toLocaleString() ?? ""}원
            </span>
          </div>
          {visaFormData?.form6?.expressFee > 0 && (
            <div className="flex justify-between mb-1">
              <span>배송비:</span>
              <span className="font-bold">
                {visaFormData.form6.expressFee.toLocaleString()}원
              </span>
            </div>
          )}
          <div className="flex justify-between mt-3 pt-3 border-t-2 border-gray-200">
            <span className="font-semibold">총합:</span>
            <span className="text-red-600 font-bold">
              {(
                (visaFormData?.form1?.calculatedPrice ?? 0) +
                (visaFormData?.form6?.expressFee ?? 0)
              ).toLocaleString()}
              원
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white p-3 text-lg rounded mt-2 hover:bg-red-600"
          >
            신청하기
          </button>
        </div>
      </form>

      {/* <button type="submit" onClick={handleSubmit}        onSubmit={handleSubmit}
 className="bg-red-500 text-white p-2 rounded ">
          신청하기
        </button> */}
    </div>
  );
};

export default VisaApplicationForm;
