import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 로고 이미지를 사용하려면 이 주석을 해제하세요.

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  {
    /* 메뉴 항목 */
  }
  return (
    <header
      className="bg-white text-gray-800 py-4 shadow-lg"
      style={{ fontWeight: "bold" }}
    >
      {/* 헤더 내용 */}
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* 로고 링크 */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold tracking-tight hover:text-gray-500 transition duration-300">
            {/* 로고 이미지 사용시 아래 코드 주석 해제 */}
            <Image
              src="/logo.jpg" // 로고 이미지 경로
              alt="로고"
              width={220} // 로고의 너비
              height={220} // 로고의 높이
            />
            {/* VisaExpress */}
          </a>
        </Link>
        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-800 focus:outline-none"
          >
            {/* 햄버거 메뉴 아이콘 */}
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
        {/* 메뉴 내용 */}

        <div
          className={`fixed inset-y-0 right-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-30`}
        >
          {/* 메뉴 닫기 버튼 */}
          {/* 메뉴 닫기 버튼 */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-3 bg-gray-300 rounded-full shadow-lg text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 absolute top-3 right-3 z-50"
          >
            {/* SVG 코드는 동일하게 유지 */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {/* 메뉴 항목 */}
          <nav className="relative">
            <ul className="flex flex-col space-y-2 p-4">
              {[
                { href: "/visa", label: "비자 신청하기" },
                { href: "/visachecklist", label: "비자 신청 서류" },
                { href: "/price", label: "비자 신청 가격" },
                { href: "/location", label: "오시는 길" },
                // 추가 메뉴 항목들...
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} legacyBehavior>
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-gray-800 bg-white rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out"
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/visa" legacyBehavior>
            <a className="text-lg hover:text-gray-900 transition duration-300">
              비자 신청하기
            </a>
          </Link>

          <Link href="/visachecklist" legacyBehavior>
            <a className="text-lg hover:text-gray-900 transition duration-300">
              비자 신청 서류
            </a>
          </Link>

          <Link href="/price" legacyBehavior>
            <a className="text-lg hover:text-gray-900 transition duration-300">
              비자 신청 가격
            </a>
          </Link>

          <Link href="/location" legacyBehavior>
            <a className="text-lg hover:text-gray-900 transition duration-300">
              오시는 길
            </a>
          </Link>
          {/* 추가 PC 메뉴 항목들을 여기에 배치 */}
        </div>
      </div>
    </header>
  );
}
