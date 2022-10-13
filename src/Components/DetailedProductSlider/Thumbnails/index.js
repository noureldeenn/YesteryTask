import React from "react";
import { A11y, Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Thumbnails = ({ setImageSrc, images }) => {
  return (
    <Swiper
      slidesPerView={6}
      rewind={true}
      loop
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={50}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={image.src}
            onClick={() => {
              setImageSrc(image.src);
            }}
            alt=""
            width="72px"
            height="75px"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Thumbnails;
