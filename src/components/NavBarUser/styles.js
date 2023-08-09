import styled from "styled-components";

const Container = styled.nav`
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	padding-right: 2.8rem;
	padding-left: 2.8rem;

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

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;
	}

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
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;

	width: 37.2rem;

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 71rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		width: 123.6rem;

		img.menu {
			display: none;
		}

		div[typeof="input"] {
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		}

		.input input {
			padding: 0;
		}

		.input {
			width: 70rem;

			padding-left: 22.5rem;

			z-index: -1;
		}

		.input svg {
			position: absolute;
			top: 1.6rem;
			left: 18.5rem;
		}

		img#iconSignOut {
			width: 3.2rem;
		}
	}

	@media screen and (min-width: 1921px) {
		width: 150rem;

		img.menu {
			display: none;
		}

		div[typeof="input"] {
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
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
	}
`;

const Brand = styled.div`
	width: 16.6rem;

	display: flex;
	justify-content: center;
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
`;

export { Container, Content, Brand };
