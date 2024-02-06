import React, { useState } from "react";

const AdminTrack = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState("");

  // 상태를 업데이트하는 함수
  const updateStatus = async () => {
    // API 호출 또는 상태 관리 로직으로 상태를 업데이트합니다.
    // 예시 코드에서는 console.log를 사용하여 입력된 값을 출력합니다.
    console.log(`번호: ${trackingNumber}, 상태: ${status}`);
    // ... API 호출 또는 다른 로직으로 DB에 상태 업데이트
    alert("상태가 업데이트 되었습니다.");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">사용자 상태 업데이트</h2>
      <div className="mb-4">
        <label
          htmlFor="trackingNumber"
          className="block text-sm font-medium mb-1"
        >
          발급번호 입력
        </label>
        <input
          type="text"
          id="trackingNumber"
          className="w-full border-gray-300 rounded-md shadow-sm"
          placeholder="발급번호를 입력하세요"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium mb-1">
          상태 선택
        </label>
        <select
          id="status"
          className="w-full border-gray-300 rounded-md shadow-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">상태를 선택하세요</option>
          <option value="processing">처리 중</option>
          <option value="shipped">발송됨</option>
          <option value="delivered">배송 완료</option>
          <option value="cancelled">취소됨</option>
        </select>
      </div>
      <button
        className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
        onClick={updateStatus}
      >
        상태 업데이트
      </button>
    </div>
  );
};

export default AdminTrack;
