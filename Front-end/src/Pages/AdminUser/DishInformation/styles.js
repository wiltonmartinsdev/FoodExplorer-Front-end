import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;

	margin: auto;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem auto 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}
`;

const Content = styled.main`
	/* width: 31.6rem;
	height: 67.7rem; */

	grid-area: main;

	margin: 3.2rem 5.6rem 0;

	/* border: 1px solid red; */

	text-align: center;

	div#backButton {
		display: flex;
		gap: 1.1rem;

		cursor: pointer;
	}

	img#leftArrow {
		width: 1.2rem;
		height: 2.2rem;

		position: relative;
		top: 0.2rem;
	}

	img#dish {
		width: 26.4rem;

		margin: 1.6rem 0;
	}

	button {
		margin-bottom: 4.8rem;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		div#ingredientsSection {
			/* border: 1px solid red; */

			width: 46.2rem;

			position: relative;
			left: 9.5rem;
		}

		div#tags {
			/* border: 1px solid red; */
			width: 38rem;

			position: relative;
			left: 2rem;
		}
	}
`;

export { Container, Content };
