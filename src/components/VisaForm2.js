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
    detailedAddress: "",
    chinaContact: "",
    maritalStatus: "", // 결혼 상태를 포함시킴
  });
 
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    
    setFormData(newData);
    
    if (typeof onFormDataChange === 'function') {
      onFormDataChange(newData);
    }
  };
    const handleMaritalStatusChange = (e) => {
      const newFormDetails = { ...formData, maritalStatus: e.target.value };
      setFormData(newFormDetails);
      onFormDataChange({...newFormDetails, });
    };
  
 
  return (
    <div>
     <div className="flex flex-wrap -mx-3 mb-4">
  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
    <label
      htmlFor="departureDate"
      className="block text-lg font-medium text-gray-700 mb-2"
    >
      예정출국일자
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
      className="block text-lg font-medium text-gray-700 mb-2"
    >
      예정입국일자
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
    <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
      성명
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
  <div className="w-full md:w-1/2 px-3">
    <label htmlFor="chineseNameBeforeNaturalization" className="block text-lg font-medium text-gray-700 mb-2">
      귀화전 중국어이름
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
</div>

      {/* 연락처 */}
      <div className="flex flex-wrap -mx-3 mb-4">
  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
    <label
      htmlFor="contactNumber"
      className="block text-lg font-medium text-gray-700 mb-2"
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
  <div className="w-full md:w-1/2 px-3">
    <label
      htmlFor="placeOfBirth"
      className="block text-lg font-medium text-gray-700 mb-2"
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
<div className="mb-4">
        <label
          htmlFor="residenceAddress"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          거주주소
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
      {/* ... 기타 입력 필드들 ... */}

      <fieldset className="mb-4">
        <legend className="block text-lg font-medium text-gray-700 mb-2">
          혼인 상황
        </legend>
        <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="maritalStatus"
              value="married"
              // checked={maritalStatus === 'married'}
              onChange={handleMaritalStatusChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">기혼</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="maritalStatus"
              value="single"
              // checked={maritalStatus === 'single'}
              onChange={handleMaritalStatusChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">미혼</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="maritalStatus"
              value="divorced"
              // checked={maritalStatus === 'divorced'}
              onChange={handleMaritalStatusChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">이혼</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="maritalStatus"
              value="widowed"
              // checked={maritalStatus === 'widowed'}
              onChange={handleMaritalStatusChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">사별</span>
          </label>
        </div>
      </fieldset>
   <div className="flex flex-row mb-4 space-x-4">
  {/* 중국방문지(중국어) 입력란 */}
  <div className="flex-grow">
    <label
      htmlFor="visitPlace"
      className="block text-lg font-medium text-gray-700 mb-2"
    >
      중국방문지(중국어)
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
  <div className="flex-grow">
    <label
      htmlFor="chinaContact"
      className="block text-lg font-medium text-gray-700 mb-2"
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
