// Imports Global
import Container from "./styles";
import React, { useState, useEffect } from "react";

// Imports of Components
import CardsSection from "../UserCards";

// Imports External
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Style Import
import "swiper/css";
import "swiper/css/navigation";

// Import of Required Swiper Modules
import { Autoplay, Navigation } from "swiper";

function UserCarousel({
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
	const [slidesPerView, setSlidesPerView] = useState(2);
	const [spaceBetween, setSpaceBetween] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 430) {
				setSlidesPerView(3);
				setSpaceBetween(65);
				console.log(window.innerWidth);
			} else if (window.innerWidth >= 430 && window.innerWidth <= 769) {
				setSlidesPerView(3);
				setSpaceBetween(50);
				console.log(window.innerWidth);
			} else if (window.innerWidth >= 769) {
				setSlidesPerView(4);
				setSpaceBetween(-100);

				console.log(window.innerWidth);
			}

			// }  else if (window.innerWidth >= 769 && window.innerWidth <= 1920) {
			// 	setSlidesPerView(4);
			// 	setSpaceBetween(-100);

			// 	console.log(window.innerWidth);
			// } else if (window.innerWidth >= 769 && window.innerWidth <= 1920) {
			// 	setSlidesPerView(4);
			// 	setSpaceBetween(-100);

			// 	console.log(window.innerWidth);
			// } else if (window.innerWidth >= 1921 && window.innerWidth <= 2560) {
			// 	setSlidesPerView(4);
			// 	setSpaceBetween(-100);

			// 	console.log(window.innerWidth);
			// else {
			// 	setSlidesPerView(2);
			// 	setSpaceBetween(0);
			// }
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Container>
			<h1>{title}</h1>
			<Swiper
				className="mySwiper"
				navigation={true}
				modules={[Navigation, Autoplay]}
				slidesPerView={slidesPerView}
				spaceBetween={spaceBetween}
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
						title={subTitle1}
						img={image1}
						price={price1}
					/>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}

export default UserCarousel;
