import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VisaForm1 from "@/components/VisaForm1";
import VisaForm2 from "@/components/VisaForm2";
import VisaForm3 from "@/components/VisaForm3";
import VisaForm4 from "@/components/VisaForm4";
import VisaForm5 from "@/components/VisaForm5";
import VisaForm6 from "@/components/VisaForm6";
import { initiatePayment } from "@/components/Payment";

// 필요한 React hooks와 Next.js router를 import 합니다.

const VisaApplicationForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

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
    localStorage.setItem("visaFormData", JSON.stringify(visaFormData));
  }, [visaFormData]);

  useEffect(() => {
    // 발급 비용과 배송비를 합산하여 결제 금액을 업데이트합니다.
    const totalAmount =
      (visaFormData.form1?.calculatedPrice ?? 0) +
      (visaFormData.form6?.expressFee ?? 0);

    setPaymentParams((currentParams) => ({
      ...currentParams,
      // amount: totalAmount,
      amount: 100,
      name: visaFormData.form1.visaType,
      stayDuration: visaFormData.form1.stayDuration,
      visaDuration: visaFormData.form1.visaDuration,
      serviceType: visaFormData.form1.serviceType,
      buyer_name: visaFormData.form2.fullName,

      buyer_email:
        visaFormData?.form5?.emergencyContact?.email ||
        "defaultemail@example.com",
      buyer_tel: visaFormData.form5.emergencyContact?.contact || "010-000-000",
      buyer_addr: `${visaFormData?.form6?.address || "직정 방문"}  ${
        visaFormData?.form6?.detailedAddress || ""
      }`.trim(),
    }));
  }, [
    visaFormData.form1,
    visaFormData.form2,
    visaFormData.form6,
    visaFormData.form5,
  ]); // form1 또는 form6의 변화를 감지합니다.

  // const IMP_UID = "imp21001741"; // 실제 가맹점 식별코드로 변경해야 함
  // const IMP_UID = "imp21001741"; // 실제 가맹점 식별코드로 변경해야 함
  // pg: `html5_inicis.${process.env.NEXT_PUBLIC_IMP_MID}`,

  const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID;
  const [paymentParams, setPaymentParams] = useState({
    pg: `html5_inicis.${process.env.NEXT_PUBLIC_IMP_MID}`,
    pay_method: "card",
    name: visaFormData.form1.visaType,
    merchant_uid: `merchant_${Date.now()}`,
    // amount: visaFormData.form1.calculatedPrice,
    amount: 100,
    buyer_name: visaFormData.form2.fullName,
    buyer_email:
      visaFormData?.form5?.emergencyContact?.email ||
      "defaultemail@example.com",
    buyer_tel: visaFormData.form5.emergencyContact?.contact || "010-000-000",
    buyer_addr: `${visaFormData?.form6?.address || "직정 방문"}  ${
      visaFormData?.form6?.detailedAddress || ""
    }`.trim(),
    // m_redirect_url: `http://localhost:3000/success?paymentsuccess=true&name=${encodeURIComponent(
    //   visaFormData.form1.visaType || ""
    // )}&stayDuration=${encodeURIComponent(
    //   visaFormData.form1.stayDuration || ""
    // )}&visaDuration=${encodeURIComponent(
    //   visaFormData.form1.visaDuration || ""
    // )}&serviceType=${encodeURIComponent(
    //   visaFormData.form1.serviceType || ""
    // )}&merchant_uid=merchant_${Date.now()}&amount=${encodeURIComponent(
    //   visaFormData.form1.calculatedPrice || ""
    // )}`,
    // m_redirect_url: `http://localhost:3000/paymentreseult`,
    m_redirect_url: `https://visaexpress.co.kr/paymentresult?name=${encodeURIComponent(
      visaFormData.form1.visaType
    )}&stayDuration=${encodeURIComponent(
      visaFormData.form1.stayDuration
    )}&visaDuration=${encodeURIComponent(
      visaFormData.form1.visaDuration
    )}&serviceType=${encodeURIComponent(
      visaFormData.form1.serviceType
    )}&merchant_uid=merchant_${Date.now()}&amount=${encodeURIComponent(
      visaFormData.form1.calculatedPrice
    )}`,
    // m_redirect_url: `http://localhost:3000/paymentresult?paymentSuccess=true&name=${encodeURIComponent(
    //   visaFormData.form1.visaType
    // )}&stayDuration=${encodeURIComponent(
    //   visaFormData.form1.stayDuration
    // )}&visaDuration=${encodeURIComponent(
    //   visaFormData.form1.visaDuration
    // )}&serviceType=${encodeURIComponent(
    //   visaFormData.form1.serviceType
    // )}&merchant_uid=merchant_${Date.now()}&amount=${encodeURIComponent(
    //   visaFormData.form1.calculatedPrice
    // )}`,
    //
    // buyer_tel: visaFormData.form5.emergencyContact.contact,
    // 결제 파라미터 설정
    // m_redirect_url: `http://localhost:3000/paymentresult?imp_success=${encodeURIComponent(
    //   "true" // 이 값은 실제 결제 성공 여부에 따라 동적으로 할당되어야 함
    // )}&merchant_uid=merchant_${Date.now()}&imp_uid=${encodeURIComponent(
    //   "imp_409682616853" // 이 값은 실제 결제 고유 ID에 따라 동적으로 할당되어야 함
    // )}`,
    // m_redirect_url: `http://localhost:3000/paymentresult?paymentSuccess=true&name=${encodeURIComponent(
    //   visaFormData.form1.visaType
    // )}&stayDuration=${encodeURIComponent(
    //   visaFormData.form1.stayDuration
    // )}&visaDuration=${encodeURIComponent(
    //   visaFormData.form1.visaDuration
    // )}&serviceType=${encodeURIComponent(
    //   visaFormData.form1.serviceType
    // )}&merchant_uid=merchant_${Date.now()}&amount=${encodeURIComponent(
    //   visaFormData.form1.calculatedPrice
    // )}`,
  });

  // 결제 성공 페이지 컴포넌트
  // 결제 성공 시 실행되는 함수
  const proceedToPaymentSuccess = () => {
    const formDataToSave = {
      name: visaFormData.form1.visaType,
      stayDuration: visaFormData.form1.stayDuration,
      visaDuration: visaFormData.form1.visaDuration,
      serviceType: visaFormData.form1.serviceType,
      merchant_uid: `merchant_${Date.now()}`,
      amount: visaFormData.form1.calculatedPrice,
    };

    localStorage.setItem("mobileData", JSON.stringify(formDataToSave));
    // localStorage.setItem("visaFormDatas", JSON.stringify(formDataToSaves));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // 로딩 시작
    console.log("a");
    proceedToPaymentSuccess();

    const emailResponse = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaFormData), // 전체 폼 데이터를 JSON으로 변환
    });
    try {
      const paymentResult = await initiatePayment(IMP_UID, paymentParams);
      const emailResponse = await fetch("/api/sendEmailPc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visaFormData), // 전체 폼 데이터를 JSON으로 변환
      });

      console.log("결제 및 검증 성공: ", paymentResult.message);

      // 결제 성공 시 이메일 전송

      // 이메일 전송 실패 처리
      // if (!emailResponse.ok) {
      //   const errorData = await emailResponse.json();
      //   console.error("Error Data:", errorData);
      //   throw new Error(`Email send failed: ${emailResponse.status}`);
      // }

      // 이메일 전송 성공 로그
      console.log("Email sent successfully");

      //   // 성공 페이지로 리디렉션
      await router.push({
        pathname: "/success",
        query: {
          paymentSuccess: "true", // 결제 성공 토큰 추가
          name: visaFormData.form1.visaType,
          stayDuration: visaFormData.form1.stayDuration,
          visaDuration: visaFormData.form1.visaDuration,
          serviceType: visaFormData.form1.serviceType,
          merchant_uid: `merchant_${Date.now()}`,
          amount: visaFormData.form1.calculatedPrice,
        },
      });
    } catch (error) {
      // 결제 또는 검증 실패 혹은 이메일 전송 실패 시 로그
      console.error(
        "결제 또는 검증 실패 혹은 이메일 전송 실패: ",
        error.message
      );

      // 실패 페이지로 리디렉션
      await router.push({
        pathname: "/fail",
        query: { error: error.message },
      });
    } finally {
      // 로딩 상태 해제
      setIsLoading(false);
    }
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
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto my-20 p-6 bg-white shadow-md rounded-lg"
      >
        {/* 폼 내용 s*/}
        {/* 폼 내용 */}
        {/* 예시: 비자 종류 선택 필드 */}
        {/* 폼 내용 */}
        <div className="flex justify-start items-center  space-x-2 pt-6">
          <div className="flex justify-start items-center mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-400">
              비자 신청서
              <span className="text-3xl lg:text-5xl text-red-600">.</span>
            </h2>
          </div>
        </div>
        <p className="text-xs lg:text-sm text-gray-600">
          ※ 현재 카드 결제는 하나카드/삼성카드를 제외한 카드만 결제가
          가능합니다.
        </p>
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
