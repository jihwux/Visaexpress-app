// pages/api/verify-payment.js

export default async (req, res) => {
  // pages/api/verify-payment.js

  if (req.method === "POST") {
    const { imp_uid } = req.body; // 클라이언트로부터 받은 imp_uid
    const getToken = await fetch("https://api.iamport.kr/users/getToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imp_key: process.env.IMP_API_KEY_TEST, // REST API 키
        imp_secret: process.env.IMP_API_SECRET_TEST, // REST API Secret
      }),
    });
    const tokenResult = await getToken.json();

    if (tokenResult.response) {
      //   console.log("aaasdasd");
      const { access_token } = tokenResult.response; // 접근 토큰

      // imp_uid로 아임포트 서버에서 결제 정보 조회
      const getPaymentData = await fetch(
        `https://api.iamport.kr/payments/${imp_uid}`,
        {
          method: "GET",
          headers: { Authorization: access_token },
        }
      );
      const paymentDataResult = await getPaymentData.json();

      if (paymentDataResult.response) {
        // 결제 정보 검증 로직 구현...
        // 예: paymentDataResult.response.amount가 실제 주문 금액과 일치하는지 검증

        // 검증 성공 시 처리
        res.status(200).json({
          status: "success",
          message: "결제 검증 성공",
          data: paymentDataResult.response,
        });
      } else {
        // 결제 정보가 존재하지 않음
        res
          .status(400)
          .json({ status: "error", message: "결제 정보를 찾을 수 없음" });
      }
    } else {
      // 토큰 발급 실패
      res.status(400).json({ status: "error", message: "토큰 발급 실패" });
    }
  } else {
    // POST 메소드가 아닐 경우 에러 처리
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// ...
