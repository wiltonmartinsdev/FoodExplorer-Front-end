import styled from "styled-components";

const Container = styled.div`
	width: 43rem;
	height: 94.6rem;


	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	padding-top: 15.8rem;

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
	display: flex;
	flex-direction: column;
	align-items: center;

	form {
		display: flex;
		flex-direction: column;

		fieldset {
			border: none;

			legend {
				display: none;
			}

			width: 31.6rem;

			display: flex;
			flex-direction: column;

			label {
				font-weight: 400;
				color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

				margin-bottom: 0.8rem;
			}

			div[typeof="input"] {
				margin-bottom: 3.2rem;

				input:focus {
					outline: 1px solid;
					color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
				}
			}
		}

		button#createAccount {
			margin-bottom: 3.2rem;
		}

		#linkMyAccount {
			text-align: center;

			button#myAccount {
				font-size: 1.4rem;
			}
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 37rem;

		header {
			margin: 0;
		}

		form {
			width: 44.4rem;
			height: 4.4;
			padding: 6.4rem;

			border-radius: 1.6rem;

			fieldset {
				border: none;

				legend {
					display: block;

					font-family: Poppins, sans-serif;
					font-size: 3.2rem;
					font-weight: 500;

					text-align: center;
					margin-bottom: 3.2rem;
				}
			}

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

			margin: 0;
		}
	}

	@media screen and (min-width: 1921px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 37rem;

		header {
			margin: 0;
		}

		form {
			width: 44.4rem;
			height: 4.4;
			padding: 6.4rem;

			border-radius: 1.6rem;

			fieldset {
				border: none;

				legend {
					display: block;

					font-family: Poppins, sans-serif;
					font-size: 3.2rem;
					font-weight: 500;

					text-align: center;
					margin-bottom: 3.2rem;
				}
			}

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

			margin: 0;
		}
	}
`;

export { Container, Content };
