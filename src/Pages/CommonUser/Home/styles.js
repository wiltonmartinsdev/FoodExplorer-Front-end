import styled from "styled-components";

const Container = styled.div`
	min-width: 32rem;
	min-height: 100vh;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`;

const Content = styled.main`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	min-width: 32rem;

	padding: 0 2rem;

	margin-bottom: 5rem;

	div#descriptionOfFlavors {
		width: 100%;

		position: relative;

		height: 15rem;

		margin: 4.4rem 1.5rem 3.8rem 0;

		padding-left: 14.5rem;
		padding-right: 0.4rem;

		background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENTS_200};

		border-radius: 0.2rem;

		display: flex;
		justify-content: center;
		align-items: center;

		div#wrapperDescription {
			z-index: 1;

			text-align: center;

			h1 {
				font-family: Poppins, sans-serif;
				font-weight: 500;
				font-size: 1.8rem;
				line-height: 2.52rem;

				margin-bottom: 0.3rem;

				@media screen and (min-width: 1024px) {
					font-size: 2.5rem;
				}
			}

			p {
				font-family: Poppins, sans-serif;
				font-weight: 300;
				font-size: 1.2rem;
				line-height: 1.68rem;

				@media screen and (min-width: 1024px) {
					font-size: 1.5rem;
				}
			}
		}

		img#imgDescription {
			position: absolute;
			left: -2.4rem;

			@media screen and (min-width: 1024px) {
				display: none;
			}
		}

		img#imgDescriptionLg {
			display: none;

			@media screen and (min-width: 1024px) {
				display: block;

				position: absolute;
				top: -15.5rem;
				left: -12.4rem;

				transform: scale(0.7);
			}
		}

		@media screen and (min-width: 1024px) {
			max-width: 102.4rem;
			height: 19rem;

			margin: 16.4rem auto 7rem auto;
		}
	}

	div#carousel {
		max-width: 102.4rem;

		margin: 0 auto;

		position: relative;

		p.carousel {
			font-family: Poppins, sans-serif;
			font-size: 1.8rem;
			font-weight: 400;
			line-height: 2.52rem;

			margin: 2.4rem 0;
		}

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

		@media screen and (min-width: 1024px) {
			.swiper:hover {
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
	}
`;

export { Container, Content };
