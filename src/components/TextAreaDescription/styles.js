import styled from "styled-components";

const Container = styled.textarea`
	width: 36.4rem;
	height: 17.2rem;

	resize: none;

	border-radius: 0.8rem;
	border: none;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

	padding: 1.4rem;
	margin-bottom: 2.4rem;
`;

export default Container;
