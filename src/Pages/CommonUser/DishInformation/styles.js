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
		grid-template-rows: 11.4rem 100vh 7.7rem;
	}

	@media screen and (min-width: 1921px) {
		width: 384rem;
		height: 100vh;
	}
`;

const Content = styled.main`
	grid-area: main;

	margin: 3.5rem 5.6rem 0;

	text-align: center;

	div#wrapper {
		div#containerDish {
			div#backButton {
				display: flex;
				align-items: center;
				gap: 1.1rem;

				width: 9.3rem;

				img#leftArrow {
					width: 1.2rem;
					height: 2.2rem;
				}
			}

			img#dish {
				width: 26.4rem;

				margin: 1.6rem 0;
			}
		}

		div#dishDescriptionSection {
			div#tags {
			}
		}
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		div#wrapper {
			position: relative;
			top: 7rem;

			div#containerDish {
				div#backButton {
					position: absolute;
					bottom: 58rem;
					left: 1.5rem;

					transform: scale(1.2);
				}

				img#dish {
					position: relative;
					bottom: 3rem;

					transform: scale(1.2);
				}
			}

			div#dishDescriptionSection {
				display: flex;
				flex-direction: column;
				align-items: center;

				width: 46.2rem;
				margin: auto;

				div#tags {
					width: 41.5rem;

					position: relative;
					left: 2rem;
				}
			}
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		div#wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 13.5rem;

			position: relative;
			top: 8.5rem;

			div#containerDish {
				transform: scale(1.5);

				div#backButton {
					position: relative;
					right: 7rem;
				}
			}

			div#dishDescriptionSection {
				width: 48.2rem;

				transform: scale(1.2);

				div#tags {
					width: 47.5rem;

					position: relative;
					left: 1.5rem;
				}
			}
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

			div#containerDish {
				transform: scale(1.5);

				div#backButton {
					position: relative;
					right: 15rem;
				}
			}

			div#dishDescriptionSection {
				width: 48.2rem;

				transform: scale(1.2);

				div#tags {
					width: 47.5rem;

					position: relative;
					left: 1.5rem;
				}
			}
		}
	}
`;

export { Container, Content };
