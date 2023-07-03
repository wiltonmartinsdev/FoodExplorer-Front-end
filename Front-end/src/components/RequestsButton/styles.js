import styled from "styled-components";

const Container = styled.button`
	width: 22.2rem;
	height: 6rem;

	background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
	color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

	border: none;
	border-radius: 0.5rem;

	div#content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
	}
`;

export default Container;
