import styled from "styled-components";

const Container = styled.div`
	width: 43rem;

	margin: auto;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem 73.1rem 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		width: 192rem;
	}

	@media screen and (min-width: 1921px) {
		width: 384rem;
		height: 216rem;
	}
`;

const Content = styled.main`
	grid-area: main;

	padding: 5.6rem 9rem 13.7rem 3.5rem;

	display: flex;
	gap: 30rem;

	div#paymentWrapper {
		display: none;
	}

	h1 {
		font-size: 3.2rem;
		font-weight: 500;

		margin-bottom: 6rem;
	}

	ul {
		/* border: 1px solid red; */

		list-style: none;

		display: flex;
		flex-direction: column;
		gap: 3.6rem;

		margin-bottom: 4rem;

		li {
			display: flex;
			gap: 1.2rem;

			img {
				width: 7rem;
			}

			div#description {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 0.5rem;

				p#title {
					font-family: Poppins, sans-serif;
					font-size: 1.7rem;
				}

				p#subTitle {
					font-size: 1rem;

					color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_400};

					cursor: pointer;
				}
			}
		}
	}

	p#total {
		font-family: Poppins, sans-serif;
		font-size: 1.7rem;
	}

	button#advance {
		width: 14rem;
		height: 3.5rem;

		border-radius: 0.4rem;

		position: relative;
		top: 6.5rem;
		left: 20.5rem;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		padding-left: 5.4rem;

		button#advance {
			top: 6.5rem;
			left: 52.6rem;
		}
	}

	/* @media screen and (min-width: 769px) and (max-width: 1920px) {
		margin: auto;

		div#orderItems {
		}

		div#paymentWrapper {
			display: block;


			div#payment {
				width: 53rem;
				height: 44.5rem;

				border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_600};
				border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;

				position: relative;

				div#buttonWrapper {
					display: flex;

					width: 53rem;

					position: relative;
					bottom: 0.1rem;
					right: 0.1rem;

					border: 1px solid
						${({ theme }) => theme.COLORS.TEXT_COLOR_600};
					border-radius: 0.8rem 0.8rem 0 0;

					button#pix {
						background-color: ${({ theme }) =>
							theme.COLORS.BACKGROUND_800};

						border-radius: 0.8rem 0 0 0;
						border-right: 1px solid
							${({ theme }) => theme.COLORS.TEXT_COLOR_600};
					}

					button#credit {
						background-color: ${({ theme }) =>
							theme.COLORS.BACKGROUND_500};

						border-radius: 0 0.8rem 0 0;
					}
				}

				img {
					position: absolute;
					top: 25%;
					left: 25%;
				}
			}
		}

		button#advance {
			display: none;
		}
	}

	@media screen and (min-width: 1921px) {
	} */
`;

export { Container, Content };
