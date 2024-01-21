// pages/directions.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMapMarkerAlt,
  faClock,
  faPhone,
  faEnvelope,
  faDirections,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const DirectionsPage = () => {
  const iconStyle = { width: "14px", display: "inline", margin: "5px" };

  return (
    <div className="container mx-auto p-4 ">
      <div className="mb-8 ">
        <h1 className="text-2xl font-bold mb-2 pt-10">
          <FontAwesomeIcon style={iconStyle} icon={faMapMarkerAlt} />
          비자익스프레스
        </h1>
        <p className="text-blue-600">서울특별시 영등포구 문래동4가 67</p>
        <div className="flex gap-4 my-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=37.5157406%2C126.8862251"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon style={iconStyle} icon={faDirections} /> 길찾기
          </a>
          <a
            href="https://www.google.com/maps?q=37.5157406%2C126.8862251"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon style={iconStyle} icon={faMap} /> 지도에서 보기
          </a>
        </div>
      </div>

      <div className="map_area mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.873350090252!2d126.8862251170676!3d37.515740624788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e606f3b229d%3A0x6970718272cf574b!2z7ISc7Jq47Yq567OE7IucIOyYgeuTse2PrOq1rCDrrLjrnpjrj5k06rCAIDY3!5e0!3m2!1sko!2skr!4v1705301329945!5m2!1sko!2skr"
          style={{ border: 0, width: "100%", height: "500px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="info_area mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 pb-4">
            이용안내 <FontAwesomeIcon style={iconStyle} icon={faClock} />
          </h2>
          <p className="mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} style={iconStyle} />
            이용시간: AM 9:00 - PM 6:00 (토, 일, 공휴일 휴무)
          </p>
          <p className="mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faComments} style={iconStyle} />
            카톡상담은 24시간 가능합니다
          </p>

          <p className="mb-4 flex items-center gap-2">
            <FontAwesomeIcon style={iconStyle} icon={faPhone} /> 전화번호:
            070-8028-3829, 010-7775-2183
          </p>
          <p className="mb-4 flex items-center gap-2  pb-4">
            <FontAwesomeIcon style={iconStyle} icon={faEnvelope} /> 이메일:
            visaexpress2183@naver.com
          </p>
          <div className="flex gap-4 mt-4 pb-4">
            <Link href="/visa">
              <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-green-700 transition duration-300 flex items-center gap-2">
                비자신청
              </button>
            </Link>
            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 flex items-center gap-2">
              <a href="tel:070-8028-3829">방문접수/출장문의</a>
            </button>
          </div>
        </div>

        {/* <div className="business_info mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">사업자 정보</h2>
          <p className="mb-2">상호명: 비자익스프레스</p>
          <p className="mb-2">대표자: 김성찬</p>
          <p className="mb-2">사업자번호: 313-36-01073</p>
          <p className="mb-2">통신판매번호: 제2023-서울영등포-1087호</p>
        </div> */}
      </div>
    </div>
  );
};

export default DirectionsPage;
