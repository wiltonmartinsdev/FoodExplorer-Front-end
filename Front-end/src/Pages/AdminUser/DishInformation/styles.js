import styled from "styled-components";

const Container = styled.div`
	width: 43rem;

	margin: auto;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem auto 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		width: 192rem;
		grid-template-rows: 11.4rem 731px 7.7rem;
	}

	@media screen and (min-width: 1921px) {
		width: 384rem;
		height: 216rem;
	}
`;

const Content = styled.main`
	/* width: 31.6rem; */

	grid-area: main;

	margin: 3.2rem 5.6rem 0;

	/* border: 1px solid red; */

	text-align: center;

	div#wrapper {
		div#containerDish {
			div#backButton {
				display: flex;
				gap: 1.1rem;

				img#leftArrow {
					width: 1.2rem;
					height: 2.2rem;

					position: relative;
					top: 0.2rem;
				}
			}

			img#dish {
				width: 26.4rem;

				margin: 1.6rem 0;
			}
		}

		div#ingredientsSection {
			div#tags {
				position: relative;
				/* bottom: 1.3rem; */
			}
		}
	}

	button#editDish {
		margin: 2rem 0 4.8rem;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		div#wrapper {
			div#containerDish {
				div#backButton {
					position: absolute;
					left: 7rem;

					transform: scale(1.2);
				}
			}

			div#ingredientsSection {
				/* border: 1px solid red; */

				display: flex;
				flex-direction: column;
				align-items: center;

				width: 46.2rem;
				margin: auto;

				div#tags {
					/* border: 1px solid red; */
					width: 41.5rem;

					position: relative;
					/* bottom: 2.2rem; */
					left: 2rem;
				}
			}
		}

		button#editDish {
			width: 45rem;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		/* margin: auto; */
		/* position: relative; */

		div#wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 13.5rem;

			position: relative;
			top: 8.5rem;

			/* border: 1px solid red; */

			div#containerDish {
				transform: scale(1.5);

				div#backButton {
					position: relative;
					right: 7rem;
				}
			}

			div#ingredientsSection {
				width: 48.2rem;

				transform: scale(1.2);
				/* 
            p{
                position: relative;
                right: 1.6rem;
            } */

				div#tags {
					width: 50.6rem;

					/* position: relative;
					bottom: 1.2rem; */
				}
			}
		}

		button#editDish {
			width: 9.5rem;
			height: 3.5rem;

			position: relative;
			top: 6.5rem;
			right: 2rem;

			font-size: 1.1rem;

			border-radius: 0.4rem;
		}
	}

	@media screen and (min-width: 1921px) {
		div#wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 13.5rem;

			position: relative;
			top: 8.5rem;

			/* border: 1px solid red; */

			div#containerDish {
				transform: scale(1.5);

				div#backButton {
					position: relative;
					right: 7rem;
				}
			}

			div#ingredientsSection {
				width: 48.2rem;

				transform: scale(1.2);

				div#tags {
					width: 50.6rem;
				}
			}
		}

		button#editDish {
			width: 9.5rem;
			height: 3.5rem;

			position: relative;
			top: 6.5rem;
			right: 2rem;

			font-size: 1.1rem;

			border-radius: 0.4rem;
		}
	}
`;

export { Container, Content };
