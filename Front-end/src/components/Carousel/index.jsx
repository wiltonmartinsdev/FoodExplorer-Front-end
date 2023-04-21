import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Container from "./styles";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Carousel() {
	return (
		<Container>
			<Swiper
				className="mySwiper"
				navigation={true}
				modules={[Navigation, Autoplay]}
				slidesPerView={2}
				spaceBetween={50}
				grabCursor={true}
				autoplay={{
					delay: 3000000000000,
					disableOnInteraction: false,
				}}>
				<SwiperSlide>
					<img
						src="src\assets\Cardmobile.png"
						alt=""
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img
						src="src\assets\Cardmobile.png"
						alt=""
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img
						src="src\assets\Cardmobile.png"
						alt=""
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img
						src="src\assets\Cardmobile.png"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}

export default Carousel;
