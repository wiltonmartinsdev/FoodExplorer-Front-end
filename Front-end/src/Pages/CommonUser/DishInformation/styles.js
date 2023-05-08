import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	margin: auto;
`;

const Content = styled.main`
	width: 31.6rem;
	height: 67.7rem;

	margin: 4.257rem auto 0;

	/* border: 1px solid red; */

	text-align: center;

	div#backButton {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		cursor: pointer;
	}

	img#leftArrow {
		width: 1.2rem;
		height: 2.2rem;
	}

	img#dish {
		width: 26.4rem;

		margin: 1.6rem 0;
	}
`;

export { Container, Content };
