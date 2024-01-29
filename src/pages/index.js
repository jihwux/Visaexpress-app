import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileAlt,
  faComments,
  faPassport,
  faSearch,
  faBuilding,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Swiper 모듈을 활성화합니다.
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomePage = () => {
  const processes = [
    {
      id: 1,
      title: "비자 상담",
      description: "신청 / 카카오",
      icon: faComments,
    },
    {
      id: 2,
      title: "서류 접수",
      description: "등기 / 방문",
      icon: faFileAlt,
    },
    {
      id: 3,
      title: "1차 심사",
      description: "심사 후 결제",
      icon: faSearch,
    },
    {
      id: 4,
      title: "비자 센터 접수",
      description: "지문 등록 예약",
      icon: faBuilding,
    },
    {
      id: 5,
      title: "발급",
      description: "등기 / 방문",
      icon: faPassport,
    },
  ];

  const slides = [
    {
      image: "/a2.png",
      title: "중국으로의 여정",
      subtitle: "문화와 역사가 살아 숨 쉬는 곳",
    },
    {
      image: "/a3.png",
      title: "함께하면 쉽게",
      subtitle: "중국 진출의 꿈 비자익스프레스와 함께하세요.",
    },
    {
      image: "/a4.png",
      title: "간편한 비자 절차",
      subtitle: "빠르고 쉬운 비자 신청으로 여행 준비 완료",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-1/2 md:h-3/4 lg:h-screen" // Tailwind CSS 반응형 높이 클래스
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover" // Tailwind CSS 클래스
            />
            <div className="absolute top-1/4 left-0 md:left-40 z-20 text-left p-4">
              <h2 className="text-6xl font-bold text-white">{slide.title}</h2>
              <h4 className="text-xl font-bold text-white mb-5 mt-2">
                {slide.subtitle}
              </h4>

              <Link href="/visa" legacyBehavior>
                <a className="inline-block bg-red-500 text-white py-3 px-6 rounded hover:bg-red-700 transition-colors text-2xl mt-10 md:mt-20">
                  비자 신청하기
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container mx-auto px-4 pt-6">
        {/* 제목 */}
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            프로세스 안내
          </h1>
          <p className="text-md text-gray-600 mt-2">
            각 단계별 요구사항을 확인하세요.
          </p>
        </div>

        <div className="flex justify-center items-center md:py-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {processes.map((process, index) => (
              <>
                <div
                  key={process.id}
                  className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl"
                >
                  <FontAwesomeIcon
                    icon={process.icon}
                    className="text-blue-500 mb-3 h-10 w-10"
                  />
                  <div className="font-bold text-lg mb-1">{process.title}</div>
                  <p className="text-gray-600 text-sm text-center">
                    {process.description}
                  </p>
                </div>
                {index < processes.length - 1 && (
                  <div className="  ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-6 w-6 text-gray-600 mx-2"
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 md:py-12 lg:py-20">
        {" "}
        <div className="flex flex-nowrap justify-center">
          {" "}
          {processes.map((process, index) => (
            <React.Fragment key={process.id}>
              {" "}
              <div className="flex-shrink-0 flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                {" "}
                <FontAwesomeIcon
                  icon={process.icon}
                  className="text-blue-500 mb-3 h-10 w-10"
                />{" "}
                <div className="font-bold text-lg mb-1">{process.title}</div>{" "}
                <p className="text-gray-600 text-sm text-center">
                  {" "}
                  {process.description}{" "}
                </p>{" "}
              </div>{" "}
              {index < processes.length - 1 && (
                <div className="flex justify-center items-center flex-shrink-0 mx-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-gray-400 h-6 w-6"
                  />{" "}
                </div>
              )}{" "}
            </React.Fragment>
          ))}{" "}
        </div>{" "}
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="p-4 w-full md:w-1/2 lg:w-1/4">
            <div className="group flex flex-row items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">가격표 조회</h3>
                <p className="mt-2">
                  <a href="/price" className="text-red-500 hover:text-red-700">
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 w-full md:w-1/2 lg:w-1/4">
            <div className="group flex flex-row items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">필요서류 조회</h3>
                <p className="mt-2">
                  <a
                    href="/visachecklist"
                    className="text-red-500 hover:text-red-700"
                  >
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 w-full md:w-1/2 lg:w-1/4">
            <div className="group flex flex-row items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">비자 신청하기</h3>
                <p className="mt-2">
                  <a href="/visa" className="text-red-500 hover:text-red-700">
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 w-full md:w-1/2 lg:w-1/4">
            <div className="group flex flex-row items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">비자 사진 규정</h3>
                <p className="mt-2">
                  <a
                    href="/price-list"
                    className="text-red-500 hover:text-red-700"
                  >
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-8 bg-gray-100">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/2 md:pr-10">
            <h2 className="font-bold text-lg mb-2">입금 계좌</h2>
            <p className="text-gray-600">농협은행: 302-1799-2849-91</p>
            <p className="text-gray-600">예금주: 비자익스프레스(김성찬)</p>
          </div>

          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="font-bold text-lg mb-2">운영시간</h2>
            <p className="text-gray-600">
              E-Mail:{" "}
              <a
                href="mailto:Visaexpress2183@Naver.Com"
                className="text-blue-500 hover:text-blue-600"
              >
                Visaexpress2183@naver.com
              </a>
            </p>
            <p className="text-gray-600">
              AM 10:00 - PM 6:00 (토,일 공휴일 휴무)
            </p>
          </div>
        </div>
      </div>

      {/* '비자 신청하기' 버튼 */}
    </div>
  );
};

export default HomePage;
