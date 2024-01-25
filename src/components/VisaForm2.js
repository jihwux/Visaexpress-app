import React, { useState, useEffect } from "react";

const VisaForm2 = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    departureDate: "",
    arrivalDate: "",
    fullName: "",
    chineseNameBeforeNaturalization: "",
    contactNumber: "",
    placeOfBirth: "",
    residenceAddress: "",
    visitPlace: "",
    chinaContact: "",
    maritalStatus: "", // 결혼 상태
    passportName: "", // 여권 영문 성명
    passportNumber: "", // 여권 번호
    socialSecurityNumber: "", //
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };

    setFormData(newData);

    if (typeof onFormDataChange === "function") {
      onFormDataChange(newData);
    }
  };
  const handleMaritalStatusChange = (e) => {
    const newFormDetails = { ...formData, maritalStatus: e.target.value };
    setFormData(newFormDetails);
    onFormDataChange({ ...newFormDetails });
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            htmlFor="departureDate"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            출국 예정일
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="arrivalDate"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            귀국 예정일
          </label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      {/* 예정입국일자 */}
      {/* ... 동일한 패턴으로 다른 필드 추가 ... */}
      {/* 성명 */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            htmlFor="fullName"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            이름
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            htmlFor="socialSecurityNumber"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            주민등록번호 뒷자리
          </label>
          <input
            type="password"
            id="socialSecurityNumber"
            name="socialSecurityNumber"
            maxLength="7" // 최대 길이를 7로 제한
            value={formData.socialSecurityNumber}
            onChange={(e) => {
              // 숫자만 입력되도록 조건을 걸고, 범위를 체크합니다.
              const value = e.target.value;
              const reg = /^[0-9\b]+$/; // 숫자와 백스페이스만 허용하는 정규식
              if (value === "" || reg.test(value)) {
                handleChange(e);
              }
            }}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="chineseNameBeforeNaturalization"
            className="block text-lg font-medium text-gray-700 mb-2 "
          >
            귀화전 중국어 이름(귀화자만)
          </label>
          <input
            type="text"
            id="chineseNameBeforeNaturalization"
            name="chineseNameBeforeNaturalization"
            value={formData.chineseNameBeforeNaturalization}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* 기존 필드들... */}
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            htmlFor="passportName"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            여권 영문 성명
          </label>
          <input
            type="text"
            id="passportName"
            name="passportName"
            value={formData.passportName}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* 기존 필드들... */}
      </div>

      {/* 연락처 */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="passportNumber"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            여권 번호
          </label>
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            htmlFor="contactNumber"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            연락처
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="residenceAddress"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            현 거주지 주소
          </label>
          <input
            type="text"
            id="residenceAddress"
            name="residenceAddress"
            value={formData.residenceAddress}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="placeOfBirth"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            출생지(시/군)
          </label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      {/* ... 기타 입력 필드들 ... */}

      <div className="flex flex-wrap -mx-3 mb-4">
        {/* 중국방문지(중국어) 입력란 */}
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="visitPlace"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            중국 방문지 주소(중문 혹은 영문)
          </label>
          <input
            type="text"
            id="visitPlace"
            name="visitPlace"
            value={formData.visitPlace}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="상세기재"
          />
        </div>

        {/* 중국 연락처 입력란 */}
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="chinaContact"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            중국연락처
          </label>
          <input
            type="text"
            id="chinaContact"
            name="chinaContact"
            value={formData.chinaContact}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default VisaForm2;
