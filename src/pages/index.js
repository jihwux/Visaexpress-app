import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RefundPolicyPage from "./refund";

import {
  faFileAlt,
  faComments,
  faPassport,
  faSearch,
  faBuilding,
  faChevronLeft,
  faChevronRight,
  faPhoneAlt,
  faKeyboard,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

// Swiper 모듈을 활성화합니다.
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const processes = [
    {
      id: 1,
      title: "온라인 신청 ",
      description: "신청 정보 입력",
      icon: faKeyboard,
    },
    {
      id: 2,
      title: "서류 접수",
      description: "등기 / 방문",
      icon: faFileAlt,
    },
    {
      id: 3,
      title: "정보 확인",
      description: "1:1 상담",
      icon: faSearch,
    },
    {
      id: 4,
      title: "결제",
      description: "입금/온라인결제",
      icon: faCreditCard,
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
      title: "중국 여행 준비",
      subtitle: "문화와 역사가 살아 숨 쉬는 곳",
    },
    {
      image: "/a3.png",
      title: "함께 하면 쉽게",
      subtitle: "중국 진출의 꿈 비자익스프레스와 함께하세요.",
    },
    {
      image: "/a4.png",
      title: "쉬운 비자 발급",
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
        className="h-screen md:h-3/4 lg:h-screen" // 모바일에서는 화면 높이, 더 큰 화면에서는 3/4 높이
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute left-0 md:left-40 z-20 text-left"
              style={{ top: "16.666%" }}
            >
              <h2
                className="text-6xl font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {slide.title}
              </h2>
              <h4
                className="text-xl font-extrabold text-white mt-2 text-shadow"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
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
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="mb-4 pt-10 text-left px-10 ">
          {/* <div className="mb-4 pt-10 text-left px-4 "> */}

          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            비자 신청 절차
          </h1>
          <p className="text-md text-gray-600 mt-2">
            간편하고 체계적인 단계를 거쳐, 비자 발급 준비를 도와드립니다.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap mx-8 sm:mx-0">
          {processes.map((process, index) => (
            <React.Fragment key={process.id}>
              <div className="p-2 w-full sm:w-1/6 ">
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl ">
                  <FontAwesomeIcon
                    icon={process.icon}
                    className="text-red-500 mb-3 h-10 w-10"
                  />
                  <div className="font-bold text-lg mb-1">{process.title}</div>
                  <p className="text-gray-600 text-sm text-center">
                    {process.description}
                  </p>
                </div>
              </div>
              {index < processes.length - 1 && (
                <div className="hidden sm:flex justify-center items-center flex-shrink-0 mx-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-gray-400 h-6 w-6"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-14 py-8 text-center ">
        <div className="mb-4 pt-10 text-left  ">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            신청 추적 및 상담
          </h1>
          <p className="text-md text-gray-600 mt-2">
            모든 준비는 비자익스프레스에서, 간단하게 문의부터 추적까지 한 번에
            해결하세요.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 ">
          {[
            {
              title: "신청 정보 조회",
              link: "/tracker",
              buttonText: "자세히 보기",
            },
            {
              title: "신청 서류 조회",
              link: "/visachecklist",
              buttonText: "자세히 보기",
            },
            {
              title: "전화 상담",
              link: "tel:+1234567890",
              buttonText: "전화 걸기",
            }, // 전화번호 예시
            {
              title: "카카오톡 상담",
              link: "http://pf.kakao.com/_Kxfqcxj/chat", // 실제 카카오톡 링크로 변경해야 합니다.
              buttonText: "+ 친구 추가",
            },
          ].map((item, index, arr) => (
            <div key={index} className="p-4 w-full md:w-1/2">
              <div
                className={`group flex flex-col items-center p-8 md:p-12 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl ${
                  index === arr.length - 1 ? "bg-yellow-300" : "bg-white"
                }`}
              >
                <h3
                  className={`font-bold text-2xl md:text-3xl ${
                    index === arr.length - 1 ? "text-black" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-3">
                  {item.title === "전화 상담" ? (
                    <a
                      href={item.link}
                      className={`hover:underline text-lg md:text-xl font-semibold ${
                        index === arr.length - 1
                          ? "text-black hover:text-white"
                          : "text-red-500 hover:text-red-700"
                      }`}
                      target={item.title === "전화 상담" ? "_blank" : ""}
                      rel={
                        item.title === "전화 상담" ? "noopener noreferrer" : ""
                      }
                    >
                      {item.buttonText}
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className={`hover:underline text-lg md:text-xl font-semibold ${
                        index === arr.length - 1
                          ? "text-black hover:text-white"
                          : "text-red-500 hover:text-red-700"
                      }`}
                      target={item.title === "카카오톡 상담" ? "_blank" : ""}
                      rel={
                        item.title === "카카오톡 상담"
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {item.buttonText}
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap  px-10 -mx-4">
          <div className="p-4 w-full md:w-1/3">
            <div className="group flex flex-col items-start p-8 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg">긴급 비자 접수 안내</h3>
              <p className="mt-2">
                점심 12시 전 서류 도착 시, 2일 내 초특급 비자 발급 가능
              </p>
            </div>
          </div>

          <div className="p-4 w-full md:w-1/3">
            <div className="group flex flex-col items-start p-8 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg">공지사항</h3>
              <p className="mt-2">현재 단수/더블 비자 지문 면제</p>
            </div>
          </div>

          {/* ...여기에 다른 카드들의 코드... */}

          {/* 환불규정 카드 */}
          <div className="p-4 w-full md:w-1/3">
            <div className="group flex flex-col items-start p-8 bg-white rounded-lg shadow-lg cursor-pointer">
              <h3 className="font-bold text-lg">*환불규정</h3>
              <p className="mt-2">
                <button onClick={() => setShowModal(true)}>자세히 보기</button>{" "}
              </p>
            </div>

            {/* 환불 규정 모달 */}

            {/* 환불 규정 모달 */}

            {showModal && (
              <div
                className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center"
                onClick={() => setShowModal(false)} // 모달 외부 클릭 시 모달 닫기
              >
                <div
                  className="relative p-5 border w-full max-w-2xl max-h-[80vh] mx-auto shadow-lg rounded-md bg-white overflow-y-auto"
                  onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 버블링 방지
                  style={{
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    position: "absolute",
                  }} // 모달 중앙 정렬
                >
                  {/* 모달 내용 */}

                  {/* 모달 닫기 버튼 */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-0 right-0 mt-4 mr-4 text-2xl leading-none p-2 text-gray-400 hover:text-gray-500"
                  >
                    &times; {/* 이 문자는 'X' 닫기 아이콘을 나타냅니다. */}
                  </button>

                  {/* RefundPolicyPage 컴포넌트 내용 */}
                  <RefundPolicyPage />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-16 py-8 bg-gray-100 pb-20">
        <div className="md:flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-gray-600 h-5 w-5 self-center"
                style={{ transform: "rotate(90deg)" }}
              />
              <h2 className="font-bold text-xl ml-2">상담 신청 및 문의</h2>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-red-500 text-2xl font-bold">
                  <a href="tel:070-8028-3829" className="hover:underline">
                    070-8028-3829
                  </a>
                </p>
                <p className="text-red-500 text-2xl font-bold">
                  <a href="tel:010-7775-2183" className="hover:underline">
                    010-7775-2183
                  </a>
                </p>
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-mg font-bold">
                  평일 11:00 ~ 18:00
                </p>
                <p className="text-gray-400 text-mg font-bold">
                  (주말 및 공휴일 휴무)
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:flex-grow-0 md:flex-shrink-0 md:border-l md:border-gray-300 mx-5"
            style={{ height: "100px" }}
          ></div>
          <div className="flex-1">
            <h2 className="font-bold text-xl">입금 계좌</h2>
            <p className="text-gray-800 text-lg font-bold pt-5">
              농협은행: 302-1799-2849-91
            </p>
            <p className="text-gray-400 text-mg font-bold">
              예금주: 비자익스프레스(김성찬)
            </p>
          </div>
        </div>
      </div>
      {/* '비자 신청하기' 버튼 */}
    </div>
  );
};

export default HomePage;
