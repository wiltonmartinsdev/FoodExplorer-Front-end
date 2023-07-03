import styled from "styled-components";

const Container = styled.nav`
	width: 42.8rem;
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	margin: auto;
	padding: 5.6rem 2.8rem 2.4rem;

	position: relative;

	z-index: 9999;

	div[typeof="input"],
	button,
	img#iconSignOut {
		display: none;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		width: 144rem;

		padding: 2.4rem 9rem;

		/* img.menu {
			display: none;
		}

		div[typeof="input"],
		button,
		img#iconSignOut {
			display: block;
		}

		border: 1px solid red; */

		display: flex;
		justify-content: center;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		width: 144rem;

		display: flex;
		align-items: center;

		img.menu {
			display: none;
		}

		div[typeof="input"],
		button,
		img#iconSignOut {
			display: block;
		}

		div[typeof="input"] {
			width: 70rem;
		}

		button {
			width: 22.2rem;
			height: 5.6rem;
		}

		img#iconSignOut {
			width: 3.2rem;
		}
	}

	border: 1px solid yellow;
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
`;

export { Container, Content, Brand };
