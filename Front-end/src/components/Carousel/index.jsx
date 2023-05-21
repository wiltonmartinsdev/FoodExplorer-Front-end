// Imports Global
import Container from "./styles";
import React from "react";

// Imports of Components
import CardsSection from "../CardsSection";

// Imports External
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Style Import
import "swiper/css";
import "swiper/css/navigation";

// Import of Required Swiper Modules
import { Autoplay, Navigation } from "swiper";

function Carousel({
	title,
	subTitle1,
	subTitle2,
	subTitle3,
	subTitle4,
	image1,
	image2,
	image3,
	image4,
	price1,
	price2,
	price3,
	price4,
}) {
	return (
		<Container>
			<h1>{title}</h1>
			<Swiper
				className="mySwiper"
				navigation={true}
				modules={[Navigation, Autoplay]}
				slidesPerView={2}
				// spaceBetween={-2}
				grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}>
				<SwiperSlide>
					<CardsSection
						title={subTitle1}
						img={image1}
						price={price1}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<CardsSection
						title={subTitle2}
						img={image2}
						price={price2}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<CardsSection
						title={subTitle3}
						img={image3}
						price={price3}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<CardsSection
						title={subTitle4}
						img={image4}
						price={price4}
					/>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}

export default Carousel;
