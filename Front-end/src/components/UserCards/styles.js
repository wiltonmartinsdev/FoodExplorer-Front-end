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

		cursor: pointer;
	}

	h1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 1.3rem;
		line-height: 2.4rem;

		margin: auto;

		position: relative;
		top: 1.3rem;

		text-align: center;
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

		div#icons {
			display: flex;
			justify-content: space-between;
			align-items: center;

			width: 10rem;
			height: 3.2rem;

			img#Minus {
				width: 1.8rem;
				height: 0.4rem;

				margin: 0;

				border-radius: 1rem;

				cursor: pointer;
			}

			span {
				font-size: 2rem;
			}

			img#Plus {
				width: 2rem;
				height: 2rem;

				margin: 0;

				cursor: pointer;
			}
		}

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
		right: 1.8rem;

		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		p#description {
			display: none;
		}
	}

	@media screen and (min-width: 769px) {
		height: 30rem;

		p#description {
			display: block;

			width: 16.6rem;
			height: 4.8rem;

			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			text-align: center;

			margin: 1.5rem 0.5rem;

			overflow-y: auto;
			overflow-x: hidden;
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

			div#icons span {
				position: relative;
				left: 0.2rem;
			}

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
