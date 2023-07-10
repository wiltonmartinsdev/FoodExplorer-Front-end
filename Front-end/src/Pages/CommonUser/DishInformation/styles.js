import styled from "styled-components";

const Container = styled.div`
	width: 43rem;

	margin: auto;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem 74rem 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		width: 144rem;
	}

	@media screen and (min-width: 1441px) and (max-width: 1920px) {
		width: 192rem;
	}

	@media screen and (min-width: 1921px) {
		width: 384rem;
		height: 216rem;

		grid-template-rows: 11.4rem 196.6rem 7.7rem;
	}
`;

const Content = styled.main`
	grid-area: main;

	padding: 3.5rem 5.6rem 0;

	/* border: 1px solid red; */

	display: flex;
	flex-direction: column;
	align-items: center;

	div#backButton {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		width: 9.3rem;

		cursor: pointer;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			position: relative;
			right: 11.7rem;
		}
	}

	img#leftArrow {
		width: 1.2rem;
		height: 2.2rem;
	}

	div#ingredientsSection {
		/* border: 1px solid red; */

		width: 31.9rem;
		height: 28.8rem;

		overflow: auto;
	}

	img#dish {
		/* position: relative;
		left: 2.5rem; */

		width: 26.4rem;

		margin: 1.6rem 0;

		/* border: 1px solid red; */

		@media screen and (min-width: 430px) and (max-width: 768px) {
		}
	}

	div#addRequest {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.9rem;

		img {
			cursor: pointer;
		}

		> span {
			font-size: 2.263rem;
			font-weight: 700;
			line-height: 3.62rem;
		}

		> button {
			width: 18.8rem;
			height: 3.786rem;

			font-size: 0.946rem;

			background: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

			border: none;
			border-radius: 0.5rem;

			position: relative;

			img {
				position: relative;
				top: 0.5rem;
				margin-right: 0.744rem;
			}

			span#point {
				position: relative;
				bottom: 0.2rem;
			}
		}
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;

		div#ingredientsSection {
			/* border: 1px solid red; */

			width: 44.2rem;
			height: 30.3rem;

			overflow: auto;

			/* position: relative;
			left: 9.5rem; */
		}

		div#tags {
			/* border: 1px solid red; */
			width: 40.5rem;

			position: relative;
			left: 1rem;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1440px) {
		div#ingredientsSection {
			/* border: 1px solid red; */

			width: 44.2rem;

			/* position: relative;
			left: 9.5rem; */
		}

		div#tags {
			/* border: 1px solid red; */
			width: 38rem;

			position: relative;
			left: 2rem;
		}
	}

	/* div#footer {
		top: 143.5rem;

		height: 7.7rem;

		padding: 0;
	} */
`;

export { Container, Content };
