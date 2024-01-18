import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VisaForm1 from "@/components/VisaForm1";
import VisaForm2 from "@/components/VisaForm2";
import VisaForm3 from "@/components/VisaForm3";
import VisaForm4 from "@/components/VisaForm4";
import VisaForm5 from "@/components/VisaForm5";

const VisaApplicationForm = () => {
  const router = useRouter();
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
    amount: visaFormData.form1.calculatedPrice,
    buyer_tel: "000-0000-0000",
  };

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
          submitForm();
        } else {
          // 결제 실패 처리...
        }
      });
    } else {
      console.error("아임포트 라이브러리가 로드되지 않았습니다.");
    }
  };

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
    // Excel 파일 로드
  }, [router]);

  // 예를 들어, 폼 컴포넌트 내부에서 API 라우트를 호출합니다.
  // VisaApplicationForm.js
  // Payment 컴포넌트에 대한 코드 주석을 해제합니다.

  // 폼 데이터를 서버로 제출하는 함수
 

  // const handleSubmit = async (event) => {
  //   event.preventDefault(); // 기본 폼 제출 동작 방지

  //   try {
  //     const response = await fetch('/api/sendEmail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ message: 'This is a test email.' }), // 테스트 메시지
  //     });

  //     if (response.ok) {
  //       console.log('Email sent successfully');
  //       alert('Email sent successfully');
  //     } else {
  //       console.error('Failed to send email');
  //       alert('Failed to send email');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Error sending email');
  //   }
  // };

  // ...

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
    // onClickPayment();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visaFormData), // 전체 폼 데이터를 JSON으로 변환
    });

    if (!response.ok) {
      console.error('Failed to send email');
      const errorData = await response.text(); // 또는 response.json() 이 될 수도 있습니다.
      console.error('Error response from server:', errorData);
      // 오류 메시지 표시 또는 추가 액션
    } else{
      console.log('Email sent successfully');
      alert('Email sent successfully');
    }
    console.log(visaFormData);
    console.log(visaFormData.form1.calculatedPrice);
    // API 라우트에 전체 폼 데이터를 POST 요청으로 전송합니다.
  
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto my-20 p-6 bg-white shadow-md rounded-lg"
      >
        {/* 폼 내용 */}
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
            className="bg-red-500 text-white p-3 text-lg rounded mt-2"
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

// <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
// <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
//   비자 신청서
// </h2>

// <div
//   className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
//   role="alert"
// >
//   <p className="font-bold">긴급 안내</p>
//   <p>*오전 12시 전 서류 도착 시 2일 내 초특급 비자 발급 가능*</p>
// </div>

// <div
//   className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
//   role="alert"
// >
//   <p className="font-bold">중요</p>
//   <p>
//     **현재 관광비자, 상용비자, 친척방문비자, 단수 및 더블 신청은 지문
//     등록 면제입니다**
//   </p>
// </div>

// <div
//   className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
//   role="alert"
// >
//   <p className="font-bold">비자 사진 안내</p>
//   <p>
//     (여권용 사진. 안경 착용 불가. 이마, 귀 등 노출 필수. 여권 사진과
//     동일 시 여권 발행일 6개월 이내면 가능.)
//   </p>
// </div>

// <div
//   className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
//   role="alert"
// >
//   <p className="font-bold">참고 사항</p>
//   <p>
//     ※신청 비자 종류에 따라 필요 서류가 다르므로 필히 담당자에 상담 요청.
//   </p>
// </div>
// </div>

// const [employmentInfo, setEmploymentInfo] = useState({
//   startDate: "",
//   companyName: "",
//   position: "",
//   supervisorName: "",
//   supervisorContact: "",
//   companyAddress: "",
// });
// const [formData, setFormData] = useState({
//   stayDuration: "", // 체류 일자
//   serviceType: "", // 서비스 종류
//   departureDate: "", // 예정 출국 일자
//   entryDate: "", // 예정 입국 일자
//   name: "", // 성명
//   previousChineseName: "", // 귀화전 중국어 이름
//   contactNumber: "", // 연락처
//   birthPlace: "", // 출생지
//   maritalStatus: "", // 혼인상황
//   address: "", // 거주주소
//   employmentStartDate: "", // 입사일
//   employerName: "", // 직장명
//   position: "", // 직위
//   supervisorName: "", // 상사이름
//   supervisorContact: "", // 상사연락처
//   employerAddress: "", // 직장주소
//   educationLevel: "", // 최종학력
//   schoolName: "", // 학교명
//   schoolAddress: "", // 학교주소
//   familyDetails: [], // 가족사항
//   travelHistory: [], // 기
//   visaDenialDetails: "", // 비자 거부 사유
//   criminalRecordDetails: "", // 범죄 기록
//   emergencyContactName: "", // 비상연락처 성명
//   emergencyContactRelation: "", // 관계
//   emergencyContactNumber: "", // 연락처visitingPlacesInChina: '',     // 중국 방문지
//   contactInChina: "", // 중국 연락처
//   visaRejectionOrOverstayRecord: "", // 비자 거부 혹은 불체 기록
//   countryNamesVisited: [],
//   chineseContactNumber: "", // 중국 연락처
//   recentOneYearTravelRecord: "", // 1년간 기타 국가 방문기록
//   visaDenialOrIllegalStay: "", // 비자 거부 혹은 불체 기록 여부
//   crimeRecordInChinaOrKorea: "", // 중국 또는 한국에서의 범죄 기록
//   emergencyContactDetails: {
//     // 비상 연락처 정보
//     name: "",
//     relationship: "",
//     contactNumber: "",
//   },
//   educationLevel: "", // 최종학력
//   schoolName: "", // 학교명
//   schoolAddress: "", // 학교주소
//   familyDetails: [
//     {
//       // 가족사항 (배열로 초기화)
//       relationship: "", // 관계
//       englishName: "", // 영문이름
//       nationality: "", // 국적
//       birthPlace: "", // 출생지
//       birthDate: "", // 생년월일
//       occupation: "", // 직업
//       currentResidence: "", // 현거주지
//     },
//   ],
// });
