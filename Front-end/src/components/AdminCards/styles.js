import styled from "styled-components";

const Container = styled.section`
	/* width: 43.6rem; */
	height: 29.2rem;

	/* margin-left: 2.4rem; */
	margin-left: 1.7rem;
	margin-top: 2.4rem;

	/* border: 1px solid red; */

	@media screen and (min-width: 430px) and (max-width: 768px) {
		margin-left: 0.8rem;
		/* border: 1px solid red; */
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		margin-left: 10.5rem;

		/* border: 1px solid red; */
	}

	@media screen and (min-width: 1921px) {
		margin-left: 10.5rem;

		/* border: 1px solid yellow; */
	}
`;

const Content = styled.div`
	/* display: flex; */
	/* gap: 1.6rem; */

	/* margin-top: 2.4rem; */
	/* margin-bottom: 2.4rem; */

	/* border: 1px solid yellow; */

	div#cards {
		width: 17.8rem;
		height: 29.2rem;

		position: relative;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

		border-radius: 0.8rem;
		border: 1px solid #000204;

		border: 1px solid yellow;

		display: flex;
		flex-direction: column;
		justify-content: center;

		div#wrapperCards {
			position: relative;
			bottom: 1.5rem;
		}

		img#dishImage {
			width: 8.8rem;
			margin: 2.4rem auto 0;

			position: relative;
			top: 1rem;

			transform: scale(1.3);
		}

		h1 {
			font-family: Poppins, sans-serif;
			font-weight: 500;
			font-size: 1.3rem;
			line-height: 2.4rem;

			/* margin: 1.2rem 0 1.2rem; */
			margin: 3.3rem auto 0;
			text-align: center;

			/* border: 1px solid red; */
		}

		p#description {
			display: none;
		}

		p#price {
			color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
			text-align: center;

			position: relative;
			top: 1rem;

			/* border: 1px solid green; */
		}

		/* div#icons {
			display: flex;
			justify-content: space-between;
			align-items: center;

			width: 10rem;
			height: 3.2rem;

		} */

		div#pencilIcon {
			/* border: 1px solid red; */

			width: 2.4rem;
			height: 2.2rem;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: -1.4rem;
			right: 1.8rem;

			img#heart {
				width: 2.4rem;
				height: 2.4rem;

				position: relative;
				margin: 0;

				cursor: pointer;
			}
		}

		@media screen and (min-width: 769px) {
			div#wrapperCards {
				bottom: 0;
			}

            div#pencilIcon{
                top: 0;
            }

			p#description {
				display: block;

				width: 16.6rem;
				height: 4.8rem;

				font-size: 1.2rem;
				color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

				text-align: center;

				margin: 1.5rem 0.5rem;

				position: relative;
				bottom: 0.5rem;

				overflow-y: auto;
				overflow-x: hidden;

				/* border: 1px solid red; */
			}

			p#price {
				top: -0.5rem;
			}
		}
	}
`;

export { Container, Content };
