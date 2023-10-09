import styled from "styled-components";

const Container = styled.nav`
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	padding-right: 2.8rem;
	padding-left: 2.8rem;

	position: relative;

	z-index: 9999;

	display: flex;
	justify-content: flex-start;

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
	justify-content: center;
	align-items: center;
	gap: 4rem;

	margin: auto;

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 71rem;

		justify-content: center;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		justify-content: center;

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

		.button {
			width: 22.2rem;
			height: 5.6rem;

			position: relative;
		}

		img#iconSignOut {
			width: 3.2rem;
		}
	}

	@media screen and (min-width: 1921px) {
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

		.button {
			width: 22.2rem;
			height: 5.6rem;

			position: relative;
		}

		img#iconSignOut {
			width: 3.2rem;
		}

		width: 150rem;
	}
`;

const Brand = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	position: relative;
	left: 0.5rem;

	img {
		width: 2.4rem;
	}

	h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}

	p {
		font-size: 1.2rem;
		line-height: 1.92rem;

		color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		align-items: flex-start;

		width: 16.5rem;
		height: 4.5rem;

		p {
			position: absolute;
			top: 50%;
			right: 0;
		}

		.input {
		}
	}

	@media screen and (min-width: 1921px) {
		align-items: flex-start;

		width: 16.5rem;
		height: 4.5rem;

		p {
			position: absolute;
			top: 50%;
			right: 0;
		}

		.input {
		}
	}
`;

export { Container, Content, Brand };
