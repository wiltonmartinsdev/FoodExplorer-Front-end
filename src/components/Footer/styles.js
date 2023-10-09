import styled from "styled-components";

const Container = styled.footer`
	width: 100%;
	height: 7.7rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.8rem;

	position: relative;

	@media screen and (min-width: 1921px) {
		top: 0;

		z-index: 9999;

		::before {
			content: "";

			width: 384rem;
			height: 7.7rem;

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

			position: absolute;
			top: 0;
			z-index: -1;
		}
	}

	#logo {
		display: flex;
		align-items: center;
		gap: 0.647rem;

		font-weight: 700;
		font-size: 1.526rem;
		line-height: 1.788rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_700};
	}

	#copyright {
		font-family: "DM Sans";
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.562rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_200};
	}
`;

export default Container;
