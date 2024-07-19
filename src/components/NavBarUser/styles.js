import styled from "styled-components";

const Container = styled.nav`
	position: relative;

	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	padding: 3.5rem 0;

	z-index: 9999;

	.input,
	.button,
	img#iconSignOut {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		.input,
		.button,
		img#iconSignOut {
			display: block;
		}
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 2.8rem;

	img.menu {
		cursor: pointer;
	}

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 1024px) {
		max-width: 102.4rem;

		margin: 0 auto;
		padding: 0 1rem;

		img.menu {
			display: none;
		}

		div[typeof="input"] {
			width: 50%;

			padding-left: 12.5rem;

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		}

		.input input {
			padding: 0;
		}

		.input svg {
			position: absolute;
			top: 1.7rem;
			margin-left: -2.4rem;
		}

		.button {
			position: relative;
		}

		img#iconSignOut {
			width: 3.2rem;
		}
	}
`;

const Brand = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	> h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}
`;

export { Container, Content, Brand };
