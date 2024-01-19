// components/FixedButtons.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faChevronUp, faComments, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function FixedButtons() {
  // 스크롤을 맨 위로 올리는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
      <a
        href="tel:070-8028-3829"
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg text-center hover:bg-blue-700 transition-colors"
      >
        <FontAwesomeIcon style={{width: '20px'}} icon={faPhoneAlt} />
      </a>
      <a
        href="http://pf.kakao.com/_Kxfqcxj/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-white p-2 rounded-full shadow-lg text-center hover:bg-yellow-500 transition-colors"
      >
        <FontAwesomeIcon style={{width: '20px'}} icon={faComments} />
      </a>
      <a
        href="/location"
        className="bg-gray-600 text-white p-2 rounded-full shadow-lg text-center hover:bg-gray-700 transition-colors"
      >
        <FontAwesomeIcon style={{width: '20px'}} icon={faMapMarkerAlt} />
      </a>
      <button
        onClick={scrollToTop}
        className="bg-green-600 text-white p-2 rounded-full shadow-lg text-center hover:bg-green-700 transition-colors"
      >
        <FontAwesomeIcon style={{width: '20px'}} icon={faChevronUp} />
      </button>
    </div>
  );
}