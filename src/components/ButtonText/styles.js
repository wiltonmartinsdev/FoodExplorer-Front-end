import styled from "styled-components";

const Container = styled.button`
	font-family: Poppins, sans-serif;
	font-weight: 500;

	border: none;

	background: transparent;
	color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
`;

export default Container;
