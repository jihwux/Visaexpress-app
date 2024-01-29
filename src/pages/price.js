import React, { useState } from "react";

const Price = () => {
  const [activeTab, setActiveTab] = useState("L");

  const visaCategories = {
    L: "L 관광 비자",
    M: "M 상용 비자",
    Q2: "Q2 친인척",
    S1S2: "S1/S2 가족동반",
    X1X2: "X1/X2 유학비자",
    F: "F 비영리 비자",
    Z: "Z 취업비자",
    // ... other categories with their Korean names
  };

  const visaPricing = {
    L: [
      [
        "L 관광 단수",
        "3개월",
        "30일/60일",
        "1회",
        "110,000",
        "170,000",
        "210,000",
        "300,000",
      ],
      [
        "L 관광 복수",
        "6개월",
        "30일 / 60일",
        "2회",
        "160,000",
        "210,000",
        "240,000",
        "340,000",
      ],
      [
        "L 관광 연간",
        "1년",
        "30일/60일",
        "횟수 제한 없음",
        "190,000",
        "250,000",
        "270,000",
        "370,000",
      ],
    ],
    M: [
      [
        "M 상용 단수",
        "3개월",
        "30일/60일/90일",
        "1회",
        "110,000",
        "170,000",
        "210,000",
        "300,000",
      ],
      [
        "M 상용 복수",
        "6개월",
        "30일/60일/90일",
        "2회",
        "160,000",
        "210,000",
        "240,000",
        "340,000",
      ],
      [
        "M 상용 연간",
        "1년",
        "30일/60일/90일",
        "횟수 제한 없음",
        "190,000",
        "250,000",
        "270,000",
        "370,000",
      ],
    ],
    Q2: [
      [
        "Q2 단수",
        "초청장 기간",
        "초청장 기간 (최대 180일)",
        "1회",
        "110,000",
        "170,000",
        "210,000",
        "300,000",
      ],
      [
        "Q2 1-2년 복수",
        "1-2년",
        "회당 최대 180일",
        "횟수제한 없음",
        "190,000",
        "250,000",
        "270,000",
        "370,000",
      ],
      [
        "Q2 3년 복수",
        "3년",
        "회당 최대 180일",
        "횟수제한 없음",
        "200,000",
        "260,000",
        "280,000",
        "380,000",
      ],
    ],
    S1S2: [
      [
        "S1 단수",
        "3개월",
        "중국 입국 30일 이내 거주증으로 변경",
        "1회",
        "120,000",
        "180,000",
        "220,000",
        "310,000",
      ],
      [
        "S2 단수",
        "3개월",
        "초청장 기간 (최대 180일)",
        "1회",
        "120,000",
        "180,000",
        "220,000",
        "310,000",
      ],
    ],
    X1X2: [
      [
        "X1 단수",
        "3개월",
        "중국 입국 30일 이내 거주증으로 변경",
        "1회",
        "120,000",
        "180,000",
        "220,000",
        "310,000",
      ],
      [
        "X2 단수",
        "3개월",
        "학습 기간 (최대 180일)",
        "1회",
        "120,000",
        "180,000",
        "220,000",
        "310,000",
      ],
    ],
    F: [
      [
        "F 단수",
        "3개월",
        "30일/60일/90일",
        "1회",
        "110,000",
        "170,000",
        "210,000",
        "300,000",
      ],
      [
        "F 복수",
        "6개월",
        "30일/60일/90일",
        "2회",
        "160,000",
        "210,000",
        "240,000",
        "340,000",
      ],
      [
        "F 연간",
        "1년",
        "30일/60일/90일",
        "횟수 제한 없음",
        "190,000",
        "250,000",
        "270,000",
        "370,000",
      ],
    ],
    Z: [
      [
        "Z 단수",
        "3개월",
        "중국 입국 30일 이내 거주증으로 변경",
        "1회",
        "120,000",
        "180,000",
        "220,000",
        "310,000",
      ],
    ],
  };

  const renderTable = (visaType) => (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              비자 종류
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              비자 유효기간
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              체류 기간
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              입국 가능 횟수
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              일반
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              급행
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              특급
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              초특행
            </th>
          </tr>
        </thead>
        <tbody>
          {visaType.map((detail, index) => (
            <tr key={index}>
              {detail.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="flex-grow container mx-auto my-8">
      <div className="container mx-auto px-4 pt-10">
        {/* 제목 */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            비자 가격 정보
          </h1>
          <p className="text-md text-gray-600 mt-2">
            필요한 비자 유형을 선택하여 가격을 확인하세요.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* 탭 메뉴 */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <ul className="border-b md:border-b-0 md:border-r-2 border-gray-200">
              {Object.keys(visaCategories).map((key) => (
                <li key={key} className="mb-1">
                  <button
                    onClick={() => setActiveTab(key)}
                    className={`block w-full text-left px-4 py-2 rounded-r-full transition duration-300 ease-in-out focus:outline-none ${
                      activeTab === key
                        ? "bg-red-500 text-white font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {visaCategories[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* 탭 콘텐츠 */}
          <div className="w-full md:w-3/4 p-4">
            {activeTab && renderTable(visaPricing[activeTab])}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Price;
