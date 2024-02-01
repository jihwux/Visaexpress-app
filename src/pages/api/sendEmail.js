// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import mjml2html from "mjml";

export default async (req, res) => {
  console.error("asd");
  const labels = {
    visaType: "비자 유형",
    stayDuration: "체류 기간",
    visaDuration: "비자 기간",
    serviceType: "서비스 유형",
    calculatedPrice: "계산된 가격",
    departureDate: "출국 날짜",
    arrivalDate: "도착 날짜",
    fullName: "성명",
    chineseNameBeforeNaturalization: "귀화 전 중국 이름",
    contactNumber: "연락처",
    placeOfBirth: "출생지",
    residenceAddress: "거주지 주소",
    visitPlace: "중국 방문 장소",
    chinaContact: "중국 내 연락처",
    maritalStatus: "결혼 상태",
    startDate: "입사일",
    companyName: "회사명",
    position: "직책",
    supervisorName: "상사 이름",
    supervisorContact: "상사 연락처",
    relation: "관계",
    englishName: "영문 이름",
    nationality: "국적",
    dob: "생년월일",
    occupation: "직업",
    residence: "거주지",
    hasVisitedCountries: "다른 나라 방문 여부",
    hasCriminalRecord: "범죄 기록 여부",
    criminalDetails: "범죄 상세",
    hasVisaRejectionOrIllegalStay: "비자 거부 또는 불법 체류 여부",
    rejectionReason: "거부 이유",
    illegalStayRecord: "불법 체류 기록",
    countries: "방문 국가",
    travelHistory: "여행 이력",
    visitedCountries: "방문한 국가들",
    visaDenied: "비자 거부",
    overstayedVisa: "비자 기간 초과",
    criminalRecord: "범죄 기록",
    hasRecord: "기록 보유 여부",
    emergencyContact: "긴급 연락처",
    contact: "연락처",
    form4: "가족 리스트",
    form1: "신청 비자 정보",
    form2: "개인 정보",
    form3: "재직. 힉력 정보",
    form5: "방문, 불체, 범죄 기록",
    form6: "비자 접수 방법, 비자 수령 방법",
    workAddress: "직장 주소",
    schoolName: "학교 이름",
    educationLevel: "학력",
    schoolAddress: "학교 주소",
    deliveryMethod: "비자 수령 방법",
    visaApplicationMethod: "비자 접수 방법",
    name: "이름",
    contact: "연락처",
    address: "주소",
    detailedAddress: "상세 주소",
    passportNumber: "여권 번호",
    groupNames: "그룹 이름",
    expressFee: "배송비",
    socialSecurityNumber: "주민번호뒷자리",
    passportName: "여권이름",
    quick: "착불 퀵 배송",
    direct: "직접 수령 (11시~5시)",
    group: "2인 이상 묶음 익일 등기 받기(5000원)",
    express: "익일 특급 등기 배송(5000원)",
  };

  const formData = req.body;

  const deliveryMethodKoreanMap = {
    quick: "착불 퀵 배송",
    direct: "직접 수령 (11시~5시)",
    group: "2인 이상 묶음 익일 등기 받기(5000원)",
    group2: "2인 이상 묶음 대표자 외",
    express: "익일 특급 등기 배송(5000원)",
    visit: "직접 방문 (11시~4시)",
    mail: "등기로 발송",
    Single: "단수",
    Double: "더블",
    "1YearMultiple": "복수(1년)",
    "1-2YearMultiple": "1-2년복수",
    "3YearMultiple": "3년복수",
    ResidencePermit: "중국 입국 30일 이내 거류증으로 변경",
    "180DayMultiple": "초청장허가만큼 최대180일",
    normal: "보통",
    form6: {
      express: "익일 특급 등기 배송(5000원)",
      // ...form6 관련 다른 매핑
    },
    special: "특급",
    superSpecial: "초특급",
    married: "기혼",
    single: "미혼",
    divorced: "이혼",
    widowed: "사별",
  };

  const renderObjectToTableRows = (obj, labels, parentKey = "") => {
    if (Array.isArray(obj)) {
      if (typeof obj === "object" && parentKey === "") {
        // "다른 나라 방문 여부"가 false일 경우 "방문 국가" 테이블 행을 렌더링하지 않습니다.
        if (obj.hasVisitedCountries === false) {
          delete obj.countries; // "방문 국가" 데이터를 삭제합니다.
        }

        const isEmptyArray =
          obj.length === 0 ||
          obj.every((item) => Object.values(item).every((value) => !value));

        if (isEmptyArray) {
          return `
              <tr>
                <td colspan="2" style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">
                  <strong>${labels[parentKey] || parentKey}</strong>
                </td>
                <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">없음</td>
              </tr>
            `;
        }
      }

      return obj
        .map((item, index) => {
          // 렌더링할 항목이 실제로 있는지 확인합니다.
          const hasItems = Object.values(item).some((value) => value);
          if (!hasItems) return ""; // 항목이 없으면 빈 문자열을 반환합니다.

          return `
              <tr>
                <td colspan="2" style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">
                  <strong>${labels[parentKey] || parentKey} ${
            index + 1
          }</strong>
                </td>
              </tr>
              ${Object.entries(item)
                .map(([key, value]) => {
                  if (!value) return ""; // 값이 없으면 항목을 렌더링하지 않습니다.
                  if (typeof value === "boolean") {
                    value = value ? "예" : "아니오";
                  }

                  return `
                    <tr>
                      <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${
                        labels[key] || key
                      }</td>
                      <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${value}</td>
                    </tr>
                  `;
                })
                .join("")}
            `;
        })
        .join("");
    } else if (typeof obj === "object") {
      return Object.entries(obj)
        .map(([key, value]) => {
          // 불리언 값은 "예" 또는 "아니오"로 변환합니다.
          if (typeof value === "boolean") {
            value = value ? "예" : "아니오";
          }
          if (
            parentKey === "hasVisitedCountries" &&
            obj["hasVisitedCountries"] === false
          ) {
            return ""; // "방문 국가" 섹션을 렌더링하지 않습니다.
          }
          // false 값은 유효하게 처리합니다.
          if (value === null || value === undefined || value === "") {
            value = value === false ? "아니오" : "";
          }
          if (
            key === "deliveryMethod" ||
            key === "visaApplicationMethod" ||
            key === "visaDuration" ||
            key === "serviceType" ||
            key === "maritalStatus"
          ) {
            value = deliveryMethodKoreanMap[value] || value;
          }

          const label = labels[key] || key;
          const displayValue =
            typeof value === "object"
              ? renderObjectToTableRows(value, labels, key, obj) // 부모 객체를 전달합니다.
              : value;
          if (!value && value !== "아니오") return "";
          return `
            <tr>
              <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${label}</td>
              <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${displayValue}</td>
            </tr>
          `;
        })
        .join("");
    } else {
      return `
        <tr>
          <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${parentKey}</td>
          <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${obj}</td>
        </tr>
      `;
    }
  };

  // formData의 각 항목을 순회하면서 HTML 테이블로 변환합니다.
  const tableRows = Object.entries(formData)
    .map(([key, value]) => {
      const sectionLabel = labels[key] || key;
      return `
      <tr>
        <td colspan="2" style="padding: 10px; background-color:#4a90e2; color:#ffffff; font-size:18px; text-align:center;"><strong>${sectionLabel}</strong></td>
      </tr>
      ${renderObjectToTableRows(value, labels, key)}
    `;
    })
    .join("");

  // 최종 HTML 테이블
  const htmlTable = `<table style="width:100%; border-collapse:collapse;">${tableRows}</table>`;

  const mjmlContent = `
      <mjml>
        <mj-body background-color="#f0f0f0">
          <mj-section padding="20px">
            <mj-column>
    
              <!-- 테이블의 제목 -->
              <mj-text font-size="24px" color="#333333" font-family="Helvetica Neue" padding-bottom="10px">
                비자 신청 정보
              </mj-text>
              
              <!-- 테이블 스타일링 -->
              <mj-table>
                <tr style="background-color:#f9f9f9;">
                  <th style="padding: 15px 10px; border-bottom:1px solid #dddddd;">항목</th>
                  <th style="padding: 15px 10px; border-bottom:1px solid #dddddd;">내용</th>
                </tr>
                ${tableRows} <!-- 여기에 동적으로 생성된 행을 삽입합니다 -->
              </mj-table>
    
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `;

  const { html } = mjml2html(mjmlContent);

  // 이메일 전송을 위한 설정
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jhxxx7@gmail.com", // Gmail 주소
      pass: "vhkg itnl wzbr urbb", // Gmail 비밀번호 또는 앱 비밀번호
    },
  });

  // 폼 제출 로직...

  // fullName과 contactNumber 추출
  const fullName = formData.form2.fullName || "고객";
  const contactNumber = formData.form2.contactNumber || "연락처 정보 없음";

  // 이메일 전송을 위한 설정
  const adminMailOptions = {
    from: "jhxxx7@gmail.com",
    to: "jhxxx7@gmail.com",
    subject: `${fullName}님의 비자신청서 - 연락처: ${contactNumber}`,
    html: html, // 이 부분은 MJML에서 변환된 HTML을 사용해야 합니다.
  };

  // 이메일 전송 로직...
  // 이메일 전송
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error("Send Mail error: ", error.message);
      res.status(500).send("Email send to admin failed.");
    } else {
      console.log("Email sent to admin: ", info.response);

      // 고객에게 이메일 전송
      const customerEmail = formData.form2.email; // 고객의 이메일 주소를 폼 데이터에서 추출
      const customerMailOptions = {
        from: "jhxxx7@gmail.com",
        to: "jhxxx7@gmail.com", // 고객 이메일 주소ss
        subject:
          "귀하의 비자 신청서가 접수되었습니다. 신청해 주셔서 감사합니다",
        html: html, // 이 부분은 MJML에서 변환된 HTML을 사용해야 합니다.
      };

      transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          console.error("Send Mail error: ", error.message);
          res.status(500).send("Email send to customer failed.");
        } else {
          console.log("Email sent to customer: ", info.response);
          console.log(formData); // 전체 formData 출력
        }
      });
    }
  });
};

// 상태값과 레이블을 매핑하는 객체
// 관리자에게 이메일 전송
