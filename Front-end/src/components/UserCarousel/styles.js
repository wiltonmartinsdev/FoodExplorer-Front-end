import styled from "styled-components";

const Container = styled.div`
	/* width: 40.4rem; */

	border: 1px solid green;

	h1 {
		font-family: Poppins, sans-serif;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 2.52rem;

		margin-left: 1.8rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			margin-left: 4.5rem;

			/* width: 15.2rem; */

			/* border: 1px solid red; */
		}

		@media screen and (min-width: 769px) and (max-width: 1920px) {
			margin-left: 43rem;

			width: 15.2rem;

			/* border: 1px solid red; */
		}

		/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
			margin-left: 43.3rem;

			width: 17.8rem;
		} */

		@media screen and (min-width: 1921px) {
			margin-left: 43rem;

			width: 17.8rem;
		}

		/* @media screen and (min-width: 2561px) {
			margin-left: 75.4rem;

			width: 17.8rem;
		} */
	}

	.mySwiper {
		width: 43rem;
		/* height: 100%; */

		/* margin-left: 1rem; */
		/* margin-bottom: 2.4rem; */

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 69rem;

			margin-left: 3.8rem;

			/* border: 1px solid red; */
		}

		@media screen and (min-width: 769px) and (max-width: 1920px) {
			width: 127rem;

			margin-left: 32.5rem;

			/* border: 1px solid yellow; */
		}

		/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
			width: 127.5rem;

			margin-left: 32.2rem;
		} */

		@media screen and (min-width: 1921px) {
			width: 127.6rem;

			margin-left: 32.5rem;

			/* border: 1px solid red; */
		}

		/* @media screen and (min-width: 2561px) {
			width: 127.5rem;

			margin-left: 64.4rem;
		} */

		/* border: 1px solid red; */
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

	@media (min-width: 769px) {
		/* height: 54rem; */

        .swiper-slide{
            height: 32.5rem;

            border: 1px solid;
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

	/* @media (max-width: 404px) {
		.swiper-button-prev {
			color: white;
			display: block;
		}

		.swiper-button-next {
			color: white;
			display: block;
		}
	} */

	/* @media (min-width: 430px) {
		width: 60rem;
	} */
`;

export default Container;
