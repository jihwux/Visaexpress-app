// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const PaymentPage = () => {
//   const IMP_UID = "imp21001741"; // 가맹점 식별코드, 실제 코드로 변경해야 함
//   const [params, setParams] = useState({
//     pg: "tosspayments",
//     pay_method: "card",
//     name: "테스트 주문",
//     merchant_uid: `merchant_${Date.now()}`,
//     amount: 100,
//     escrow: false,
//     tax_free: 3000,
//     buyer_name: "홍길동",
//     buyer_email: "buyer@example.com",
//     buyer_tel: "02-1670-5176",
//     buyer_addr: "성수이로 20길 16",
//     buyer_postcode: "04783",
//     // m_redirect_url: "/success", // 필요시 주석 해제 후 사용
//   });
//   const [result, setResult] = useState();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const IMP = window.IMP; // 아임포트 라이브러리 추출
//       IMP.init(IMP_UID); // 가맹점 식별코드로 아임포트 초기화
//     }
//   }, []);

//   const onClickPayment = () => {
//     const IMP = window.IMP; // 아임포트 라이브러리 추출
//     IMP.request_pay(params, async (response) => {
//       // 결제 후 콜백 함수
//       setResult(response);

//       if (response.success) {
//         // 결제 성공 시 로직
//         try {
//           // 백엔드로 결제 정보를 전송해 검증합니다.
//           const verifyResponse = await fetch("/api/verify-payment", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ imp_uid: response.imp_uid }),
//           });
//           const verifyResult = await verifyResponse.json();

//           if (verifyResult.status === "success") {
//             // 검증 성공시 리디렉션
//             router.push("/success");
//             console.log("검증 성공: ", verifyResult.message);
//           } else {
//             // 검증 실패 시 처리
//             console.error("검증 실패: ", verifyResult.message);
//           }
//         } catch (error) {
//           // 네트워크나 기타 에러 처리
//           console.error("검증 요청 실패: ", error);
//         }
//       } else {
//         // 결제 실패 처리
//         console.error("결제 실패: ", response.error_msg);
//       }
//     });
//   };
// };

// export default PaymentPage;
// payments.js
// payments.js
// payments.js// payments.js
export const initiatePayment = async (IMP_UID, paymentParams) => {
  if (typeof window !== "undefined") {
    const IMP = window.IMP;
    IMP.init(IMP_UID);

    return new Promise((resolve, reject) => {
      IMP.request_pay(paymentParams, async (response) => {
        if (response.success) {
          console.log(response);
          try {
            const verifyResponse = await fetch("/api/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                imp_uid: response.imp_uid,
                merchant_uid: paymentParams.merchant_uid,
              }),
            });

            if (!verifyResponse.ok) {
              throw new Error(`HTTP 오류: ${verifyResponse.status}`);
            }

            const verifyResult = await verifyResponse.json();
            if (verifyResult.status === "success") {
              resolve(verifyResult);
              console.log("성공: ", verifyResult.message);
            } else {
              throw new Error(
                "검증 실패: " + (verifyResult.message || "알 수 없는 오류 발생")
              );
            }
          } catch (error) {
            reject(error);
          }
        } else {
          reject(
            new Error(
              "결제 실패: " + (response.error_msg || "알 수 없는 오류 발생")
            )
          );
        }
      });
    });
  }
};
