// components/Header.js

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-red-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tight hover:text-red-200 transition duration-300">
          비자익스프레스
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/location" className="text-lg hover:text-red-200 transition duration-300">
                오시는 길
              </a>
            </li>
            {/* 추가 메뉴 항목들을 여기에 배치할 수 있습니다. */}
          </ul>
        </nav>
      </div>
    </header>
  );
}