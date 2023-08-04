import styled from "styled-components";

const Container = styled.section`
	margin-left: 1.7rem;
	margin-top: 2.4rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		margin-left: 0.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		margin-left: 10.5rem;
	}

	@media screen and (min-width: 1921px) {
		margin-left: 10.5rem;
	}
`;

const Content = styled.div`
	width: 17.8rem;
	height: 29.2rem;

	position: relative;
	bottom: 1.2rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

	border-radius: 0.8rem;
	border: 1px solid #000204;

	display: flex;
	flex-direction: column;
	justify-content: center;

	div#cardsWrapper {
		position: relative;
		bottom: 1.5rem;

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

			margin: 3.3rem auto 0;
			text-align: center;
		}

		p#description {
			display: none;
		}

		p#price {
			color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
			text-align: center;

			position: relative;
			top: 1rem;
		}

		div#pencilIcon {
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
	}

	@media screen and (min-width: 769px) {
		div#cardsWrapper {
			bottom: 0;

			div#pencilIcon {
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
			}

			p#price {
				top: -0.5rem;
			}
		}
	}
`;

export { Container, Content };
