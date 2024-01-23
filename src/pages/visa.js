import VisaAdditionalInfoPage from "@/components/dropdown";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const VisaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    // 모달 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      // 모달 창이 열려있고, 클릭한 요소가 모달의 내부가 아닌 경우에만 모달을 닫음
      if (isModalOpen && !event.target.closest(".modal-clo")) {
        setIsModalOpen(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]); // 의존성 배열에 isModalOpen을 추가하여 모달 상태가 바뀔 때마다 이벤트 리스너를 업데이트

  const toggleModal = (tab) => {
    setActiveTab(tab); // 탭 상태 변경
    setIsModalOpen(!isModalOpen); // 모달 상태 토글
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const htmlFilePath = "/fom.html"; // public 폴더 기준의 경로
  const htmlFilePath1 = "/aa.htm"; // public 폴더 기준의 경로

  return (
    <div className="flex-grow container mx-auto my-8 ">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border shadow-lg rounded-md bg-white max-w-6xl w-full h-auto modal-clo">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-bold">
                비자 신청 전 서류 비용 조회
              </h3>
              <button onClick={toggleModal} className="text-xl">
                &times;
              </button>
            </div>
            <div className="border-b">
              <ul className="flex cursor-pointer">
                <li
                  className={`mr-8 ${
                    activeTab === "tab1" ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleTabChange("tab1")}
                >
                  필요서류{" "}
                </li>
                <li
                  className={`mr-8 ${
                    activeTab === "tab2" ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleTabChange("tab2")}
                >
                  가격표
                </li>
              </ul>
            </div>

            <div className="mt-3">
              {activeTab === "tab1" && (
                <iframe
                  src={htmlFilePath}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-[75vh]" // 높이를 화면의 75%로 설정
                ></iframe>
              )}
              {activeTab === "tab2" && (
                <iframe
                  src={htmlFilePath1}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-[75vh]" // 높이를 화면의 75%로 설정
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            <h1 className="text-3xl font-bold leading-tight text-gray-800">
              중국 비자 신청
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              비자익스프레스에서 중국비자를 간편하게 신청하세요. 온라인으로
              신청서를 작성하고 필요 서류를 확인한 후, 우편으로 서류를
              보내주시면 접수 처리됩니다.
            </p>
            <div className="mt-6">
              <div className="text-red-600">
                <p>※ 서울비자센터에서 비자 서비스가 제공됩니다.</p>
                <p>※ 익일 접수 마감시간은 오후 12시까지입니다.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 pb-10">
                <button
                  onClick={() => toggleModal("tab1")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                  필요서류 조회하기
                </button>
                <button
                  onClick={() => toggleModal("tab2")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                  가격표
                </button>
              </div>
            </div>
            {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-center text-red-600 md:text-3xl mb-6">
                  중국 비자 신청 발급 기간
                </h2> */}

            <div className="container mx-auto py-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-800">
                비자 발급 서비스 유형(서비스 제공기간)
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                - 회사접수-중국비자센터 사전심사-지문등록 및
                비자센터접수-영사관심사-발급
                <br />- 영사관 보류 시 별도 시간소요됩니다.
              </p>
              <div className="text-right py-4">
                <Link href="/refund" legacyBehavior>
                  <a className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                    환불 규정 →
                  </a>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* 보통 신청 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">보통 신청</h3>
                  <p className="text-gray-700 mt-2">
                    전 과정은 평일 기준 7일이 소요되며, 지문 등록이 면제될 경우
                    총 평일 기준으로 발급 기간은 4일입니다.
                  </p>
                </div>

                {/* 급행 신청 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">급행 신청</h3>
                  <p className="text-gray-700 mt-2">
                    전 과정은 평일 기준 6일이 소요되며, 지문 등록이 면제될 경우
                    총 평일 기준으로 3일입니다.
                  </p>
                </div>

                {/* 특급 신청 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">특급 신청</h3>
                  <p className="text-gray-700 mt-2">
                    전 과정은 평일 기준 5일이 소요되며, 지문 등록이 면제될 경우
                    총 평일 기준으로 2일입니다.
                  </p>
                </div>

                {/* 초특급 신청 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">초특급 신청</h3>
                  <p className="text-gray-700 mt-2">
                    전 과정은 평일 기준 3일이 소요되며, 평일 12시 전 서류 도착
                    시, 2일이며 지문 등록이 면제될 경우 총 평일 기준으로
                    2일입니다.
                  </p>
                </div>
              </div>
            </div>

            <VisaAdditionalInfoPage />
            <h1 className="text-3xl font-bold leading-tight text-gray-800 py-10 ">
              비자 신청 전 참고사항
            </h1>
            <div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
              role="alert"
            >
              <p className="font-bold">긴급 안내</p>
              <p>*오전 12시 전 서류 도착 시 2일 내 초특급 비자 발급 가능*</p>
            </div>
            <div
              className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
              role="alert"
            >
              <p className="font-bold">중요</p>
              <p>
                **현재 관광비자, 상용비자, 친척방문비자, 단수 및 더블 신청은
                지문 등록 면제입니다**
              </p>
            </div>
            <div
              className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
              role="alert"
            >
              <p className="font-bold">비자 사진 안내</p>
              <p>
                (여권용 사진. 안경 착용 불가. 이마, 귀 등 노출 필수. 여권 사진과
                동일 시 여권 발행일 6개월 이내면 가능.)
              </p>
            </div>
            <div
              className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
              role="alert"
            >
              <p className="font-bold">참고 사항</p>
              <p>
                ※신청 비자 종류에 따라 필요 서류가 다르므로 필히 담당자에 상담
                요청.
              </p>
            </div>
            <div className="flex justify-center mt-12">
              <a
                href="agree"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                신청하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;

// *오전12시전 서류도착시 2일내 초특급비자발급가능*
// **현재 관광비자 상용비자 탄친비자, 단수및더블신청은 지문등록면제입니다**

// ■비자사진
// (여권용 사진. 안경 착용 불가. 이마, 귀 등 노출필수. 여권 사진과 동일 시 여권발행일 6개월 이내면 가능.)

// ※신청 비자 종류에 따라 필요 서류가 다르므로 필히 담당자에 상담 요청.
