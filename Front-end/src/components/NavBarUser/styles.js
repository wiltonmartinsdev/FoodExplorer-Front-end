import styled from "styled-components";

const Container = styled.nav`
	width: 42.8rem;
	height: 11.4rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	margin: auto;
	padding: 5.6rem 2.8rem 2.4rem;

	position: relative;

	z-index: 9999;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Brand = styled.div`
	width: 16rem;

	display: flex;
	align-items: center;
	gap: 0.8rem;

	img {
		width: 2.4rem;
	}

	> h1 {
		font-size: 2.116rem;
		font-weight: 700;
		line-height: 2.48rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
	}
`;

export { Container, Content, Brand };