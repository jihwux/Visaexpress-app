import React, { useState } from "react";

const VisaForm3 = ({ onFormDataChange }) => {
  const [employmentInfo, setEmploymentInfo] = useState({
    startDate: "",
    companyName: "",
    position: "",
    supervisorName: "",
    supervisorContact: "",
    // companyAddress: "",
    maritalStatus: "", // 결혼 상태
    educationLevel: ''
  });

  const handleEmploymentInfoChange = (e) => {
    const { name, value } = e.target;
    const newEmploymentInfo = { ...employmentInfo, [name]: value };
    setEmploymentInfo(newEmploymentInfo);
    onFormDataChange({ ...newEmploymentInfo, ...educationInfo });
  };

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    educationLevel: "",
    schoolAddress: "",
  });

  const handleEducationInfoChange = (e) => {
    const { name, value } = e.target;
    const newEducationInfo = { ...educationInfo, [name]: value };
    setEducationInfo(newEducationInfo);
    onFormDataChange({ ...employmentInfo, ...newEducationInfo });
  };
  const handleMaritalStatusChange = (e) => {
    const newFormDetails = { ...employmentInfo, maritalStatus: e.target.value };
    setEmploymentInfo(newFormDetails);
    onFormDataChange({ ...newFormDetails });
  };
  return (
    <div>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">재직 정보</h2> */}

      {/* 입사일 */}
      {/* 입사일 */}

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
          <label
            htmlFor="startDate"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            입사 일
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={employmentInfo.startDate}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="companyName"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            회사명
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={employmentInfo.companyName}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="position"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            직급
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={employmentInfo.position}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
          <label
            htmlFor="supervisorName"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            대표자 이름
          </label>
          <input
            type="text"
            id="supervisorName"
            name="supervisorName"
            value={employmentInfo.supervisorName}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="supervisorContact"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            회사 연락처
          </label>
          <input
            type="text"
            id="supervisorContact"
            name="supervisorContact"
            value={employmentInfo.supervisorContact}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="workAddress"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            회사 주소
          </label>
          <input
            type="text"
            id="workAddress"
            name="workAddress"
            value={employmentInfo.workAddress}
            onChange={handleEmploymentInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full lg:w-1/3 px-3">
          <label
            htmlFor="educationLevel"
            className="block text-lg font-medium text-gray-700 mb-2 required-label"
          >
            학력
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={employmentInfo.educationLevel}
            onChange={handleEmploymentInfoChange}
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              학력을 선택하세요
            </option>
            <option value="유아&소아">유아&소아</option>
            <option value="중졸">중졸</option>
            <option value="고졸">고졸</option>
            <option value="대졸">대졸</option>
          </select>
        </div>
        <div className="w-full lg:w-1/3 px-3 mb-4 lg:mb-0">
          <label
            htmlFor="schoolName"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            학교 명
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={educationInfo.schoolName}
            onChange={handleEducationInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full lg:w-1/3 px-3 mb-4 lg:mb-0">
          <label
            htmlFor="schoolAddress"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            학교 주소
          </label>
          <input
            type="text"
            id="schoolAddress"
            name="schoolAddress"
            value={educationInfo.schoolAddress}
            onChange={handleEducationInfoChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <fieldset className="mb-4">
        <legend className="block text-lg font-medium text-gray-700 mb-2 required-label">
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
              required
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
              required
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
              required
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
              required
            />
            <span className="ml-2">사별</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default VisaForm3;
