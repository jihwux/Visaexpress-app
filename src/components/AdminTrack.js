import React, { useState } from "react";

// 테스트 데이터: 사용자의 발급번호와 상태를 매핑합니다.
const usersStatus = {
  123456: "처리 중",
  654321: "발송됨",
  111111: "배송 완료",
  222222: "취소됨",
};

const AdminTrack = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [statusToUpdate, setStatusToUpdate] = useState("");

  // 사용자의 현재 상태를 조회하는 함수
  const fetchStatus = () => {
    const status = usersStatus[trackingNumber];
    if (status) {
      setCurrentStatus(status);
    } else {
      alert("해당 발급번호의 사용자를 찾을 수 없습니다.");
      setCurrentStatus("");
    }
  };

  // 상태를 업데이트하는 함수
  const updateStatus = () => {
    // 여기에 API 호출 또는 상태 관리 로직으로 상태를 업데이트합니다.
    // 테스트 데이터를 사용하여 상태를 업데이트합니다.
    if (usersStatus[trackingNumber]) {
      usersStatus[trackingNumber] = statusToUpdate;
      alert("상태가 업데이트 되었습니다.");
      setCurrentStatus(statusToUpdate);
    } else {
      alert("해당 발급번호의 사용자를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">
        사용자 상태 조회 및 업데이트
      </h2>
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
        <button
          className="mt-2 w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
          onClick={fetchStatus}
        >
          상태 조회
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">현재 상태</label>
        <div className="-2 bg-gray-100 rounded-md">
          {currentStatus || "상태를 조회하세요"}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium mb-1">
          새 상태 선택
        </label>
        <select
          id="status"
          className="w-full border-gray-300 rounded-md shadow-sm"
          value={statusToUpdate}
          onChange={(e) => setStatusToUpdate(e.target.value)}
        >
          <option value="">상태를 선택하세요</option>
          <option value="처리 중">처리 중</option>
          <option value="발송됨">발송됨</option>
          <option value="배송 완료">배송 완료</option>
          <option value="취소됨">취소됨</option>
        </select>
      </div>
      <button
        className="w-full bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700"
        onClick={updateStatus}
      >
        상태 업데이트
      </button>
    </div>
  );
};

export default AdminTrack;
