import React, { useState, useEffect } from "react";
import VisaForm6 from "./VisaForm6";

const VisaForm1 = ({ handleChange }) => {
  const [visaType, setVisaType] = useState("");
  const [stayDuration, setStayDuration] = useState("");
  const [visaDuration, setVisaDuration] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState();
  // ... 기존의 useState 정의들 ...

  const updateAndNotifyChange = (changedField) => {
    const updatedState = {
      ...{ visaType, stayDuration, visaDuration, serviceType, calculatedPrice },
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
      visaDuration: selectedVisaType === "Other" ? "" : "Single",
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
    const selectedCalculatedPrice = e.target.value;
    updateAndNotifyChange({ calculatedPrice: selectedCalculatedPrice });
  };

  // 비자 종류, 입국 차수, 서비스 타입에 따른 가격 정보
  const visaPricing = {
    L: {
      Single: {
        normal: 110000,
        express: 170000,
        special: 210000,
        superSpecial: 300000,
      },
      Double: {
        normal: 160000,
        express: 210000,
        special: 240000,
        superSpecial: 340000,
      },
      "1YearMultiple": {
        normal: 190000,
        express: 250000,
        special: 270000,
        superSpecial: 370000,
      },
    },
    M: {
      Single: {
        normal: 110000,
        express: 170000,
        special: 210000,
        superSpecial: 300000,
      },
      Double: {
        normal: 160000,
        express: 210000,
        special: 240000,
        superSpecial: 340000,
      },
      "1YearMultiple": {
        normal: 190000,
        express: 250000,
        special: 270000,
        superSpecial: 370000,
      },
    },
    Q2: {
      Single: {
        normal: 110000,
        express: 170000,
        special: 210000,
        superSpecial: 300000,
      },
      "1-2YearMultiple": {
        normal: 190000,
        express: 250000,
        special: 270000,
        superSpecial: 370000,
      },
      "3YearMultiple": {
        normal: 200000,
        express: 260000,
        special: 280000,
        superSpecial: 380000,
      },
    },
    S1: {
      Single: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
      ResidencePermit: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
    },
    S2: {
      Single: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
      "180DayMultiple": {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
    },
    X1: {
      Single: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
      ResidencePermit: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
    },
    X2: {
      Single: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
      "180DayMultiple": {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
    },
    Z: {
      Single: {
        normal: 120000,
        express: 180000,
        special: 220000,
        superSpecial: 310000,
      },
    },
    F: {
      Single: {
        normal: 110000,
        express: 170000,
        special: 210000,
        superSpecial: 300000,
      },
      Double: {
        normal: 160000,
        express: 210000,
        special: 240000,
        superSpecial: 340000,
      },
      "1YearMultiple": {
        normal: 190000,
        express: 250000,
        special: 270000,
        superSpecial: 370000,
      },
    },
  };

  function calculateVisaPrice(visaType, visaDuration, serviceType) {
    // 옵셔널 체이닝을 사용하여 안전하게 가격 정보에 접근합니다.
    const price = visaPricing[visaType]?.[visaDuration]?.[serviceType];
    if (price === undefined) {
      throw new Error(
        `가격 정보를 찾을 수 없습니다: ${visaType}, ${visaDuration}, ${serviceType}`
      );
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
    handleChange({
      visaType,
      stayDuration,
      visaDuration,
      serviceType,
      calculatedPrice,
    });
  }, [visaType, stayDuration, visaDuration, serviceType, calculatedPrice]);

  useEffect(() => {
    if (visaType && visaDuration && serviceType) {
      try {
        const price = calculateVisaPrice(visaType, visaDuration, serviceType);
        setCalculatedPrice(price);
        console.log(`Calculated Price: ${price}`);
      } catch (error) {
        console.error("가격 계산 중 오류가 발생했습니다:", error);
        setCalculatedPrice(null);
      }
    }
  }, [visaType, visaDuration, serviceType]);

  // import React, { useState, useEffect } from "react";
  // import VisaForm6 from "./VisaForm6"; // 자식 컴포넌트를 임포트합니다.

  // const VisaForm1 = ({ handleChange }) => {
  //   // 부모 컴포넌트의 상태 정의
  //   const [visaType, setVisaType] = useState("");
  //   const [stayDuration, setStayDuration] = useState("");
  //   const [visaDuration, setVisaDuration] = useState("");
  //   const [serviceType, setServiceType] = useState("");
  //   const [calculatedPrice, setCalculatedPrice] = useState(0);

  //   // 가격을 계산하는 로직
  //   useEffect(() => {
  //     // 여기서 가격 계산 로직을 구현합니다.
  //     const price = calculateVisaPrice(visaType, stayDuration, serviceType);
  //     setCalculatedPrice(price);

  //     // 변경된 가격 정보를 상위 컴포넌트에 알립니다.
  //     handleChange({ ...{ visaType, stayDuration, visaDuration, serviceType }, calculatedPrice: price });
  //   }, [visaType, stayDuration, serviceType, handleChange]);

  // 가격 계산 함수 (가정)

  return (
    <div>
      {/* <div>
        {calculatedPrice !== null && (
          <div className="mt-5 p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold">
              발급 비용:
              {calculatedPrice > 0 ? ( // calculatedPrice가 0보다 큰 숫자인 경우에만 값을 표시합니다.
                <span className="text-red-600 font-bold">
                  <span className="inline-flex items-center">
                    <input
                      type="text"
                      value={new Intl.NumberFormat("ko-KR").format(
                        calculatedPrice
                      )}
                      readOnly
                      className="bg-transparent text-right"
                      style={{ maxWidth: "6em" }}
                    />
                    &nbsp;원
                  </span>
                </span>
              ) : (
                // calculatedPrice가 0이하이거나 유효하지 않은 경우 안내 메시지를 표시합니다.
                <span className="text-gray-500">
                  &nbsp;비자 종류를 선택해주세요.
                </span>
              )}
            </h3>
          </div>
        )}
      </div> */}
      <div className="mb-4 pt-10">
        <label
          htmlFor="visaType"
          className="block text-lg font-medium text-gray-700 mb-2 required-label"
        >
          비자 종류
        </label>
        <div className="relative">
          <select
            id="visaType"
            value={visaType}
            onChange={handleVisaTypeChange}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
          >
            <option value="" disabled>
              비자를 선택하세요
            </option>
            <option value="L">L 관광</option>
            <option value="M">M 상용</option>
            <option value="Q2">Q2 친인척</option>
            <option value="S1">S1 가족동반</option>
            <option value="S2">S2 가족동반</option>
            <option value="X1">X1 유학</option>
            <option value="X2">X2 유학</option>
            <option value="F">F 비영리초청</option>
            <option value="Z">Z 취업</option>
          </select>
        </div>
      </div>
      {/* 비자 기간 선택 필드, 선택된 비자 유형에 따라 옵션을 변경 */}
      {/* 비자 기간 선택 필드, 선택된 비자 유형에 따라 옵션을 변경 */}
      {visaType && (
        <div className="mb-4">
          <label
            htmlFor="visaDuration"
            className="block text-gray-700 text-sm font-bold mb-2 required-label"
          >
            비자 기간
          </label>
          <select
            id="visaDuration"
            value={visaDuration}
            onChange={handleVisaDurationChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {visaType === "L" || visaType === "M" || visaType === "F" ? (
              <>
                <option value="Single">단수(3개월)</option>
                <option value="Double">더블(6개월)</option>
                <option value="1YearMultiple">복수(1년)</option>
              </>
            ) : visaType === "Q2" ? (
              <>
                <option value="Single">단수</option>
                <option value="1-2YearMultiple">1-2년복수</option>
                <option value="3YearMultiple">3년복수</option>
              </>
            ) : visaType === "S1" ? (
              <>
                <option value="Single">단수(30일)</option>
                {/* <option value="ResidencePermit">
                  중국 입국 30일 이내 거류증으로 변경
                </option> */}
              </>
            ) : visaType === "S2" ? (
              <>
                <option value="Single">단수(180일)</option>
                {/* <option value="180DayMultiple">초청장허가만큼 최대180일</option> */}
              </>
            ) : visaType === "X1" ? (
              <>
                <option value="Single">단수(30일)</option>
                {/* <option value="ResidencePermit">
                  중국 입국 30일 이내 거류증으로 변경
                </option> */}
              </>
            ) : visaType === "X2" ? (
              <>
                <option value="Single">단수(180일)</option>
                {/* <option value="180DayMultiple">학습기간 만큼 최대180일</option> */}
              </>
            ) : visaType === "Z" ? (
              <>
                <option value="Single">단수(30일)</option>
                {/* <option value="ResidencePermit">
                  중국 입국 30일 이내 거류증으로 변경
                </option> */}
              </>
            ) : null}
          </select>
        </div>
      )}
      {/* 예시: 체류 기간 필드 */}
      <div className="mb-4">
        <label
          htmlFor="stayDuration"
          className="block text-lg font-medium text-gray-700 mb-2 required-label"
        >
          체류 기간
        </label>
        <div className="relative">
          <select
            id="stayDuration"
            value={stayDuration}
            onChange={handleStayDurationChange}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              체류 기간을 선택하세요
            </option>
            {(visaType === "F" || visaType === "M") && (
              <>
                <option value="30">30일</option>
                <option value="60">60일</option>
                <option value="90">90일</option>
              </>
            )}
            {visaType === "L" && (
              <>
                <option value="30">30일</option>
                <option value="60">60일</option>
              </>
            )}
            {(visaType === "S1" || visaType === "X1" || visaType === "Z") && (
              <option value="30">중국 입국 30일 이내 거류증으로 변경</option>
            )}
            {(visaType === "S2" || visaType === "X2") && (
              <option value="180">최대 180일</option>
            )}
            {visaType === "Q2" && (
              <>
                <option value="180">초청장허가만큼 최대180일</option>
                {/* <option value="1-2YearMultiple">1-2년복수</option>
                <option value="3YearMultiple">3년복수</option> */}
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
        <legend className="block text-lg font-medium text-gray-700 mb-2 required-label">
          서비스 종류
        </legend>
        <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="serviceType"
              value="normal"
              checked={serviceType === "normal"}
              onChange={handleServiceTypeChange}
              className="form-radio h-5 w-5 text-indigo-600"
              required
            />
            <span className="ml-2">일반(7-8일)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="serviceType"
              value="express"
              checked={serviceType === "express"}
              onChange={handleServiceTypeChange}
              className="form-radio h-5 w-5 text-indigo-600"
              required
            />
            <span className="ml-2">급행(6일)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="serviceType"
              value="special"
              checked={serviceType === "special"}
              onChange={handleServiceTypeChange}
              className="form-radio h-5 w-5 text-indigo-600"
              required
            />
            <span className="ml-2">특급(5일)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="serviceType"
              value="superSpecial"
              checked={serviceType === "superSpecial"}
              onChange={handleServiceTypeChange}
              className="form-radio h-5 w-5 text-indigo-600"
              required
            />
            <span className="ml-2">초특급(12시전 서류 접수 시 2일)</span>
          </label>
        </div>
      </fieldset>
      {/* 혼인 상황 필드 */}
    </div>
  );
};

export default VisaForm1;
