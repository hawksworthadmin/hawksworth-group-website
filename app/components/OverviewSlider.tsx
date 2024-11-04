"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function OverviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slider-custom h-full",
  };

  return (
    <section className="w-full overflow-hidden mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Slider {...settings}>
          <div className="slide-item relative w-full h-[45rem]">
            <Image
              src="/assets/svg/OverviewImage.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="slide-item relative w-full h-[45rem] ">
            <Image
              src="/assets/svg/OverviewImage2.svg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slide-item relative w-full h-[45rem]">
            <Image
              src="/assets/svg/OverviewImage3.svg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default OverviewSlider;
