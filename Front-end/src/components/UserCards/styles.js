import styled from "styled-components";

const Container = styled.section`
	/* width: 43.6rem; */
	/* width: 43rem; */
	height: 29.2rem;

	margin-left: 2.4rem;
	margin-top: 2.4rem;

	/* border: 1px solid yellow; */

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		margin-left: 10.5rem;

		/* border: 1px solid red; */
	}

	/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
		margin-left: 11rem;

		border: 1px solid red;
	} */

	@media screen and (min-width: 1921px) {
		margin-left: 7rem;

		/* border: 1px solid yellow; */
	}

	/* @media screen and (min-width: 2561px){
		margin-left: 11rem;

	} */
`;

const Content = styled.div`
	/* display: flex; */
	/* gap: 1.6rem; */

	/* margin-top: 2.4rem; */
	/* margin-bottom: 2.4rem; */

	/* border: 1px solid red; */

	div#cards {
		width: 17.8rem;
		height: 29.2rem;

		position: relative;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

		border-radius: 0.8rem;
		border: 1px solid #000204;

		/* border: 1px solid yellow; */

		img#dishImage {
			width: 8.8rem;
			margin: 2.4rem auto 0;
		}

		h1 {
			font-family: Poppins, sans-serif;
			font-weight: 500;
			font-size: 1.3rem;
			line-height: 2.4rem;

			margin: auto;

			/* border: 1px solid red; */

			text-align: center;
		}

		p {
			color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
			text-align: center;

			margin-bottom: 2rem;
		}

		div#includeDish {
			width: 16.2rem;
			height: 8rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.6rem;

			margin: auto;

			/* border: 1px solid red; */
		}

		div#icons {
			display: flex;
			justify-content: space-between;
			align-items: center;

			width: 10rem;
			height: 3.2rem;

			/* border: 1px solid yellow; */
		}

		img#Minus {
			width: 1.8rem;
			height: 0.4rem;

			margin: 0;

			border-radius: 1rem;

			cursor: pointer;
		}

		img#Plus {
			width: 2rem;
			height: 2rem;

			margin: 0;

			cursor: pointer;
		}

		div#heartIcon {
			/* border: 1px solid red; */

			width: 2.4rem;
			height: 2.2rem;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: 1.6rem;
			right: 1.8rem;

			img#heart {
				width: 2.4rem;
				height: 2.2rem;

				position: relative;
				margin: 0;

				cursor: pointer;
			}
		}

		button {
			width: 13.2rem;
			height: 2.8rem;
		}
	}
`;

export { Container, Content };
