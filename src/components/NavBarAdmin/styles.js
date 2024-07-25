import styled from "styled-components";

const Container = styled.nav`
	position: relative;

	min-width: 32rem;
	height: 11.4rem;

	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	padding: 3.5rem 0;

	z-index: 9999;

	.input,
	.button,
	img#iconSignOut {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		height: 10.4rem;

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

	width: 102.4rem;

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

			padding-left: 14rem;

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
			width: 22.2rem;
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
	gap: 1rem;

	div#wrapperBrand {
		display: flex;
		gap: 1rem;

		> h1 {
			font-size: 2.116rem;
			font-weight: 700;
			line-height: 2.48rem;

			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
		}
	}

	div#admin {
		p {
			color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
		}

		@media screen and (min-width: 1024px) {
			width: 100%;

			display: flex;
			justify-content: end;
			align-items: start;
		}
	}

	@media screen and (min-width: 1024px) {
		display: block;
	}
`;

export { Container, Content, Brand };
