import styled from "styled-components";

const Container = styled.div`
	min-width: 32rem;

	min-height: 100vh;

	position: relative;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	div#wrapperAddOrder {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		div#wrapperAddOrder {
			display: flex;
			align-items: center;
			justify-content: center;

			position: relative;
			left: 0.8rem;
		}
	}
`;

const Content = styled.main`
	max-width: 102.4rem;

	margin: 0 auto;
	padding: 3.8rem 3.2rem 0;

	text-align: center;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	div#containerDish {
		position: relative;

		div#backButton {
			display: flex;
			justify-content: center;
			gap: 0.5rem;

			width: 9.3rem;
			height: 50px;

			@media screen and (min-width: 1024px) {
				position: relative;
				left: -5.2rem;
				bottom: 5.5rem;

				transform: scale(1.8);
			}
		}

		img#dish {
			width: 26.4rem;

			margin: 1.6rem 0;

			@media screen and (min-width: 1024px) {
				transform: scale(1.3);
			}
		}
	}

	div#wrapperAddRequest {
		border: 1px solid red;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media screen and (min-width: 1024px) {
		margin-top: 100px;
		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 7.5rem;
	}
`;

export { Container, Content };
