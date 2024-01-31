import React, { useState, useEffect } from "react";
import Location from "../pages/location";

const VisaForm6 = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    deliveryMethod: "",
    visaApplicationMethod: "",
    name: "",
    contact: "",
    address: "",
    detailedAddress: "",
    passportNumber: "",
    groupNames: "",
    expressFee: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // 배송 방법이 변경되었을 경우의 추가 로직
    if (name === "deliveryMethod") {
      // 익일 특급 등기 배송 또는 그룹 배송이 선택되었다면 요금을 추가합니다.
      const expressFee = value === "express" || value === "group" ? 5000 : 0;

      // 필요한 상세 정보를 초기화합니다.
      const newDetails = {
        name: "",
        contact: "",
        address: "",
        detailedAddress: "",
        passportNumber: "",
        groupNames: "",
      };

      // 상태를 업데이트합니다.
      const newData = {
        ...formData,
        ...newDetails,
        [name]: value,
        expressFee: expressFee,
      };

      setFormData(newData);
      onFormDataChange(newData);
      // 부모 컴포넌트에 변경 사항을 전달합니다. 빈 값이 없는 경우에만 전달
      if (
        Object.values(newData).every((field) => field !== "") &&
        typeof onFormDataChange === "function"
      ) {
      }
    } else {
      // 기타 입력 필드 변경에 대한 처리
      const newData = { ...formData, [name]: value };
      setFormData(newData);

      // 부모 컴포넌트에 변경 사항을 전달합니다. 빈 값이 없는 경우에만 전달
      if (value !== "" && typeof onFormDataChange === "function") {
        onFormDataChange(newData);
      }
    }
  };
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 검색 결과에서 얻은 주소로 formData 업데이트
        const updatedFormData = {
          ...formData,
          address: data.address,
        };
        setFormData(updatedFormData);

        // 부모 컴포넌트로 변경된 formData 전달
        if (typeof onFormDataChange === "function") {
          onFormDataChange(updatedFormData);
        }
      },
    }).open();
  };
  // 나머지 로직은 동일하게 유지

  const handleDeliveryMethodChange = (event) => {
    const { value } = event.target;
    setDeliveryMethod(value);

    // 필요한 상세 정보를 초기화합니다.
    let newDetails = {
      name: "",
      contact: "",
      address: "",
      detailedAddress: "",
      passportNumber: "",
    };

    // 익일 특급 등기 배송이 선택되었다면 요금을 추가합니다.
    let extraFee = 0;
    if (value === "express") {
      extraFee = 5000;
    }

    // 상태를 업데이트합니다.
    setDeliveryDetails(newDetails);

    // 최종적으로 부모 컴포넌트에 전달할 데이터를 준비합니다.
    const newData = {
      ...deliveryDetails,
      deliveryMethod: value,
      expressFee: extraFee,
    };

    // 부모 컴포넌트에 변경 사항을 전달합니다.
    if (typeof onFormDataChange === "function") {
      onFormDataChange(newData);
    }
  };
  const handleDetailChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const address = {
    mail: {
      method: "등기로 발송",
      details:
        "서울특별시 영등포구 경인로77길49, 109동 상가 2층 201-4호(문래동4가 리버뷰 신안인스빌)",
      contact: "비자익스프레스 010-7775-2183",
    },
    visit: {
      method: "직접 방문 (11시~4시)",
      details:
        "서울특별시 영등포구 경인로77길49, 109동 상가 2층 201-4호(문래동4가 리버뷰 신안인스빌)",
      contact: "비자익스프레스 010-7775-2183",
    },
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <div className="flex flex-col justify-start h-full">
            <div>
              <label
                htmlFor="departureDate"
                className="block text-lg font-medium text-gray-700 required-label"
              >
                비자 접수 방법
              </label>
              <select
                id="visaApplicationMethod"
                name="visaApplicationMethod" // name 속성을 추가하여 handleInputChange에서 사용
                value={formData.visaApplicationMethod}
                onChange={handleInputChange}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-5"
              >
                <option value="" disabled>
                  접수 방법을 선택하세요
                </option>
                <option value="mail">등기로 발송</option>
                <option value="visit">방문 접수 (11시~4시)</option>
              </select>
            </div>
            <div className="mt-auto">
              <label
                htmlFor="deliveryMethod"
                className="block text-lg font-medium text-gray-700 mb-2 required-label"
              >
                비자 수령 방법
              </label>
              <select
                id="deliveryMethod"
                name="deliveryMethod" // name 속성을 추가하여 handleInputChange에서 사용
                value={formData.deliveryMethod}
                onChange={handleInputChange}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  수령 방법을 선택하세요
                </option>
                <option value="express">익일 등기 배송(5000원)</option>
                <option value="group">
                  2인이상 익일 등기 묶음 배송(5000원)
                </option>
                <option value="group2">2인 이상 묶음 대표자 외</option>
                <option value="quick">착불 퀵 배송</option>
                <option value="direct">직접 수령 (11시~5시)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 px-3">
          <div className="flex flex-col h-full p-4 border border-gray-300 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-700">
              <b>서류 보낼 곳:</b> {address.mail.details}
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold text-gray-700">
                <b>연락처:</b> {address.mail.contact}
              </p>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <a
                  href="https://map.naver.com/p?title=%EB%B9%84%EC%9E%90%EC%9D%B5%EC%8A%A4%ED%94%84%EB%A0%88%EC%8A%A4&lng=126.8889313&lat=37.5144081&zoom=17&type=0&c=17.00,0,0,0,dh"
                  target="_blank"
                >
                  {" "}
                  지도 보기{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* '받는 분' 정보 입력 섹션 */}
      {formData.deliveryMethod && formData.deliveryMethod !== "direct" && (
        <>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2 required-label"
              >
                {formData.deliveryMethod === "group"
                  ? "대표자 성함"
                  : formData.deliveryMethod === "group2"
                  ? "대표자 성함"
                  : "받는 분 성함"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                required
              />
            </div>
            {formData.deliveryMethod !== "group2" && (
              <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                <label
                  htmlFor="contact"
                  className="block text-lg font-medium text-gray-700 mb-2 required-label"
                >
                  {formData.deliveryMethod === "group" ||
                  formData.deliveryMethod === "group2"
                    ? "대표자 연락처"
                    : "연락처"}{" "}
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            )}
            {
              // group2 조건일 때 대표자 여권번호 입력 필드만 렌더링합니다.
              formData.deliveryMethod === "group2" && (
                <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                  <label
                    htmlFor="passportNumber"
                    className="block text-lg font-medium text-gray-700 mb-2 required-label"
                  >
                    대표자 여권번호
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              )
            }
            {formData.deliveryMethod === "group2" && (
              <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0 pt-5">
                <label
                  htmlFor="contact"
                  className="block text-lg font-medium text-gray-700 mb-2 required-label"
                >
                  대표자 연락처
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            )}
          </div>

          {/* 대표 여권 번호 입력 필드 */}

          {formData.deliveryMethod === "group" && (
            <div className="flex flex-wrap -mx-3 mb-4">
              {/* 대표자 여권번호 입력 필드 */}
              <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                <label
                  htmlFor="passportNumber"
                  className="block text-lg font-medium text-gray-700 mb-2 required-label"
                >
                  대표자 여권번호
                </label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* 묶음으로 받으실 모든 분 성함 입력 필드 */}
              <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                <label
                  htmlFor="groupNames"
                  className="block text-lg font-medium text-gray-700 mb-2 required-label"
                >
                  묶음으로 받으실 모든 분 성함
                </label>
                <input
                  type="text"
                  id="groupNames"
                  name="groupNames"
                  value={formData.groupNames}
                  onChange={handleInputChange}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          )}

          {
            // group2가 아닌 경우에만 주소 입력 필드를 렌더링합니다.
            formData.deliveryMethod !== "group2" && (
              // 주소 입력 필드와 관련된 코드를 여기에 넣으세요.

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                  <label
                    htmlFor="address"
                    className="block text-lg font-medium text-gray-700 mb-2 required-label"
                  >
                    받는 분 주소
                  </label>

                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 required-label"
                    type="text"
                    name="address"
                    value={formData.address}
                    placeholder="주소를 검색하세요 "
                    required
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleAddressSearch}
                  >
                    주소 검색
                  </button>
                </div>

                {/* 상세 주소 입력 필드 */}
                <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                  <label
                    htmlFor="detailedAddress"
                    className="block text-lg font-medium text-gray-700 mb-2 required-label"
                  >
                    상세주소
                  </label>
                  <input
                    type="text"
                    id="detailedAddress"
                    name="detailedAddress"
                    value={formData.detailedAddress}
                    onChange={handleInputChange}
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            )
          }
        </>
      )}

      {/* '직접 수령'일 때 여권 번호 입력 필드를 렌더링 */}
      {/* '직접 수령'일 때 '오시는길' 문구와 지도 보기 버튼 렌더링 */}
      {formData.deliveryMethod === "direct" && (
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <p className="text-lg font-medium text-gray-700 mb-2">오시는길</p>
            <div className="map_area mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.873350090252!2d126.8862251170676!3d37.515740624788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e606f3b229d%3A0x6970718272cf574b!2z7ISc7Jq47Yq567OE7IucIOyYgeuTse2PrOq1rCDrrLjrnpjrj5k06rCAIDY3!5e0!3m2!1sko!2skr!4v1705301329945!5m2!1sko!2skr"
                style={{ border: 0, width: "100%", height: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaForm6;
