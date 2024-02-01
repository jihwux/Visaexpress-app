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
    // 기존 로그 출력
    console.log(visaFormData.form1.calculatedPrice);
    console.log(visaFormData.form6);

    // ".required-label" 클래스를 가진 모든 레이블 선택
    const requiredLabels = document.querySelectorAll(".required-label");

    requiredLabels.forEach((label) => {
      let nextElement = label.nextElementSibling;

      // FIELDSET 요소인 경우 (라디오 버튼 그룹)
      if (nextElement && nextElement.tagName === "FIELDSET") {
        const radioButtons = nextElement.querySelectorAll(
          'input[type="radio"]'
        );
        if (radioButtons.length > 0) {
          // 라디오 버튼 그룹에 대해 required 속성을 추가합니다.
          radioButtons.forEach((radio) => {
            radio.setAttribute("required", true);
          });
        }
      }
      // DIV 요소인 경우 (SELECT 태그를 포함할 가능성이 있는 경우)
      else if (nextElement && nextElement.tagName === "DIV") {
        const selectElement = nextElement.querySelector("select");
        // SELECT 요소가 존재하는 경우 required 속성을 추가합니다.
        if (selectElement) {
          selectElement.setAttribute("required", true);
        }
      }
      // INPUT, SELECT, TEXTAREA 태그인 경우
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
  useEffect(() => {
    // 발급 비용과 배송비를 합산하여 결제 금액을 업데이트합니다.
    const totalAmount =
      (visaFormData.form1?.calculatedPrice ?? 0) +
      (visaFormData.form6?.expressFee ?? 0);

    setPaymentParams((currentParams) => ({
      ...currentParams,
      amount: totalAmount,
      name: visaFormData.form1.visaType,
      stayDuration: visaFormData.form1.stayDuration,
      visaDuration: visaFormData.form1.visaDuration,
      serviceType: visaFormData.form1.serviceType,
      buyer_name: visaFormData.form2.fullName,
    }));
  }, [visaFormData.form1, visaFormData.form2, visaFormData.form6]); // form1 또는 form6의 변화를 감지합니다.

  // const IMP_UID = "imp31516312"; // 실제 가맹점 식별코드로 변경해야 함
  const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID_TEST;
  const [paymentParams, setPaymentParams] = useState({
    pg: "kakaopay.TC0ONETIME",
    pay_method: "card",
    name: visaFormData.form1.visaType,
    merchant_uid: `merchant_${Date.now()}`,
    amount: visaFormData.form1.calculatedPrice,
    buyer_name: visaFormData.form2.fullName,
    // buyer_email: "buyer@example.com",
    // buyer_tel: "02-1670-5176",
    // buyer_addr: "성수이로 20길 16",
    // buyer_postcode: "04783",
    m_redirect_url: "/success", // 필요시 주석 해제 후 사용
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(visaFormData);

    try {
      const result = await initiatePayment(IMP_UID, paymentParams);
      console.log("결제 및 검증 성공: ", result.message);
      // 결제 성공 후 성공 페이지로 넘어갈 때 쿼리 파라미터를 포함시킵니다.
      router.push({
        pathname: "/success",
        query: {
          // 결제 성공과 관련된 데이터를 쿼리 파라미터로 전달합니다.
          // 예를 들어, orderId와 paymentAmount를 전달한다고 가정합니다.
          name: visaFormData.form1.visaType,
          stayDuration: visaFormData.form1.stayDuration,
          visaDuration: visaFormData.form1.visaDuration,
          serviceType: visaFormData.form1.serviceType,
          merchant_uid: `merchant_${Date.now()}`,
          amount: visaFormData.form1.calculatedPrice,
        },
      });
      router.push("/success"); // 성공 시 페이지 이동
    } catch (error) {
      // 에러가 발생했을 때 호출되는 함수 내부
      console.error("결제 또는 검증 실패: ", error.message);

      // 페이지 이동과 함께 쿼리 파라미터로 에러 메시지 전달
      router.push({
        pathname: "/fail",
        query: { error: error.message },
      });
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaFormData), // 전체 폼 데이터를 JSON으로 변환
    });

    if (!response.ok) {
      console.error("Failed to send email");
      const errorData = await response.text(); // 또는 response.json() 이 될 수도 있습니다.
      console.error("Error response from server:", errorData);
      // 오류 메시지 표시 또는 추가 액션
    } else {
      console.log("Email sent successfully");
      // alert("Email 확인 하세요 담당자님 ");
    }
    // API 라우트에 전체 폼 데이터를 POST 요청으로 전송합니다.
  };
  // 총합 계산 로직
  const totalAmount =
    (visaFormData?.form1?.calculatedPrice || 0) +
    (visaFormData?.form6?.expressFee || 0);

  // 총합을 콤마가 포함된 형태로 표시
  const totalAmountFormatted = totalAmount.toLocaleString("ko-KR");
  // 고객이 신청 현황을 조회하는데 접수 > 처리중 > 완료 이렇게 확인할 수 있어야해. 근데 관리자모드가 없어서 자동으로 1일 혹은 몇시간이 지나면 알아서 상태가 업데이트되게 하려고해. 이게 가능할까?

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
              {visaFormData?.form1?.calculatedPrice
                ? `${visaFormData.form1.calculatedPrice.toLocaleString()}원`
                : "비자 타입을 선택해주세요"}
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
              {totalAmount > 0 ? `${totalAmountFormatted}원` : "0원"}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-red-500 text-white p-3 text-lg rounded mt-2 hover:bg-red-600"
          >
            신청하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisaApplicationForm;
