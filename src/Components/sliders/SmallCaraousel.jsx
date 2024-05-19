
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import ProductSmall from '../ProductSmall';



export default function SmallCaraousel({products}) {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={true}
      slidesPerView={'4'}
      className="w-full h-full mySwiper"
    >
      {
        products?.map(productDets => (

          <SwiperSlide>

            <ProductSmall  />

          </SwiperSlide>

        ))
    }
    </Swiper>
  );
}
