import React, { useState, useEffect } from "react";

const VisaForm1 = ({ handleChange }) => {
  const [visaType, setVisaType] = useState("");
  const [stayDuration, setStayDuration] = useState("");
  const [visaDuration, setVisaDuration] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState();
   // ... 기존의 useState 정의들 ...

 
  const updateAndNotifyChange = (changedField) => {
    const updatedState = {
      ...{ visaType, stayDuration, visaDuration, serviceType,calculatedPrice },
      ...changedField,
    };

    setVisaType(updatedState.visaType);
    setStayDuration(updatedState.stayDuration);
    setVisaDuration(updatedState.visaDuration);
    setServiceType(updatedState.serviceType);
    setCalculatedPrice(updatedState.calculatedPrice);

    handleChange(updatedState);
  };

  const handleVisaTypeChange = (e) => {
    const selectedVisaType = e.target.value;
    updateAndNotifyChange({
      visaType: selectedVisaType,
      visaDuration: selectedVisaType === "Other" ? "" : "Single"
    });
  };

  const handleVisaDurationChange = (e) => {
    const selectedVisaDuration = e.target.value;
    updateAndNotifyChange({ visaDuration: selectedVisaDuration });
  };

  const handleStayDurationChange = (e) => {
    const selectedStayDuration = e.target.value;
    updateAndNotifyChange({ stayDuration: selectedStayDuration });
  };

  
    const handleServiceTypeChange = (e) => {
      const selectedServiceType = e.target.value;
      updateAndNotifyChange({ serviceType: selectedServiceType });
    };
  
    const handlecalcTypeChange = (e) => {
      const selectedCalculatedPrice  = e.target.value;
      updateAndNotifyChange({ calculatedPrice: selectedCalculatedPrice });
    };
  
   
// 비자 종류, 입국 차수, 서비스 타입에 따른 가격 정보
const visaPricing = {
  L: {
    Single: { normal: 110000, express: 165000, special: 200000, superSpecial: 230000},
    Double: { normal: 145000, express: 190000, special: 220000, superSpecial: 250000 },
    '1YearMultiple': { normal: 190000, express: 235000, special: 255000 },
  },
  M: { // '상용'을 'M'으로 가정합니다.
    Single: { normal: 110000, express: 165000, special: 200000 ,superSpecial: 230000},
    Double: { normal: 145000, express: 190000, special: 220000 ,superSpecial: 250000},
    '1YearMultiple': { normal: 190000, express: 235000, special: 255000 },
  },
  Q1: {
    'ResidencePermit': { normal: 130000, express: 190000, special: 210000 },
  },
  Q2: {
    Single: { normal: 110000, express: 165000, special: 200000 },
    Double: { normal: 145000, express: 190000, special: 220000 },
    '1-2YearMultiple': { normal: 190000, express: 235000, special: 255000 },
    '3YearMultiple': { normal: 200000, express: 245000, special: 275000 },
  },
  Z: {
    'ResidencePermit': { normal: 120000, express: 165000, special: 200000 },
  },
  S1: {
    'ResidencePermit': { normal: 120000, express: 165000, special: 200000 },
  },
  S2: {
    Single: { normal: 120000, express: 165000, special: 200000 },
    Double: { normal: 145000, express: 190000, special: 220000 },
  },
  X1: {
    'ResidencePermit': { normal: 120000, express: 165000, special: 200000 },
  },
  X2: {
    Single: { normal: 120000, express: 165000, special: 200000 },
  },
};

function calculateVisaPrice(visaType, visaDuration, serviceType) {
  // 옵셔널 체이닝을 사용하여 안전하게 가격 정보에 접근합니다.
  const price = visaPricing[visaType]?.[visaDuration]?.[serviceType];
  if (price === undefined) {
    throw new Error(`가격 정보를 찾을 수 없습니다: ${visaType}, ${visaDuration}, ${serviceType}`);
  }
  return price;
}
// 선택값이 모두 있을 때 가격 계산

// useEffect(() => {
//   // 모든 값이 유효한지 확인합니다.
//   if (visaType && visaDuration && serviceType) {
//     try {
//       const price = calculateVisaPrice(visaType, visaDuration, serviceType);
//       console.log(`Calculated Price: ${price}`);
//     } catch (error) {
//       // 에러 처리
//       console.error('가격 계산 중 오류가 발생했습니다:', error);
//     }
//   }
// }, [visaType, visaDuration, serviceType]);
useEffect(() => {
  handleChange({ visaType, stayDuration, visaDuration, serviceType, calculatedPrice });
}, [visaType, stayDuration, visaDuration, serviceType, calculatedPrice]);

useEffect(() => {
  if (visaType && visaDuration && serviceType) {
    try {
      const price = calculateVisaPrice(visaType, visaDuration, serviceType);
      setCalculatedPrice(price);
      console.log(`Calculated Price: ${price}`);
    } catch (error) {
      console.error('가격 계산 중 오류가 발생했습니다:', error);
      setCalculatedPrice(null);
    }
  }
}, [visaType, visaDuration, serviceType]);




  return (
    <div>
     <div>
  {calculatedPrice !== null && (
    <div className="mt-5 p-4 border border-green-400 rounded shadow-lg">
      <h3 className="text-lg font-semibold">
        발급 비용: <span className="text-green-600 font-bold"><input
        type="number"
        value={calculatedPrice}
        onChange={handlecalcTypeChange}
        className="mt-2 border-2 border-green-600"
      />원</span>
      </h3>
      {/* 이 부분이 추가된 입력 필드입니다. */}
      
    </div>
  )}
</div>
      <div className="mb-4 pt-10">
        <label
          htmlFor="visaType"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          비자 종류
        </label>
        <div className="relative">
          <select
            id="visaType"
            value={visaType}
            onChange={handleVisaTypeChange}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              비자를 선택하세요
            </option>
            <option value="L">L 관광</option>
            <option value="M">M 상용</option>
            <option value="Q2">Q2 탄친</option>
            <option value="Other">기타</option>
          </select>
        </div>
      </div>
      {/* 비자 기간 선택 필드, 선택된 비자 유형에 따라 옵션을 변경 */}
      {visaType && (
        <div className="mb-4">
          <label
            htmlFor="visaDuration"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            비자 기간
          </label>
          <select
            id="visaDuration"
            value={visaDuration}
            onChange={handleVisaDurationChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            // disabled={visaType === "Other"}
          >
            {visaType === "L" || visaType === "M" ? (
              <>
                <option value="Single">단수</option>
                <option value="Double">6개월-더블</option>
                <option value="Multiple">1년-복수</option>
              </>
            ) : visaType === "Q2" ? (
              <>
                <option value="Single">단수</option>
                <option value="1YearMultiple">1년-복수</option>
                <option value="2YearMultiple">2년-복수</option>
                <option value="3YearMultiple">3년-복수</option>
                <option value="5YearMultiple">5년-복수</option>
              </>
            ) : visaType === "Other" ? (
              <>
                <option value="Q1">Q1</option>
                <option value="X1">X1</option>
                <option value="X2">X2</option>
                <option value="Z">Z</option>
                <option value="F">F</option>
              </>
            ) : null}
          </select>
        </div>
      )}
      {/* 예시: 체류 기간 필드 */}
      <div className="mb-4">
        <label
          htmlFor="stayDuration"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          체류 일자
        </label>
        <div className="relative">
          <select
            id="stayDuration"
            value={stayDuration}
            onChange={handleStayDurationChange}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              체류 일자를 선택하세요
            </option>
            <option value="30">30일</option>
            <option value="60">60일</option>
            <option value="90">90일</option>
            {visaType === "Q2" && (
              <>
                <option value="120">120일</option>
                <option value="150">150일</option>
                <option value="180">180일</option>
              </>
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 7L10 11.5 14.5 7 16 8.5l-6 6-6-6z" />
            </svg>
          </div>
        </div>
      </div>
      {/* ... 다른 필요한 필드 추가 */}
      <fieldset className="mb-4">
  <legend className="block text-lg font-medium text-gray-700 mb-2">
    서비스 종류
  </legend>
  <div className="flex items-center gap-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="serviceType"
        value="normal"
        checked={serviceType === 'normal'}
        onChange={handleServiceTypeChange}
        className="form-radio h-5 w-5 text-indigo-600"
      />
      <span className="ml-2">보통</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="serviceType"
        value="express"
        checked={serviceType === 'express'}
        onChange={handleServiceTypeChange}
        className="form-radio h-5 w-5 text-indigo-600"
      />
      <span className="ml-2">급행</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="serviceType"
        value="special"
        checked={serviceType === 'special'}
        onChange={handleServiceTypeChange}
        className="form-radio h-5 w-5 text-indigo-600"
      />
      <span className="ml-2">특급</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="serviceType"
        value="superSpecial"
        checked={serviceType === 'superSpecial'}
        onChange={handleServiceTypeChange}
        className="form-radio h-5 w-5 text-indigo-600"
      />
      <span className="ml-2">초특급</span>
    </label>
  </div>
</fieldset>
      {/* 혼인 상황 필드 */}
      
    </div>
  );
};

export default VisaForm1;




 