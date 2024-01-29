import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Swiper 모듈을 활성화합니다.
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomePage = () => {
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
    <div className="relative" style={{ height: "100vh", overflowX: "hidden" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div
              style={{ top: "20%" }}
              className="absolute left-0 md:left-40 top-1/4 z-20 text-left"
            >
              {/* 제목 */}
              <h2 className="text-6xl font-bold text-white">{slide.title}</h2>
              {/* 부제목 */}
              <h4 className="text-xl font-bold text-white mb-5 mt-2">
                {slide.subtitle}
              </h4>
            </div>
            <Link href="/visa" legacyBehavior>
              <a className="absolute top-1/3   left-0 md:left-40 transform -translate-y-1/2 z-20 inline-block bg-red-500 text-white py-3 px-6 rounded hover:bg-red-700 transition-colors text-2xl mt-10 md:mt-20">
                비자 신청하기
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* '비자 신청하기' 버튼 */}
    </div>
  );
};

export default HomePage;
