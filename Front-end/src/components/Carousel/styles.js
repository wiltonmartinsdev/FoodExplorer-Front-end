import styled from "styled-components";

const Container = styled.div`
	width: 40.4rem;
	height: 100%;

	display: flex;
	align-items: center;

	/* border: 1px solid red; */

	.mySwiper {
		width: 100%;
		/* height: 100%; */

		/* border: 1px solid red; */
	}

	.swiper-slide {
		/* width: 100%; */
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
