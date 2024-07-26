import styled from "styled-components";

const Container = styled.div`
	min-width: 32rem;
	min-height: 100vh;

	position: relative;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	padding: 3.8rem 2.8rem 0;

	display: flex;
	flex-direction: column;

	div#backButton {
		display: flex;
		gap: 0.5rem;

		max-width: 1024px;

		margin: 0 auto;

		button#buttonText {
			position: relative;
			bottom: 0.1rem;
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			align-items: center;
			gap: 2.5rem;

			padding-left: 1.1rem;

			img#leftArrow {
				width: 1.3rem;
			}

			button#buttonText {
				transform: scale(1.8);

				font-weight: 700;

				bottom: 0.2rem;
			}
		}
	}

	button#editDish {
		margin: 4rem auto;

		max-width: 31.6rem;

		@media screen and (min-width: 1024px) {
			margin: 0 auto;

			max-width: 13rem;

			position: relative;
			right: 3.3rem;
		}
	}
`;

const Content = styled.main`
	max-width: 102.4rem;

	margin: 0 auto;

	text-align: center;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	div#containerDish {
		position: relative;

		img#dish {
			width: 26rem;

			margin: 1.6rem 0;

			@media screen and (min-width: 1024px) {
				position: relative;
				top: 4.5rem;

				transform: scale(1.4);
			}
		}
	}

	@media screen and (min-width: 1024px) {
		margin-top: 100px;
		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 9rem;
	}
`;

export { Container, Content };
