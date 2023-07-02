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
	grid-area: main;

	padding: 1.6rem 5.6rem 3.357rem;

	/* border: 1px solid red; */

	div#backButton {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		cursor: pointer;
	}

	img#leftArrow {
		width: 1.2rem;
		height: 2.2rem;
	}

	img#dish {
		position: relative;
		left: 2.5rem;

		width: 26.4rem;

		margin: 1.6rem 0;

		/* border: 1px solid red; */

		@media screen and (min-width: 430px) and (max-width: 768px) {
			left: 19.5rem;
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
	}

	/* div#footer {
		top: 143.5rem;

		height: 7.7rem;

		padding: 0;
	} */
`;

export { Container, Content };
