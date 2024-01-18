import React, { useState, useEffect } from "react";

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
      <h1 className="text-3xl font-bold leading-tight text-gray-800">중국 비자 신청</h1>
      <p className="mt-4 text-gray-600 text-lg">
        비자익스프레스에서 중국비자를 간편하게 신청하세요. 온라인으로 신청서를 작성하고 필요 서류를 확인한 후, 우편으로 서류를 보내주시면 접수 처리됩니다.
      </p>
      <div className="mt-6">
        <div className="text-red-600">
          <p>※ 서울비자센터에서 비자 서비스가 제공됩니다.</p>
          <p>※ 익일 접수 마감시간은 오후 12시까지입니다.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
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
      <div className="flex justify-center mt-12">
        <a href="agree" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
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
 