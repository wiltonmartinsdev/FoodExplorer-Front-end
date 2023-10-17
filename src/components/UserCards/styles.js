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
	height: 27.8rem;

	position: relative;
	bottom: 1.2rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

	border-radius: 0.8rem;
	border: 1px solid #000204;

	img#dishImage {
		width: 8.8rem;
		margin: 2.4rem auto 0;

		transition: transform 0.5s ease;

		cursor: pointer;
	}

	img#dishImage:hover {
		transform: scale(1.4);
	}

	h1#cardsH1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 1.3rem;
		line-height: 2.4rem;

		margin: auto;

		position: relative;
		top: 1.3rem;

		text-align: center;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	p#price {
		color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
		text-align: center;

		margin-bottom: 2rem;

		position: relative;
		top: 1.2rem;
	}

	div#includeDish {
		width: 16.2rem;
		height: 8rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.6rem;

		margin: auto;

		button#include {
			width: 13.2rem;
			height: 2.8rem;
		}
	}

	.favoriteHeartIcon {
		svg {
			fill: red;
		}

		svg path {
			stroke: red;
		}
	}

	div#heartIcon {
		width: 2.4rem;
		height: 2.2rem;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 1.6rem;
		right: 1.6rem;

		transition: transform 0.5s ease;

		cursor: pointer;
	}

	div#heartIcon:hover {
		transform: scale(1.6);
	}

	@media screen and (max-width: 768px) {
		p#description {
			display: none;
		}
	}

	@media screen and (min-width: 769px) {
		height: 30rem;

		p#description {
			display: flex;
			flex-direction: column;
			width: 16.6rem;

			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			text-align: center;

			margin: 1.5rem 0.5rem;

			position: relative;
			bottom: 0.5rem;

			/* Limitar o número de linhas de texto a 3 */
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		p#price {
			top: -0.3rem;
		}

		div#includeDish {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;

			width: 16.2rem;
			height: 1.5rem;

			margin: auto;
			padding: 0 1rem;

			button#include {
				width: 10rem;
				height: 3.3rem;

				font-size: 1.1rem;

				border-radius: 0.3rem;
			}
		}
	}
`;

export { Container, Content };
