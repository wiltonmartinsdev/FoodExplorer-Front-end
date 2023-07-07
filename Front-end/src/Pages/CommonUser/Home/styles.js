import styled from "styled-components";

const Container = styled.div`
	width: 43rem;

	margin: auto;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem auto 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		width: 144rem;
	}

	@media screen and (min-width: 1441px) and (max-width: 1920px) {
		width: 192rem;
	}

    @media screen and (min-width: 1921px) and (max-width: 2560px) {
		width: 256rem;
	}

	/* border: 1px solid red; */
`;

const Content = styled.main`
	grid-area: main;

	/* border: 1px solid yellow; */

	position: relative;

	div#descriptionOfFlavors {
		/* width: 37.6rem; */
		height: 12rem;

		margin: 4.4rem 1.6rem 6.2rem 3.6rem;
		padding: 3.6rem 0.8rem 2.2rem 15.3rem;

		background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENTS_200};

		border-radius: 0.2rem;

		/* border: 1px solid red; */

		h1 {
			font-family: Poppins, sans-serif;
			font-weight: 500;
			font-size: 1.8rem;
			line-height: 2.52rem;

			margin-bottom: 0.3rem;
		}

		p {
			font-family: Poppins, sans-serif;
			font-weight: 300;
			font-size: 1.2rem;
			line-height: 1.68rem;
		}

		/* border: 1px solid red; */

		@media screen and (min-width: 430px) and (max-width: 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.3rem;

			width: 69.5rem;

			padding: 2.2rem 0.8rem 2.2rem 13.4rem;

			/* border: 1px solid red; */

			h1 {
				font-family: Poppins, sans-serif;

				font-weight: 500;
				font-size: 3.4rem;
				line-height: 2.52rem;

				margin-bottom: 0.3rem;
			}

			p {
				font-family: Roboto, sans-serif;
				font-weight: 500;
				font-size: 1.3rem;
				line-height: 1.68rem;
			}
		}

		@media screen and (min-width: 769px) and (max-width: 1440px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 4rem;

			width: 125.5rem;
			height: 22rem;

			padding: 2.2rem 0.8rem 2.2rem 22rem;
			margin: 7.4rem 9rem;

			/* position: relative;
			left: 5.5rem; */

			h1 {
				font-family: Poppins, sans-serif;

				font-weight: 500;
				font-size: 6rem;
				line-height: 2.52rem;

				margin-bottom: 0.3rem;
			}

			p {
				font-family: Roboto, sans-serif;
				font-weight: 500;
				font-size: 2.3rem;
				line-height: 1.68rem;
			}
		}

		@media screen and (min-width: 1441px) and (max-width: 1920px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 4rem;

			width: 128rem;
			height: 22rem;

			padding: 2.2rem 0.8rem 2.2rem 22rem;
			margin: 11rem auto;

			/* position: relative;
			left: 5.5rem; */

			h1 {
				font-family: Poppins, sans-serif;

				font-weight: 500;
				font-size: 6rem;
				line-height: 2.52rem;

				margin-bottom: 0.3rem;
			}

			p {
				font-family: Roboto, sans-serif;
				font-weight: 500;
				font-size: 2.3rem;
				line-height: 1.68rem;
			}
		}

        @media screen and (min-width: 1921px) and (max-width: 2560px) {
            display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 4rem;

			width: 128rem;
			height: 22rem;

			padding: 2.2rem 0.8rem 2.2rem 22rem;
			margin: 8.4rem auto;

			/* position: relative;
			left: 5.5rem; */

			h1 {
				font-family: Poppins, sans-serif;

				font-weight: 500;
				font-size: 6rem;
				line-height: 2.52rem;

				margin-bottom: 0.3rem;
			}

			p {
				font-family: Roboto, sans-serif;
				font-weight: 500;
				font-size: 2.3rem;
				line-height: 1.68rem;
			}
		}
	}

	img#imgDescription {
		position: absolute;
		top: 1.5rem;
		left: 0.6rem;

		/* border: 1px solid red; */

		@media screen and (min-width: 769px) and (max-width: 1440px) {
			width: 63.2rem;
			height: 26.4rem;

			top: 3rem;
			left: -10.9rem;

			/* border: 1px solid red; */
		}

        @media screen and (min-width: 1441px) and (max-width: 1920px) {
			width: 33.8rem;
			height: 26.4rem;

			top: 6.6rem;
			left: 26.5rem;

			/* border: 1px solid red; */
		}

        @media screen and (min-width: 1921px) and (max-width: 2560px) {
			width: 33.8rem;
			height: 26.4rem;

			top: 3.9rem;
			left: 58.5rem;

			/* border: 1px solid red; */
		}

		/* border: 1px solid red; */
	}
`;

export { Container, Content };
