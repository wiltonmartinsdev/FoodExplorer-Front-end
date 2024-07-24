import styled from "styled-components";

const Container = styled.section`
	max-width: 32rem;
`;

const Content = styled.div`
	max-width: 18.5rem;
	height: 29.5rem;

	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	border: 1px solid #000204;
	border-radius: 1rem;

	position: relative;

	margin: 0 auto;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

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

		text-align: center;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	p#description {
		display: none;

		@media screen and (min-width: 1024px) {
			display: flex;
			flex-direction: column;

			width: 16.6rem;
			height: 4.7rem;
			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			text-align: center;

			position: relative;

			/* Limitar o número de linhas de texto a 3 */
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}

	p#price {
		color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
		text-align: center;
	}

	div#includeDish {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2rem;

		button#include {
			width: 80%;
			height: 3rem;
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			button#include {
				height: 3.3rem;

				width: 30%;

				font-size: 1.1rem;

				border-radius: 0.3rem;
			}
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
		width: 1.5rem;
		height: 1.5rem;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 1rem;
		right: 1rem;

		transition: transform 0.5s ease;

		cursor: pointer;

		@media screen and (min-width: 1024px) {
			width: 2.4rem;
			height: 2.4rem;

			position: absolute;
			top: 1.6rem;
			right: 1.6rem;
		}
	}

	div#heartIcon:hover {
		transform: scale(1.6);
	}

	@media screen and (min-width: 1024px) {
		max-width: 23rem;
		height: 32rem;

		align-items: center;
	}
`;

export { Container, Content };
