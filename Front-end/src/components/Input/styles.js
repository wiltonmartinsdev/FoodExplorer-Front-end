import styled from "styled-components";

const Container = styled.div`
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

	border: none;
	border-radius: 0.5rem;

	display: flex;
	align-items: center;

	input {
		width: 100%;
		height: 4.8rem;
		gap: 1.6rem;

		background-color: transparent;

		border: none;
		border-radius: 0.5rem;

		padding-left: 1.6rem;

		::placeholder {
			color: #7c7c8a;
		}
	}

	svg {
		margin-left: 1.6rem;
		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};
	}
`;

export default Container;
