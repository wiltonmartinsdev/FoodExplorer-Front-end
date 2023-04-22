import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;
	height: 92.6rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	padding: 15.8rem 8.495rem 0 6.5rem;

	margin: auto;

	form {
		width: 31.6rem;

		display: flex;
		flex-direction: column;

		margin-bottom: 3.2rem;

		h4 {
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			margin-bottom: 0.8rem;
		}

		div {
			margin-bottom: 3.2rem;
		}
	}

	div {
		width: 31.6rem;
		text-align: center;

		a {
			font-size: 1.4rem;
		}
	}
`;

export { Container };
