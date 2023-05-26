import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	margin: auto;
`;

const Content = styled.main`
	width: 31.6rem;
	height: 67.7rem;

	margin: 4.257rem auto 0;

	/* border: 1px solid red; */

	text-align: center;

	div#backButton {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		cursor: pointer;
	}

	img#leftArrow {
		width: 1.2rem;
		height: 2.2rem;
	}

	img#dish {
		width: 26.4rem;

		margin: 1.6rem 0;
	}

	div#addRequest {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.9rem;

		img {
			cursor: pointer;
		}

		> span {
			font-size: 2.263rem;
			font-weight: 700;
			line-height: 3.62rem;
		}

		> button {
			width: 18.8rem;
			height: 3.786rem;

			font-size: 0.946rem;

			background: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

			border: none;
			border-radius: 0.5rem;

			position: relative;

			img {
				position: relative;
				top: 0.5rem;
				margin-right: 0.744rem;
			}

			span#point {
				position: relative;
				bottom: 0.2rem;
			}
		}
	}
`;

export { Container, Content };
