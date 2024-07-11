import styled from "styled-components";

const Container = styled.div`
	min-width: 4rem;
	min-height: 100vh;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
		button#enter {
			margin-bottom: 3.2rem;
		}
		#linkMyAccount {
			text-align: center;
			button#myAccount {
				font-size: 1.4rem;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 15rem;

		header {
			margin: 0;
		}

		form {
			width: 44.4rem;

			padding: 6.4rem;

			border-radius: 1.6rem;

			justify-content: center;
			align-items: center;

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
