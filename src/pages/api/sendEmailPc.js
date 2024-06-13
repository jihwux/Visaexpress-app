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
    form3: "재직, 학력 정보",
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
    },
    special: "특급",
    superSpecial: "초특급",
    married: "기혼",
    single: "미혼",
    divorced: "이혼",
    widowed: "사별",
  };

  const renderObjectToTableRows = (obj, labels, parentKey = "") => {
    // 객체에 대한 처리
    if (typeof obj === "object" && !Array.isArray(obj)) {
      // "다른 나라 방문 여부"가 false라면 "방문 국가" 데이터를 렌더링하지 않습니다.
      if (obj.hasVisitedCountries === false) {
        // "방문 국가" 데이터를 삭제합니다.
        delete obj.countries;
      }

      return Object.entries(obj)
        .map(([key, value]) => {
          // "방문 국가"가 렌더링되지 않도록 조건을 추가합니다.
          if (key === "countries" && obj.hasVisitedCountries === false) {
            return ""; // "방문 국가" 섹션을 렌더링하지 않습니다.
          }

          // 불리언 값은 "예" 또는 "아니오"로 변환합니다.
          if (typeof value === "boolean") {
            value = value ? "예" : "아니오";
          }
          // false 값은 유효하게 처리합니다.
          if (value === null || value === undefined || value === "") {
            value = value === false ? "아니오" : "";
          }
          // 특정 키에 대한 한국어 매핑
          if (
            key === "deliveryMethod" ||
            key === "visaApplicationMethod" ||
            key === "visaDuration" ||
            key === "serviceType" ||
            key === "maritalStatus"
          ) {
            value = deliveryMethodKoreanMap[value] || value;
          }
          // 레이블과 값을 사용하여 테이블 행을 생성합니다.
          const label = labels[key] || key;
          const displayValue =
            typeof value === "object"
              ? renderObjectToTableRows(value, labels, key)
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
    }

    // 배열에 대한 처리
    if (Array.isArray(obj)) {
      // 배열이 비어 있거나 모든 항목이 빈 값인 경우 처리

      if (parentKey === "countries" && obj.hasVisitedCountries === false) {
        const isEmptyOrBlankObjects =
          obj.length === 0 ||
          obj.every((item) => Object.keys(item).length === 0);
        if (isEmptyOrBlankObjects) {
          return ""; // "방문 국가" 섹션을 렌더링하지 않습니다.
        }
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
      // 배열 요소들에 대한 렌더링 로직
      return obj
        .map((item, index) => {
          const hasItems = Object.values(item).some((value) => value);
          if (!hasItems) return "";

          return `
          <tr>
            <td colspan="2" style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">
              <strong>${labels[parentKey] || parentKey} ${index + 1}</strong>
            </td>
          </tr>
          ${Object.entries(item)
            .map(([key, value]) => {
              if (!value) return "";
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
    } else {
      return `
        <tr>
          <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${parentKey}</td>
          <td style="padding: 10px; border-bottom:1px solid #dddddd; background-color:#ffffff;">${obj}</td>
        </tr>
      `;
    }

    // 기타 데이터 타입에 대한 처리...
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

  // 폼 제출 로직...

  // fullName과 contactNumber 추출
  // fullName과 contactNumber 추출
  const fullName = formData.form2.fullName || "고객";
  const contactNumber = formData.form2.contactNumber || "연락처 정보 없음";
  const customerEmail = formData.form5.emergencyContact.email; // 비상 연락처에서 받은 고객의 이메일 주소

  // 콘솔에 fullName, contactNumber, customerEmail 값을 출력합니다.
  console.log("fullName:", fullName);
  console.log("contactNumber:", contactNumber);
  console.log("customerEmail:", customerEmail);
  // 이메일 전송을 위한 설정
  console.log("formData:", formData);

  // 이메일 전송 로직...
  // 이메일 전송
  // 관리자에게 이메일 전송 로직
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // user: "jhxxx7@gmail.com",
      // pass: "vhkg itnl wzbr urbb",ws
      user: "visaexpress2183@gmail.com", // Gmail 주소
      pass: "cian rywl mwvb ohmv", // Gmail 비밀번호 또는 앱 비밀번호
    },
  });

  const adminMailOptions = {
    from: "visaexpress2183@gmail.com",
    to: "visaexpress2183@gmail.com",
    subject: `${fullName}님의 비자신청서 - 연락처: ${contactNumber}`,
    html: html,
  };

  const firstCustomerMailOptions = {
    from: "visaexpress2183@gmail.com",
    to: customerEmail,
    subject: "귀하의 비자 신청서가 접수되었습니다. 신청해 주셔서 감사합니다",
    html: html,
  };

  const secondCustomerMailOptions = {
    from: "visaexpress2183@gmail.com",
    to: "hg_10@naver.com",
    subject: "귀하의 비자 신청서가 접수되었습니다. 신청해 주셔서 감사합니다",
    html: html,
  };

  const sendMailAsync = (mailOptions) => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Send Mail error: ", error);
          reject(error);
        } else {
          console.log("Email sent: ", info.response);
          resolve(info);
        }
      });
    });
  };

  try {
    // await sendMailAsync(adminMailOptions);
    // await sendMailAsync(firstCustomerMailOptions);
    await sendMailAsync(secondCustomerMailOptions);
    res.status(200).json({ message: "All emails sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Email send failed", error: error.message });
  }
};
