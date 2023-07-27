import styled from "styled-components";

const Container = styled.div`
	/* border: 1px solid red; */

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.9rem;

	margin: 3.6rem 0 4.8rem;

	img {
		cursor: pointer;
	}

	span {
		font-size: 2.263rem;
		font-weight: 700;
		line-height: 3.62rem;
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		margin: 9rem 0 4.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		position: absolute;
		top: 52rem;
		left: 89.3rem;
	}

	@media screen and (min-width: 1921px) {
		position: absolute;
		top: 52rem;
		left: 185.2rem;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		gap: 0.6rem;

		width: 18.8rem;
		height: 3.786rem;

		font-size: 0.946rem;

		background: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

		border: none;
		border-radius: 0.4rem;

		/* position: relative; */

		span#point {
			position: relative;
			bottom: 0.3rem;
			font-size: 1rem;
		}

		span#price {
			font-size: 1rem;
		}

		@media screen and (min-width: 769px) {
			width: 13rem;

			font-size: 1.2rem;

			img {
				display: none;
			}
		}
	}
`;

export default Container;
