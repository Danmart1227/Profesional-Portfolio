import Image from "next/image";
import Slider1 from "../images/swiper1.jpg"
import Slider2 from "../images/swiper2.jpg"
import Slider3 from "../images/swiper3.jpg"
import Slider4 from "../images/swiper4.jpg"
import Slider5 from "../images/swiper5.jpg"
import Slider6 from "../images/swiper6.jpg"
import Slider7 from "../images/swiper7.jpg"
import Slider8 from "../images/swiper8.jpg"
import Slider9 from "../images/swiper9.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/*Image stylying*/

const imgStyle = {
borderRadius:"20px",
opacity:"0.7"
}



export default function Slider () {
    return (
<>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Slider1} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider2} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider3} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider4} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider5} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider6} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider7} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider8} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slider9} alt="swiper image" width={400} height={400} style={imgStyle} />
        </SwiperSlide>
      </Swiper>
    </>
    )

}