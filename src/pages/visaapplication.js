import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VisaForm1 from "@/components/VisaForm1";
import VisaForm2 from "@/components/VisaForm2";
import VisaForm3 from "@/components/VisaForm3";
import VisaForm4 from "@/components/VisaForm4";
import VisaForm5 from "@/components/VisaForm5";
import { redirect } from "next/dist/server/api-utils";

const VisaApplicationForm = () => {
  const router = useRouter();

  useEffect(() => {
    // 로컬 스토리지에서 'agreements' 확인
    const agreements = JSON.parse(localStorage.getItem("agreements") || "{}");
    const allAgreed = Object.values(agreements).every((value) => value);

    // 모든 약관에 동의하지 않았다면 'privacypolicy' 페이지로 리다이렉트
    if (!allAgreed) {
      router.push("/agree");
    } else {
      console.log("All agreements have been agreed."); // 모든 약관 동의 로그
    }
  }, [router]);

  const [visaFormData, setVisaFormData] = useState({
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5: {},
  });
  const initialState = {
    pg: "uplus",
    pay_method: "card",
    name: "테스트 주문",
    merchant_uid: `merchant_${Date.now()}`,
    // amount: visaFormData.form1.calculatedPrice,
    amount: 100,
    buyer_tel: "000-0000-0000",
    m_redirect_url: "/success",
  };

  // ... 나머지 코드 ...

  const [params, setParams] = useState(initialState);
  const [result, setResult] = useState();

  const IMP_UID = "imp21001741"; // 가맹점 식별코드

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init(IMP_UID);
    if (IMP) {
      IMP.request_pay(params, (response) => {
        console.log(response);
        setResult(response);

        if (response.success) {
          // 결제 성공 시 폼 제출 로직을 실행합니다.
          // 예를 들어, 폼 데이터를 서버로 전송하는 함수를 호출할 수 있습니다.
          router.push("/success"); // Next.js 라우터를 사용한 리디렉션
        } else {
          // 결제 실패 처리
          console.log("결제 실패: ", response.error_msg);

          // 결제 실패 처리...
        }
      });
    } else {
      console.error("아임포트 라이브러리가 로드되지 않았습니다.");
    }
  };
  // useEffect를 사용하여 visaFormData가 변경될 때마다 params를 업데이트합니다.
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormDataValid(visaFormData)) {
      alert("모든 내용을 입력해주세요.");
      return;
    }

    onClickPayment();
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
      alert("Email sent successfully");
    }
    console.log(visaFormData);
    console.log(visaFormData.form1.calculatedPrice);
    // API 라우트에 전체 폼 데이터를 POST 요청으로 전송합니다.
  };
  const isFormDataValid = (formData) => {
    for (const key of Object.keys(formData)) {
      // formData의 각 섹션이 빈 객체인지 확인합니다.
      if (Object.keys(formData[key]).length === 0) {
        return false; // 빈 객체가 있으면 false를 반환합니다.
      }
    }
    // 모든 섹션이 비어 있지 않으면 true를 반환합니다.
    return true;
  };

  // handleSubmit 함수 내에서 유효성 검사를 수행합니다.

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

        {/* 직장명 */}
        {/* ... 동일한 패턴으로 직장명, 직위, 상사 이름, 상사 연락처, 직장 주소 필드 추가 ... */}
        {/* 예시: 직장명 */}
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
