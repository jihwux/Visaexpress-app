// components/AgreementContent.js
import React from "react";

const AgreementContent = ({ title, children }) => {
  return (
    <div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="overflow-auto h-64 p-4 border bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AgreementContent;
