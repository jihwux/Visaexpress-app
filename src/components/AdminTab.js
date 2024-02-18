import React, { useState } from "react";
import AdminTrack from "@/components/AdminTrack";
// 가정된 각 기능별 컴포넌트
const Dashboard = () => <div className="p-4">상태 조회 및 업데이트</div>;
const UserManagement = () => <AdminTrack />;
// const SystemSettings = () => <div className="p-4"></div>;
const Statistics = () => <div className="p-4">애널리틱스 도구</div>;

const AdminTab = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // 탭을 렌더링하는 함수
  const renderTabContent = (tab) => {
    switch (tab) {
      case "dashboard":
        return <Dashboard />;
      case "userManagement":
        return <UserManagement />;
      case "systemSettings":
        return <SystemSettings />;
      case "statistics":
        return <Statistics />;
      default:
        return <div>선택된 탭이 없습니다.</div>;
    }
  };

  // 탭 아이템 컴포넌트
  const TabItem = ({ tab, title }) => {
    const isActive = activeTab === tab;
    return (
      <div
        className={`p-4 text-lg font-medium cursor-pointer ${
          isActive
            ? "text-blue-600 bg-blue-100"
            : "text-gray-700 hover:bg-gray-50"
        } transition duration-300 ease-in-out transform ${
          isActive ? "scale-105" : ""
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {title}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 bg-white shadow-xl">
        <TabItem tab="dashboard" title="대시보드" />
        <TabItem tab="userManagement" title="상태 조회 및 업데이트" />
        {/* <TabItem tab="systemSettings" title="" /> */}
        <TabItem tab="statistics" title="애널리틱스 도구" />
      </div>
      <div className="flex-1 p-4 overflow-auto">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default AdminTab;
