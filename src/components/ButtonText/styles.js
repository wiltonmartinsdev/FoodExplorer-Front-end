import styled from "styled-components";

const Container = styled.button`
	font-family: Poppins, sans-serif;
	font-weight: 300;
	font-size: 2.4rem;

	border: none;

	background: transparent;
	color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

	@media screen and (min-width: 769px) {
		font-weight: 700;
		font-size: 1.8rem;
	}
`;

export default Container;
