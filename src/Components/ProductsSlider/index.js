import React from "react";
import ProductGridCard from "../ProductGridCard";
import { A11y, Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductsSlider = ({ products }) => {
  return (
    <Swiper
      slidesPerView={4}
      rewind={true}
      loop
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={50}
    >
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <ProductGridCard
            key={i}
            title={product.title}
            price={product.price}
            specialPrice={product.specialPrice}
            alt={product.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ProductsSlider;
