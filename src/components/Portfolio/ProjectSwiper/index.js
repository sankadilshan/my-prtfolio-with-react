import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ProjectCard from "../ProjectCard";
import portfolio from "../../../assets/portfolio.json";

function ProjectSwiper() {
  const { projects } = portfolio;
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0, 
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container h-full"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i} className="bg-gradient-to-r from-black from-10% via-[#1a0804] via-60% to-[#1a191e] to-90%">
            <ProjectCard key={`p${i}`} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSwiper;
