// components/Header.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-red-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold tracking-tight hover:text-red-200 transition duration-300">
            {/* <Image
              src="/profileImage.png" // 여기에 로고 이미지 경로를 맞게 설정하세요.
              alt="비자익스프레스 로고"
              width={1} // 로고의 크기를 적절히 조정하세요.
              height={50}
            /> */}
            비자익스프레스
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/visa" legacyBehavior>
                <a className="text-lg hover:text-red-200 transition duration-300">
                  비자 신청{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/location" legacyBehavior>
                <a className="text-lg hover:text-red-200 transition duration-300">
                  오시는 길
                </a>
              </Link>
            </li>
            {/* 추가 메뉴 항목들을 여기에 배치할 수 있습니다. */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
