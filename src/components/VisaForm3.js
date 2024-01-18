import React, { useState } from "react";

const VisaForm3 = ({ onFormDataChange }) => {
  const [employmentInfo, setEmploymentInfo] = useState({
    startDate: "",
    companyName: "",
    position: "",
    supervisorName: "",
    supervisorContact: "",
    // companyAddress: "",
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
  return (
    <div>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">재직 정보</h2> */}

      {/* 입사일 */}
      {/* 입사일 */}


<div className="flex flex-wrap -mx-3 mb-4">
  <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
    <label htmlFor="startDate" className="block text-lg font-medium text-gray-700 mb-2">
      입사일
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
    <label htmlFor="companyName" className="block text-lg font-medium text-gray-700 mb-2">
      직장명
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
    <label htmlFor="position" className="block text-lg font-medium text-gray-700 mb-2">
      직위
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
    <label htmlFor="supervisorName" className="block text-lg font-medium text-gray-700 mb-2">
      상사이름
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
    <label htmlFor="supervisorContact" className="block text-lg font-medium text-gray-700 mb-2">
      상사연락처
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
    <label htmlFor="workAddress" className="block text-lg font-medium text-gray-700 mb-2">
      직장주소
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
  <div className="w-full lg:w-1/3 px-3 mb-4 lg:mb-0">
    <label htmlFor="schoolName" className="block text-lg font-medium text-gray-700 mb-2">
      학교명
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
    <label htmlFor="schoolAddress" className="block text-lg font-medium text-gray-700 mb-2">
      학교주소
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
  <div className="w-full lg:w-1/3 px-3">
    <label htmlFor="educationLevel" className="block text-lg font-medium text-gray-700 mb-2">
      학력
    </label>
    <input
      type="text"
      id="educationLevel"
      name="educationLevel"
      value={educationInfo.educationLevel}
      onChange={handleEducationInfoChange}
      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>
      
    </div>
  );
};

export default VisaForm3;
