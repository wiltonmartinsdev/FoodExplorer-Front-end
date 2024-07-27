import styled from "styled-components";

const Container = styled.div`
	min-width: 32rem;
	min-height: 100vh;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	padding: 3.8rem 2.8rem 0;

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

	div#wrapperAddOrder {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		@media screen and (min-width: 1024px) {
			padding-left: 2.5rem;
		}
	}
`;

const Content = styled.main`
	max-width: 102.4rem;

	margin: 0 auto;

	text-align: center;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	div#containerDish {
		img#dish {
			width: 26rem;

			margin: 1.6rem 0;

			@media screen and (min-width: 1024px) {
				position: relative;
				top: 4.5rem;

				transform: scale(1.2);
			}
		}
	}

	div#wrapperAddRequest {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media screen and (min-width: 1024px) {
		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 9rem;
	}
`;

export { Container, Content };
