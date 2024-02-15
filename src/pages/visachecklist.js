import React, { useState } from "react";

const Visachecklist = () => {
  const [activeTab, setActiveTab] = useState("L");
  const visaCategories = {
    L: "L 관광 비자",
    M: "M 상용 비자",
    Q2: "Q2 친인척",
    S1S2: "S1/S2 가족동반",
    X1X2: "X1/X2 유학비자",
    F: "F 비영리 비자",
    Z: "Z 취업비자",
    Minor: "미성년자 추가서류",
    Naturalized: "귀화자 추가서류",
    // ... other categories with their Korean names
  };
  const requiredDocumentsData = {
    L: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n   단수 7개월 이상\n   더블 10개월 이상\n   복수 16개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능.",
        "필수 기재 사항 반드시 기입 必.",
      ],
      otherDetails: [
        "★복수 비자 신청 시, 여권에 중국 입국 기록 2회 이상 必.\n★입국 기록이 구여권에 있을 경우, 구여권+여권발급기록증명서(정부24 혹은 주민센터 발급가능) 추가 제출.\n*구여권이 없을 경우 복수 비자 신청 불가.",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
      ],
    },
    M: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
        "중국 회사 초청장",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n   단수 7개월 이상\n   더블 10개월 이상\n   복수 16개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능.",
        "필수 기재 사항 반드시 기입 必.",
        "▶자사 초청장 양식 참고.(파일 다운로드)\n▶초안 먼저 작성, 컨펌 후 서명 날인.\n★양식 내용 빠짐 없이 모두 기재 必!",
      ],
      otherDetails: [
        "★복수 비자 신청 시, 여권에 중국 입국 기록 1회 이상 必.\n★입국 기록이 구여권에 있을 경우, 구여권+여권발급기록증명서(정부24 혹은 주민센터 발급가능) 추가 제출.\n*구여권이 없을 경우 복수 비자 신청 불가.",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
        "M 단수 초정장 양식 다운로드\n\n\n M 더블 초정장 양식 다운로드\n\n\nM 복수 초정장 양식 다운로드\n",
      ],
      downloadLinks: {
        singleEntry: "/m1.docx",
        doubleEntry: "/m2.docx",
        multipleEntry: "/m3.docx",
      },
    },
    Q2: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
        "초청인 작성 초청장(사본)",
        "초청인 중국 신분증(사본)",
        "관계 입증 서류 (3년 복수 비자만)",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n   Q2 단수 10개월 이상\n   Q2 1-2년 복수 13~24개월 이상\n   Q2 3년 복수 43개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능.",
        "필수 기재 사항 반드시 기입 必.",
        "▶초청 인원 수 만큼 작성 必. 한장에 작성 X.\nex) 초청인이 3명인 경우, 초청인 별로 초청장 3장 작성.",
        "▶신분증 유효기간 확인 必.\n (신분증 앞 뒤면 복사본)",
        "▶가족관계증명서/혼인관계증명서/결혼/중국 호구부/친속공증 등\n※ 서류 발급 시, 상세 원본/ 주민번호 뒷자리 공개로 발급 必.",
      ],
      otherDetails: [
        "★복수 비자 신청 시, 여권에 중국 입국 기록 2회 이상 必.\n★입국 기록이 구여권에 있을 경우, 구여권+여권발급기록증명서(정부24 혹은 주민센터 발급가능) 추가 제출.\n*구여권이 없을 경우 복수 비자 신청 불가.",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
        "Q2 초정장 양식 다운로드",
        "",
        "※ 서류 발급 시, 상세 원본/ 주민번호 뒷자리 공개로 발급 必.",
      ],
      downloadLinks: {
        Q2InvitationForm: "/q2.docx",
      },
    },
    S1S2: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
        "초청인 작성 초청장(사본)",
        "초청인 여권 및 거류증 (사본)",
        "가족관계증명서(원본)",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n   S1 7개월 이상\n   S2 10개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능.",
        "필수 기재 사항 반드시 기입 必.",
        "▶초청 인원 수 만큼 작성 必. 한장에 작성 X.\nex) 초청인이 3명인 경우, 초청인 별로 초청장 3장 작성.",
        "▶거류증 기간 4개월 이상 남아 있어야 함.",
        "▶상세 원본/주민번호 모두 공개로 발급.\n▶신청 인원 별 본인 이름으로 발행.",
      ],
      otherDetails: [
        "",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
        "S1 초정장 양식 다운로드\n\n\nS2 초정장 양식 다운로드",
        "",
        "",
      ],
      downloadLinks: {
        S1InvitationForm: "/s1.docx",
        S2InvitationForm: "/s2.docx",
      },
    },
    X1X2: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
        "입학허가서 원본 및 사본",
        "JW202 원본 및 사본",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n   X1 7개월 이상\n   X2 10개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능.",
        "▶필수 기재 사항 반드시 기입 必.",
        "",
        "JW202에 명시되어 있는 학습 등록 기간 전에 신청.",
      ],
      otherDetails: [
        "",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
        "",
        "*유효한 거류증이 있는 경우, 재학증명서(원본)",
        // "서류 보내실 곳: \n서울특별시 영등포구 경인로77길49, 상가 2층 201-4호 (리버뷰 신안인스빌) \n비자익스프레스 070-8028-3829/010-7775-2183",
      ],
    },

    Z: {
      requiredDocuments: [
        "여권(원본)",
        "여권용 증명사진 1매",
        "신청서: 온라인 신청하기",
        "취업 허가서 중문+영문(사본)",
      ],
      documentRegulations: [
        "▶사증 페이지 2면 이상\n▶여권 유효기간\n    7개월 이상\n(여권 케이스는 빼주셔야 됩니다. 반환 불가X)",
        "▶6개월 이내 증명사진(흰색 배경)\n▶악세사리 착용 금지. 안경 없이 귀, 이마 노출 必.\n▶여권과 동일 사진 사용 시, 여권 발급일 6개월 이내만 사용 가능",
        "▶필수 기재 사항 반드시 기입 必.",
      ],
      otherDetails: [
        "",
        "*남는 사진은 폐기처리.",
        "*온라인 신청이 어려울 경우, 신청서 양식 엑셀 파일 제공.(별도 요청)",
        "*취업 허가서는 중화인민공화국 외국인취업허가통지서 신청 허가를 받아야 됩니다.",

        // "서류 보내실 곳: \n서울특별시 영등포구 경인로77길49, 상가 2층 201-4호 (리버뷰 신안인스빌) \n비자익스프레스 070-8028-3829/010-7775-2183",
      ],
    },
    Minor: {
      requiredDocuments: [
        "▶미성년자가 현 여권에 중국 입국 기록(중국 비자면+입국 도장)이 있을 경우, 추가 서류 필요 없음.\n\n\n\n" +
          "▶1. 미성년자가 중국 다녀온 기록(비자면+도장)이 있지만 구여권에 있는 경우,\n\n\n" +
          "구여권 및 여권발급기록증명서(국문) 원본 제출 必.\n\n\n\n" +
          "2. 중국 다녀온 기록이 없거나, 구여권 폐기로 증빙할 수 없는 경우,\n\n\n" +
          "(1) 아이 이름 기준으로 발급된 가족관계증명서(상세)원본, 주민등록번호 다 보이게 발급 필수.\n\n\n" +
          "(2) 아이 아버지 기본증명서(상세) 원본, 주민등록번호 다 보이게 발급 필수.\n\n\n" +
          "(3) 아이 어머님 기본증명서(상세) 원본, 주민등록번호 다 보이게 발급 필수.\n\n\n\n" +
          "*미성년자 부모 중 귀화자 또는 중국 국적자가 있을 경우, 사전 문의 필수.",
      ],
    },
    Naturalized: {
      requiredDocuments: [
        "▶현 여권에 중국 입국 기록(중국 비자면+입국 도장)이 있을 경우, 추가 서류 필요 없음.\n\n\n\n" +
          "▶1. 귀화자가 중국 다녀온 기록(비자면+도장)이 있지만 구여권에 있는 경우,\n\n\n" +
          "구여권 및 여권발급기록증명서(국문) 원본 제출 必.\n\n\n\n" +
          "2. 귀화 후 첫 비자 신청\n\n\n" +
          "(1) 외국 국적 포기 확인서 원본(출입국사무소 발급/ 이전국적 중화인민공화국, 중국만 가능)\n\n\n" +
          "(2) 기본증명서(상세) 원본/ 주민등록번호 뒷번호 공개로 발급 必.\n\n\n\n" +
          "※자녀 부모님 중 귀화자 또는 중국 국적자가 있을 경우, 사전 문의 필수",
      ],
    },

    // 다른 비자 데이터도 이와 비슷한 형식으로 추가될 수 있습니다.
  }; // renderWithLineBreaksAndLinks 함수 수정
  // renderWithLineBreaksAndLinks 함수
  // renderWithLineBreaksAndLinks 함수

  function renderWithLineBreaksAndLinks(text, downloadLinks) {
    const linkMappings = {
      "M 단수 초정장 양식 다운로드": {
        key: "singleEntry",
        filename: "M단수초정장양식.docx",
      },
      "M 더블 초정장 양식 다운로드": {
        key: "doubleEntry",
        filename: "M더블초정장양식.docx",
      },
      "M 복수 초정장 양식 다운로드": {
        key: "multipleEntry",
        filename: "M복수초정장양식.docx",
      },
      // 다운로드 링크 레이블과 한글 파일명 매핑
      "S1 초정장 양식 다운로드": {
        key: "S1InvitationForm",
        filename: "S1초청장양식.docx",
      },
      "S2 초정장 양식 다운로드": {
        key: "S2InvitationForm",
        filename: "S2초청장양식.docx",
      },
      "Q2 초정장 양식 다운로드": {
        key: "Q2InvitationForm",
        filename: "Q2초청장양식.docx",
      },

      // 다른 링크 레이블과 한글 파일명을 여기에 추가할 수 있습니다.
    };

    return text.split("\n").map((line, index, array) => {
      // 연속된 두 개의 빈 줄을 감지하고, 두 개의 <br /> 태그를 렌더링합니다.
      if (line === "" && index < array.length - 1) {
        if (array[index + 1] === "") {
          // 다음 줄도 비어있다면 두 개의 <br /> 태그로 두 줄 공백을 만듭니다.
          if (index < array.length - 2 && array[index + 2] === "") {
            array[index + 1] = ""; // 다음 줄을 무시하기 위해 빈 문자열로 변경합니다.
            return [<br key={`br1-${index}`} />, <br key={`br2-${index}`} />];
          } else {
            // 그렇지 않다면 하나의 <br /> 태그로 줄바꿈을 처리합니다.
            return <br key={`br-${index}`} />;
          }
        }
      }
      // 나머지 코드는 이전과 동일합니다.
      // ...
      // 나머지 코드는 이전과 동일합니다.
      // ...

      // 링크 레이블과 매핑된 객체를 순회하며 해당하는 레이블을 찾습니다.
      // 링크 레이블과 매핑된 객체를 순회하며 해당하는 레이블을 찾습니다.
      // ... 기존 코드 ...

      // 링크 생성 로직
      for (const [label, { key, filename }] of Object.entries(linkMappings)) {
        if (line.includes(label)) {
          const url = downloadLinks[key];
          return url ? (
            <a
              key={index}
              href={url}
              download={filename} // 'download' 속성에 한글 파일명을 지정
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-800 hover:underline hover:underline-2 hover:underline-red-300"
            >
              {line.replace(label, "")}
              <span className="text-red-500 hover:text-red-800 hover:underline hover:underline-2 hover:underline-red-300">
                {label}
              </span>
            </a>
          ) : (
            <span key={index}>{line}</span>
          );
        }
      }

      // ... 기존 코드 ...
      // 해당되는 레이블이 없는 경우 원래 텍스트를 반환합니다.
      return <span key={index}>{line}</span>;
    });
  }

  // JSX 코드 수정

  // 그리고 이 함수를 데이터를 렌더링하는 부분에서 호출합니다.
  // 예를 들어, `otherDetails` 배열의 세 번째 항목을 렌더링한다고 가정할 때:
  // 이전에 정의한 renderWithLineBreaksAndLinks 함수를 사용하는 부분
  // {
  //   requiredDocumentsData[activeTab]?.otherDetails.map((detail, index) =>
  //     renderWithLineBreaksAndLinks(detail, requiredDocumentsData.downloadLinks)
  //   );
  // }
  // ...

  return (
    <main className="flex-grow container mx-auto my-8">
      <div className="container mx-auto px-4 pt-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            필요 서류 확인
          </h1>
          <p className="text-md text-gray-600 mt-2">
            비자 유형에 필요한 서류 목록입니다.
          </p>
        </div>
        {/* Flex layout changes to column direction on small screens */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <ul className="space-y-2 border-r-2 border-gray-200 md:block">
              {Object.keys(requiredDocumentsData).map((key) => (
                <li key={key} className="last:mb-0">
                  <button
                    onClick={() => setActiveTab(key)}
                    className={`block w-full text-left px-4 py-2 rounded-r-full transition duration-300 ease-in-out focus:outline-none ${
                      activeTab === key
                        ? "bg-red-500 text-white font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {visaCategories[key] || key}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-4/4 w-4/4 ">
            {activeTab && (
              <div className="overflow-x-auto md:overflow-x-visible">
                {" "}
                {/* 모바일에서는 스크롤, 더 큰 화면에서는 스크롤 없음 */}
                <table className="w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        필요 서류
                      </th>
                      {activeTab !== "Minor" && activeTab !== "Naturalized" && (
                        <>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                            서류 규정
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                            기타 상세
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {requiredDocumentsData[activeTab]?.requiredDocuments.map(
                      (document, index) => (
                        <tr key={`document-${index}`}>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {renderWithLineBreaksAndLinks(
                              document,
                              requiredDocumentsData[activeTab].downloadLinks
                            )}
                          </td>
                          {activeTab !== "Minor" &&
                            activeTab !== "Naturalized" && (
                              <>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {renderWithLineBreaksAndLinks(
                                    requiredDocumentsData[activeTab]
                                      ?.documentRegulations[index] || "",
                                    requiredDocumentsData[activeTab]
                                      .downloadLinks
                                  )}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {renderWithLineBreaksAndLinks(
                                    requiredDocumentsData[activeTab]
                                      ?.otherDetails[index] || "",
                                    requiredDocumentsData[activeTab]
                                      .downloadLinks
                                  )}
                                </td>
                              </>
                            )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
            <div className="md:w-3/4 ">
              {/* 기존 테이블 코드 */}
              <table className="min-w-full">
                {/* thead, tbody 등의 테이블 내용 */}
              </table>

              {/* 테이블 아래 배치할 정보 */}
              <div className="bg-gray-100 mt-4">
                <div className=" py-3">
                  <div className="font-medium text-gray-900">
                    서류 보내실 곳:
                  </div>
                </div>
                <div className=" py-1">
                  <div className="text-gray-600">
                    서울특별시 영등포구 경인로77길49, 상가 2층 201-4호 (리버뷰
                    신안인스빌)
                  </div>
                </div>
                <div className=" py-1">
                  <div className="text-gray-600">
                    비자익스프레스
                    <a
                      href="tel:070-8028-3829"
                      className="text-red-500 hover:text-red-800"
                    >
                      &nbsp; 070-8028-3829
                    </a>
                    <span> </span>
                    <a
                      href="tel:010-7775-2183"
                      className="text-red-500 hover:text-red-800"
                    >
                      010-7775-2183
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Visachecklist;
// CSS: Tailwind CSS를 사용한 예시입니다.
// table-layout: auto로 설정하여 셀의 내용에 따라 너비가 유동적으로 변하게 합니다.
// md:table-fixed는 중간 크기의 화면에서는 고정된 테이블 레이아웃을 사용합니다.
