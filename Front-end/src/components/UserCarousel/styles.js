import styled from "styled-components";

const Container = styled.div`
	h1 {
		font-family: Poppins, sans-serif;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 2.52rem;

		margin-left: 1.8rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			margin-left: 4.5rem;
		}

		@media screen and (min-width: 769px) and (max-width: 1920px) {
			margin-left: 43rem;

			width: 15.2rem;
		}

		@media screen and (min-width: 1921px) {
			margin-left: 43rem;

			width: 17.8rem;
		}
	}

	.mySwiper {
		width: 43rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 69rem;

			margin-left: 3.8rem;
		}

		@media screen and (min-width: 769px) and (max-width: 1920px) {
			width: 127rem;

			margin-left: 32.5rem;
		}

		@media screen and (min-width: 1921px) {
			width: 127.6rem;

			margin-left: 32.5rem;
		}
	}

	/* .swiper-slide {

	} */

	.swiper-slide img {
		display: block;

		object-fit: cover;
	}

	.swiper-button-prev {
		color: white;

		display: none;
	}

	.swiper-button-next {
		color: white;

		display: none;
	}

	@media (min-width: 769px) {
		.swiper-slide {
			height: 32.5rem;
		}

		.mySwiper:hover {
			.swiper-button-prev {
				color: white;

				display: block;
			}

			.swiper-button-next {
				color: white;

				display: block;
			}
		}
	}
`;

export default Container;
