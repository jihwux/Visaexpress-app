import React, { useState, useEffect } from "react";

const VisaForm5 = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    hasVisitedCountries: false,
    hasCriminalRecord: false,
    hasVisaRejectionOrIllegalStay: false,
    criminalDetails: "",
    rejectionReason: "",
    illegalStayRecord: "",
    countries: [{ name: "" }],
    emergencyContact: { name: "", relation: "", contact: "", email: "" },
  });

  const onChange = (fieldName, value) => {
    setFormData((prevFormData) => {
      // 경로를 기반으로 중첩된 객체의 값을 업데이트
      const keys = fieldName.split(".");
      let current = prevFormData;

      // 마지막 키 전까지 객체를 순회
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) current[key] = {};
        current = current[key];
      }

      // 마지막 키에 대한 값을 업데이트
      const lastKey = keys[keys.length - 1];
      current[lastKey] = value;

      // 변경된 상태를 상위 컴포넌트에 전달
      onFormDataChange({ ...prevFormData });

      // 새로운 상태를 반환
      return { ...prevFormData };
    });
  };

  // '국가 추가' 버튼 이벤트 핸들러
  const onAddCountryClick = () => {
    setFormData((prevFormData) => {
      const newCountries = [...prevFormData.countries, { name: "" }];
      const updatedFormData = { ...prevFormData, countries: newCountries };
      onFormDataChange(updatedFormData);
      return updatedFormData;
    });
  };

  const onRemoveCountryClick = (index) => {
    setFormData((prevFormData) => {
      const newCountries = prevFormData.countries.filter((_, i) => i !== index);
      const updatedFormData = { ...prevFormData, countries: newCountries };
      onFormDataChange(updatedFormData);
      return updatedFormData;
    });
  };
  const handleCountryNameChange = (index, event) => {
    setFormData((prevFormData) => {
      const newCountries = prevFormData.countries.map((country, i) =>
        index === i ? { ...country, name: event.target.value } : country
      );
      const updatedFormData = { ...prevFormData, countries: newCountries };

      // 상태 업데이트 콜백에서 상위 컴포넌트에 변경된 formData 전달
      onFormDataChange(updatedFormData);

      return updatedFormData;
    });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          1년간 기타 국가 방문기록
        </label>
        <div className="flex">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="visitedCountries"
              onChange={() => onChange("hasVisitedCountries", true)}
              checked={formData.hasVisitedCountries === true}
            />
            <span className="ml-2">예</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="visitedCountries"
              onChange={() => onChange("hasVisitedCountries", false)}
              checked={formData.hasVisitedCountries === false}
            />
            <span className="ml-2">아니오</span>
          </label>
        </div>
        {formData.hasVisitedCountries && (
          <div className="mt-2">
            {formData.countries.map((country, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="국가명 입력..."
                  value={country.name}
                  onChange={(event) => handleCountryNameChange(index, event)}
                  className="p-2 border border-gray-300 rounded-md shadow-sm flex-grow mr-2"
                />
                <button
                  type="button"
                  onClick={() => onRemoveCountryClick(index)}
                  className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
                >
                  제거
                </button>
              </div>
            ))}
            <div className="flex items-center mb-2">
              <button
                type="button"
                onClick={onAddCountryClick}
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded flex-grow"
              >
                국가 추가
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ... 이후 코드 ... */}

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          비자 거부 혹은 불체 기록이 있습니까?
        </label>
        <div className="flex">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="visaRejectionOrIllegalStay"
              className="form-radio"
              onChange={() => onChange("hasVisaRejectionOrIllegalStay", true)}
              checked={formData.hasVisaRejectionOrIllegalStay === true}
            />
            <span className="ml-2">예</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="visaRejectionOrIllegalStay"
              className="form-radio"
              onChange={() => onChange("hasVisaRejectionOrIllegalStay", false)}
              checked={formData.hasVisaRejectionOrIllegalStay === false}
            />
            <span className="ml-2">아니오</span>
          </label>
        </div>
        {formData.hasVisaRejectionOrIllegalStay && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="거부 사유 입력..."
              value={formData.rejectionReason}
              onChange={(e) => onChange("rejectionReason", e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm mb-2"
            />
            <input
              type="text"
              placeholder="불체 기록 입력..."
              value={formData.illegalStayRecord}
              onChange={(e) => onChange("illegalStayRecord", e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
            />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          중,한 양국 범죄 기록
        </label>
        <div className="flex">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="criminalRecord"
              className="form-radio"
              onChange={() => onChange("hasCriminalRecord", true)}
              checked={formData.hasCriminalRecord === true}
            />
            <span className="ml-2">예</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="criminalRecord"
              className="form-radio"
              onChange={() => onChange("hasCriminalRecord", false)}
              checked={formData.hasCriminalRecord === false}
            />
            <span className="ml-2">아니오</span>
          </label>
        </div>
        {formData.hasCriminalRecord && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="범죄 내용"
              value={formData.criminalDetails}
              onChange={(e) => onChange("criminalDetails", e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
            />
          </div>
        )}
      </div>

      {/* 비상 연락처 */}
      {/* 비상 연락처 */}
      <div className="mb-20">
        <div className="block text-lg font-medium text-gray-700 mb-2   required-label">
          비상 연락처
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            name="emergencyContact.name"
            placeholder="성함"
            value={formData.emergencyContact.name} // 경로 수정
            onChange={(e) => onChange("emergencyContact.name", e.target.value)} // 경로 수정
            className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
            required
          />

          <input
            type="text"
            name="emergencyContact.relation"
            placeholder="관계"
            value={formData.emergencyContact.relation} // 경로 수정
            onChange={(e) =>
              onChange("emergencyContact.relation", e.target.value)
            } // 경로 수정
            className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
            required
          />

          <input
            type="text"
            name="emergencyContact.contact"
            placeholder="연락처"
            value={formData.emergencyContact.contact} // 경로 수정
            onChange={(e) =>
              onChange("emergencyContact.contact", e.target.value)
            } // 경로 수정
            className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm "
            required
          />
          {/* <input
            type="email" // 이메일 타입으로 설정
            name="emergencyContact.email" // 경로를 email로 설정
            placeholder="이메일 주소"
            value={formData.emergencyContact.email} // formData에서 이메일 값을 바인딩
            onChange={(e) => onChange("emergencyContact.email", e.target.value)} // onChange 이벤트 핸들러 경로 수정
            className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
            required
          /> */}
        </div>
      </div>
    </div>
  );
};

export default VisaForm5;
