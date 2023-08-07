import styled from "styled-components";

const Container = styled.button`
	display: none;

	@media screen and (min-width: 769px) {
		width: 5rem;
		height: 5rem;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		left: 182rem;

		border-radius: 50%;
		border: none;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
	}
`;

export default Container;
