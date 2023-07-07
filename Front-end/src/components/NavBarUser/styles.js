import styled from "styled-components";

const Container = styled.nav`
	width: 43rem;
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	padding-right: 2.8rem;
	padding-left: 2.8rem;
	/* padding: 5.6rem 2.8rem 2.4rem; */

	position: relative;

	z-index: 9999;

	display: flex;
	justify-content: center;
	align-items: center;

	.input,
	.button,
	img#iconSignOut {
		display: none;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 144rem;

		/* padding: 2.4rem 9rem; */
	}

	@media screen and (min-width: 1441px) and (max-width: 1920px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;

		padding: 2.4rem 9rem;
	}

    @media screen and (min-width: 1921px) and (max-width: 2560px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 256rem;

		padding: 2.4rem 9rem;
	}

	/* border: 1px solid red; */
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 37.2rem;

	/* border: 1px solid yellow; */

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 71rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		img.menu {
			display: none;
		}

		.input input {
			padding: 0;
		}

		.input {
			width: 70rem;

			padding-left: 22.5rem;
		}

		.input svg {
			position: absolute;
			top: 1.6rem;
			left: 18.5rem;
		}

		/* button {
			width: 22.2rem;
			height: 5.6rem;
		} */

		width: 138.2rem;

		img#iconSignOut {
			width: 3.2rem;
		}
	}

	@media screen and (min-width: 1441px) and (max-width: 1920px) {
		img.menu {
			display: none;
		}

		.input input {
			padding: 0;
		}

		.input {
			width: 70rem;

			padding-left: 22.5rem;
		}

		.input svg {
			position: absolute;
			top: 1.6rem;
			left: 18.5rem;
		}

		/* button {
			width: 22.2rem;
			height: 5.6rem;
		} */

		img#iconSignOut {
			width: 3.2rem;
		}

		width: 150rem;
	}

    @media screen and (min-width: 1921px) and (max-width: 2560px) {
		img.menu {
			display: none;
		}

		.input input {
			padding: 0;
		}

		.input {
			width: 138.6rem;


			padding-left: 55.5rem;
		}

		.input svg {
			position: absolute;
			top: 1.6rem;
			left: 51.5rem;
		}

		/* button {
			width: 22.2rem;
			height: 5.6rem;
		} */

		img#iconSignOut {
			width: 3.2rem;
		}

		width: 238rem;
	}

	/* border: 1px solid yellow; */
`;

const Brand = styled.div`
	width: 16rem;

	display: flex;
	align-items: center;
	gap: 0.8rem;

	img {
		width: 2.4rem;
	}

	> h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}

	@media screen and (min-width: 1441px) and (max-width: 1920px) {
		width: 31.6rem;

		img {
			width: 4.5rem;
		}

		> h1 {
			font-size: 4rem;
			font-weight: 700;
			line-height: 2.48rem;

			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
		}
	}

    @media screen and (min-width: 1921px) and (max-width: 2560px) {
		width: 31.6rem;

		img {
			width: 4.5rem;
		}

		> h1 {
			font-size: 4rem;
			font-weight: 700;
			line-height: 2.48rem;

			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
		}
	}

	/* border: 1px solid orange; */
`;

export { Container, Content, Brand };
