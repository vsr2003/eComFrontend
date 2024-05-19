
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination,Navigation } from 'swiper/modules';

const images = [
  "https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/91O7OLaxSTL._SX3000_.jpg",
]

export default function Caraousel() {
  return (
    <Swiper
      
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={true}
      className="w-full h-full mySwiper"
    >

      {
        images.map(src => (
          <SwiperSlide>
            <img
              key={src}
              src={src}
              className=" md:rounded-tl-[108px] object-cover  "
              alt={"img"}
            />
          </SwiperSlide>
        ))
      }



    </Swiper>
  );
}
