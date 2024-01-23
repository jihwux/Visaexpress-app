import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleDropdown}
      >
        <span className="flex-grow font-medium text-lg">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

const VisaAdditionalInfoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        추가 주의사항
      </h2>
      <div className="flex flex-wrap -mx-2 mb-10">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <Dropdown title="특정 국가 방문자에 대한 주의사항">
            <p className="text-gray-700">
              터키, 시리아, 이라크, 요르단, 아프가니스탄, 파키스탄 등 주의국가
              다녀오신 분들은 비자 심사 지연될 가능성이 있으므로 참고해주시길
              바랍니다.
            </p>
          </Dropdown>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Dropdown title="추가 서류 요청에 따른 비자 발급 지연">
            <p className="text-gray-700">
              중국 비자에 대한 모든 심사 및 발급은 중국 영사관에서 결정되며,
              회원 개인 사정으로 인한 비자 발급 거절에 대해서 본 사는 일체
              책임을 지지 않습니다.
            </p>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default VisaAdditionalInfoPage;
