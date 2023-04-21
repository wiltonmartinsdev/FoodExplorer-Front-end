import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;
	height: 91.8rem;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	margin: auto;

	nav {
		width: 100%;
		height: 11.4rem;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

		display: flex;
		align-items: center;

		padding: 5.6rem 2.8rem 2.4rem;

		div {
			display: flex;
			align-items: center;
			gap: 1.6rem;

			p {
				font-size: 2.116rem;
				line-height: 2.48rem;
			}
		}
	}
`;

const Content = styled.div`
	width: 37.2rem;
	height: 67.7rem;

	margin: 3.6rem 2.8rem 1.357rem;
`;

export { Container, Content };
