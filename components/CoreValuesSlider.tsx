"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import StyledText from "./common/StyledText";

const slides = [
  { id: 1, image: "/assets/svg/OverviewImage.svg", title: "Service", description:"We are dedicated to delivering exceptional, client-centered solutions that create measurable value." },
  { id: 2, image: "/assets/svg/OverviewImage2.svg", title: "Professionalism",description:"We uphold the highest standards of conduct, expertise, and reliability in everything we do." },
  { id: 3, image: "/assets/svg/OverviewImage3.svg", title: "Adaptability", description:"We remian agile and innovative, constantly evovling to meet the dynamic challenges of our clients and industries." },
  { id: 4, image: "/assets/svg/Respect.svg", title: "Respect", description: "We foster a work enviroment that values the unique perspectives and contributions of each stakeholder." },
  { id: 5, image: "/assets/svg/Kaizen.svg", title: "Kaizen+", description:"We prioritize continous learning, innovation, and the application of expertise to deliver informed,strategic, and impactful solutions." },
];

function CoreValuesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "slider-custom h-full",
  };

  return (
    <section className="w-full overflow-hidden mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide-item relative w-full lg:h-[45rem] h-[25rem] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/70 to-black/0 z-10"></div>
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute text-white z-20 w-full px-6 flex flex-col items-center justify-center text-center h-full">
                <StyledText textClassname="font-semibold lg:!text-6xl !text-2xl pb-6 font-tiempos">
                  {slide.title}
                </StyledText>
                <p className="lg:!text-2xl text-base lg:leading-[5.313rem] font-tiempos">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CoreValuesSlider;
