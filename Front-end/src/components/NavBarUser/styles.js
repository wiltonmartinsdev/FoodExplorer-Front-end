import styled from "styled-components";

const Container = styled.nav`
	/* width: 43rem; */
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

	/* border: 1px solid red; */

	.input,
	.button,
	img#iconSignOut {
		display: none;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;

		/* padding: 2.4rem 9rem; */
	}

	/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;

		padding: 2.4rem 9rem;
	} */

	@media screen and (min-width: 1921px) {
		::before {
			content: "";
			width: 384rem;
			height: 11.4rem;
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

			position: absolute;
			top: 0;
            left: -96rem;
			z-index: -1;
		}

		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;

		/* padding: 2.4rem 9rem; */
	}

	/* @media screen and (min-width: 2561px){
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 256rem;

		padding: 2.4rem 9rem;
	} */
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;

	width: 37.2rem;

	/* border: 1px solid yellow; */

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 71rem;

		/* justify-content: center; */
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
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

		width: 123.6rem;

		img#iconSignOut {
			width: 3.2rem;
		}
	}

	/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
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



		img#iconSignOut {
			width: 3.2rem;
		}

		width: 150rem;
	} */

	@media screen and (min-width: 1921px) {
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

	/* @media screen and (min-width: 2561px) {
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

	

		img#iconSignOut {
			width: 3.2rem;
		}

		width: 238rem;
	} */

	/* border: 1px solid yellow; */
`;

const Brand = styled.div`
	width: 16rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	/* border: 1px solid green; */

	img {
		width: 2.4rem;
	}

	> h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}

	/* @media screen and (min-width: 1441px) and (max-width: 1920px) {
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
	} */

	@media screen and (min-width: 1921px) {
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

	/* @media screen and (min-width: 2561px){
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
	} */

	/* border: 1px solid orange; */
`;

export { Container, Content, Brand };
