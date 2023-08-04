import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;

	background-color: ${({ theme, isNew }) =>
		isNew ? "transparent" : theme.COLORS.TEXT_COLOR_600};

	border: ${({ theme, isNew }) =>
		isNew ? `1px dashed ${theme.COLORS.TEXT_COLOR_600}` : "none"};

	border-radius: 0.8rem;

	margin: 0.8rem;
	padding-right: 1.6rem;

	input {
		width: 9.4rem;
		height: 3.2rem;

		background-color: ${({ theme, isNew }) =>
			isNew ? "transparent" : theme.COLORS.TEXT_COLOR_600};

		border: none;
		border-radius: 0.8rem;

		padding-left: 1.6rem;
	}

	button {
		background: none;
		border: none;

		color: ${({ theme, isNew }) =>
			isNew ? theme.COLORS.TEXT_COLOR_500 : theme.COLORS.TEXT_COLOR_100};

		display: flex;
	}
`;

export default Container;
