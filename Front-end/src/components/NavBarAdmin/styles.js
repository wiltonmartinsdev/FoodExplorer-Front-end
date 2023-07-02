import styled from "styled-components";

const Container = styled.nav`
	width: 42.8rem;
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	margin: auto;
	padding: 5.6rem 2.8rem 2.4rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}
`;

const Content = styled.div`
	display: flex;

	/* border: 1px solid red; */
`;

const Brand = styled.div`
	width: 33.2rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	position: relative;
	left: 0.6rem;

    @media screen and (min-width: 430px) and (max-width: 768px) {
        left: 15rem;
	}

	/* border: 1px solid red; */

	> h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}

	> p {
		font-size: 1.2rem;
		line-height: 1.92rem;

		color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
	}
`;

export { Container, Content, Brand };