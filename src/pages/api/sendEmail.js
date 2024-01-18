// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import mjml2html from 'mjml';

export default async (req, res) => {
    const labels = {
        departureDate: "출국 날짜",
        arrivalDate: "도착 날짜",
        fullName: "성명",
        chineseNameBeforeNaturalization: "귀화 전 중국 이름",
        contactNumber: "연락처",
        placeOfBirth: "출생지",
        residenceAddress: "거주지 주소",
        visitPlace: "방문 장소",
        detailedAddress: "상세 주소",
        chinaContact: "중국 내 연락처",
        maritalStatus: "결혼 상태",
        startDate: "시작 날짜",
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
        name: "이름",
        contact: "연락처"
      };
      // 객체를 HTML 테이블 행으로 변환하는 함수
      const renderObjectToTableRows = (obj) => {
        return Object.entries(obj).map(([key, value]) => {
          const label = labels[key] || key;
          return `
            <tr style="background-color:#ffffff;">
              <td style="padding: 10px; border-bottom:1px solid #dddddd;">${label}</td>
              <td style="padding: 10px; border-bottom:1px solid #dddddd;">${value}</td>
            </tr>
          `;
        }).join('');
      };
  // MJML 템플릿. 사용자가 입력한 데이터를 삽입합니다.
       // 클라이언트로부터 받은 폼 데이터
       const formData = req.body;
  
      // formData의 각 항목을 순회하면서 HTML 테이블로 변환합니다.
      const tableRows = Object.entries(formData).map(([formKey, formValue]) => {
        // formValue가 객체인 경우, 내부 객체를 순회합니다.
        return typeof formValue === 'object'
          ? `<tr><td colspan="2">${formKey}</td></tr>` + renderObjectToTableRows(formValue)
          : renderObjectToTableRows({ [formKey]: formValue });
      }).join('');
  
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
      
  

const {html}  = mjml2html(mjmlContent)

  // 이메일 전송을 위한 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jhxxx7@gmail.com', // Gmail 주소
      pass: 'vhkg itnl wzbr urbb'          // Gmail 비밀번호 또는 앱 비밀번호
    }
  });
  
     // 폼 제출 로직...
  
    // fullName과 contactNumber 추출
    const fullName = formData.form2.fullName || '고객';
    const contactNumber = formData.form2.contactNumber || '연락처 정보 없음';
  
    // 이메일 전송을 위한 설정
    const mailOptions = {
      from: 'jhxxx7@gmail.com',
      to: 'jhxxx7@gmail.com',
      subject: `${fullName}님의 비자신청서 - 연락처: ${contactNumber}`,
      html: html // 이 부분은 MJML에서 변환된 HTML을 사용해야 합니다.
    };
  
    // 이메일 전송 로직...
   // 이메일 전송
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Send Mail error: ', error.message); // 에러 메시지 출력
      console.error(error); // 에러 객체 전체 출력
      res.status(500).send("Email send failed.");
    } else {
      console.log('Email sent: ', info.response);
      console.log(formData); // 전체 formData 출력
console.log('Form1:', formData.form1); // formData의 form1 객체 출력
console.log('Full Name from Form1:', formData.form1?.fullName); // form1의 fullName 필드 출력
console.log('Contact Number from Form1:', formData.form1?.contactNumber); // form1의 contactNumber 필드 출력
      res.status(200).send("Email sent successfully.");
    }
  });
};








 // 상태값과 레이블을 매핑하는 객체
 