import styled from "styled-components";

const Container = styled.div`
	width: 40.4rem;

	/* display: flex;
	align-items: center; */

	/* border: 1px solid red; */

	h1 {
		font-family: Poppins, sans-serif;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 2.52rem;

		margin-left: 2.4rem;
	}

	.mySwiper {
		width: 100%;
		/* height: 100%; */

		margin-bottom: 2.4rem;

		/* border: 1px solid red; */

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		}
	}

	.swiper-slide {
		/* width: 100%; */

		/* border: 1px solid red; */
	}

	.swiper-slide img {
		display: block;
		/* width: 100%; */
		/* height: 100%; */
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

	@media (max-width: 404px) {
		.swiper-button-prev {
			color: white;
			display: block;
		}

		.swiper-button-next {
			color: white;
			display: block;
		}
	}
`;

export default Container;
