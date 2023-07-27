import styled from "styled-components";

const Container = styled.nav`
	/* width: 43rem; */
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	/* margin: auto; */
	padding-right: 2.8rem;
	padding-left: 2.8rem;
	/* padding: 5.6rem 2.8rem 2.4rem; */

	position: relative;

	z-index: 9999;

	display: flex;
	justify-content: flex-start;
	/* justify-content: center; */
	/* align-items: center; */

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

			/* border: 1px solid yellow; */
		}

		.input,
		.button,
		img#iconSignOut {
			display: block;
		}

		width: 192rem;

		/* padding: 2.4rem 9rem; */
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;

	/* width: 37.2rem; */

	margin: auto;

	/* border: 1px solid yellow; */

	img#iconSignOut {
		cursor: pointer;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 71rem;

		justify-content: center;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		justify-content: center;

		/* width: 160rem; */

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

		.button {
			width: 22.2rem;
			height: 5.6rem;
		}

		img#iconSignOut {
			width: 3.2rem;
		}
	}

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

		.button {
			width: 22.2rem;
			height: 5.6rem;
		}

		img#iconSignOut {
			width: 3.2rem;
		}

		width: 150rem;

        /* border: 1px solid yellow; */
	}
`;

const Brand = styled.div`
	/* width: 33.2rem; */

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	/* border: 1px solid orange; */

	position: relative;
	/* left: 0.6rem; */

	/* border: 1px solid yellow; */

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

	@media screen and (min-width: 430px) and (max-width: 768px) {
		/* left: 15rem; */

		/* border: 1px solid red; */
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		/* left: 15rem; */

		align-items: flex-start;

		width: 16.1rem;
		height: 4.5rem;

		/* border: 1px solid red; */

		p {
			position: absolute;
			top: 50%;
			right: 0;
		}

		.input {
		}
	}

	/* border: 1px solid red; */

	/* > h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	} */

	@media screen and (min-width: 1921px) {
		/* width: 31.6rem;

		img {
			width: 4.5rem;
		}

		> h1 {
			font-size: 4rem;
			font-weight: 700;
			line-height: 2.48rem;

			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
		} */

        align-items: flex-start;

width: 16.1rem;
height: 4.5rem;

/* border: 1px solid red; */

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
