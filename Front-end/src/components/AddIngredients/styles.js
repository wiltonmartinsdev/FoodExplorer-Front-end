import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;

	background-color: ${({ theme, isNew }) =>
		isNew ? theme.COLORS.TEXT_COLOR_600 : "transparent"};

	border: ${({ theme, isNew }) =>
		isNew ? "none" : `1px dashed ${theme.COLORS.TEXT_COLOR_600}`};

	border-radius: 0.8rem;

	margin: 0.8rem;

	padding-right: 1.6rem;

	input {
		width: 9.4rem;
		height: 3.2rem;

		background: transparent;
		border: none;

		padding-left: 1.6rem;
	}

	button {
		border: none;
		background: none;

		color: ${({ theme, isNew }) =>
			isNew ? theme.COLORS.TEXT_COLOR_100 : theme.COLORS.TEXT_COLOR_500};

		display: flex;
	}
`;

export default Container;
