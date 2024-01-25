import React, { useState } from "react";

const VisaForm4 = ({ onFormDataChange }) => {
  const [familyMembers, setFamilyMembers] = useState([
    {
      relation: "배우자",
      englishName: "",
      nationality: "",
      dob: "",
      occupation: "",
      residence: "",
    },
    {
      relation: "부",
      englishName: "",
      nationality: "",
      dob: "",
      occupation: "",
      residence: "",
    },
    {
      relation: "모",
      englishName: "",
      nationality: "",
      dob: "",
      occupation: "",
      residence: "",
    },
    {
      relation: "자녀1",
      englishName: "",
      nationality: "",
      dob: "",
      occupation: "",
      residence: "",
    },
    {
      relation: "자녀2",
      englishName: "",
      nationality: "",
      dob: "",
      occupation: "",
      residence: "",
    },
  ]);

  const handleFamilyMemberChange = (index, e) => {
    const updatedMembers = familyMembers.map((member, idx) =>
      idx === index ? { ...member, [e.target.name]: e.target.value } : member
    );
    setFamilyMembers(updatedMembers);
    onFormDataChange(updatedMembers);
  };

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        relation: "자녀+", // 새로운 가족 구성원의 관계를 '자녀+'로 설정
        englishName: "",
        nationality: "",
        dob: "",
        occupation: "",
        residence: "",
      },
    ]);
  };
  return (
    <div>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">가족사항</h2> */}
      {familyMembers.map((member, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4"
        >
          {/* 관계 드롭다운 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              관계
            </label>
            <select
              name="relation"
              value={member.relation}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {index < 5 ? (
                <>
                  <option value="">관계 선택</option>
                  <option value="배우자">배우자</option>
                  <option value="부">부</option>
                  <option value="모">모</option>
                  <option value="자녀1">자녀1</option>
                  <option value="자녀2">자녀2</option>
                </>
              ) : (
                <option value="자녀+">자녀+</option>
              )}
              {/* 필요에 따라 더 추가 */}
            </select>
          </div>
          {/* 영문이름 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              영문이름
            </label>
            <input
              type="text"
              name="englishName"
              value={member.englishName}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* 국적/출생도시 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              국적/출생도시
            </label>
            <input
              type="text"
              name="nationality"
              value={member.nationality}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* 생년월일 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              생년월일
            </label>
            <input
              type="date"
              name="dob"
              value={member.dob}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* 직업 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              직업
            </label>
            <input
              type="text"
              name="occupation"
              value={member.occupation}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* 현거주지 */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              현거주지
            </label>
            <input
              type="text"
              name="residence"
              value={member.residence}
              onChange={(e) => handleFamilyMemberChange(index, e)}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-4">
        <button
          type="button"
          onClick={addFamilyMember}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-indigo-700"
        >
          + 추가하기
        </button>
      </div>
    </div>
  );
};

export default VisaForm4;
