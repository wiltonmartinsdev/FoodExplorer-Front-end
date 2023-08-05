import styled from "styled-components";

const Container = styled.span`
	font-family: Poppins, sans-serif;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.4rem;

	padding: 0.4rem 0.8rem;

	border-radius: 0.5rem;
	background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`;

export default Container;
