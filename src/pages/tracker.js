import { useState } from "react";

const steps = ["신청 접수 완료", "정보 확인", "발급 심사 중", "발급 완료"];
const descriptions = [
  "고객님의 신청이 접수되었습니다.",
  "제출하신 정보를 확인 중입니다.",
  "발급 심사를 진행 중입니다.",
  "감사합니다. 발급이 완료되었습니다.",
];

// 테스트 데이터
const customerData = {
  "1@example.com": 0, // 정보 확인 단계
  "2@example.com": 1, // 정보 확인 단계
  "3@example.com": 2, // 정보 확인 단계
  "4@example.com": 3, // 정보 확인 단계
};

export default function ApplicationTracker() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [currentStep, setCurrentStep] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // 로딩 시작

    // 3초 후 데이터 검색 로직 실행
    setTimeout(() => {
      const step = customerData[email];
      if (step !== undefined) {
        setCurrentStep(step);
      } else {
        alert("해당 이메일의 고객 정보를 찾을 수 없습니다.");
        setCurrentStep(null);
      }
      setIsLoading(false); // 로딩 종료
    }, 5000);
  };

  return (
    <main className="flex-grow container mx-auto my-8 p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">진행 상황 추적</h1>
        <p className="text-md text-gray-500 mt-2">
          아래에 이메일을 입력하여 신청 상태를 확인하세요.
        </p>
      </div>
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="mb-8 flex">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="flex-grow p-2 border border-gray-300 rounded-l-md"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 transition-colors"
          >
            조회하기
          </button>
        </form>

        {/* 프로그레스 바 */}
        <div className="mb-8">
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <div
                  className={`flex-1 ${
                    index < currentStep
                      ? "text-green-600"
                      : index === currentStep
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  <div className="text-lg font-bold">{step}</div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                      index < currentStep
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 현재 단계에 대한 정보 및 설명 */}
        {currentStep !== null && (
          <div className="text-center p-4 border-t border-b border-gray-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              {steps[currentStep]}
            </h3>
            <p className="text-gray-600">{descriptions[currentStep]}</p>
          </div>
        )}

        {/* 초기 상태에서는 안내 메시지를 보여줍니다. */}
        {currentStep === null && (
          <div className="text-center p-4 border-t border-b border-gray-300">
            <p className="text-lg text-gray-600">
              총 4단계의 프로세스를 거쳐 발급이 완료 됩니다.
            </p>
            <p className="text-lg text-gray-600">
              문제가 있다면 고객센터로 문의 부탁드려요.
            </p>
          </div>
        )}
        {isLoading && (
          <div className="text-center p-4">
            <p className="text-lg text-green-600">이메일 서버와 연동 중...</p>
          </div>
        )}
      </div>
    </main>
  );
}
