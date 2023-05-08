import styled from "styled-components";

const Container = styled.section`
	h1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 2.704rem;
		line-height: 2.768rem;
	}

	p {
		font-family: Poppins, sans-serif;
		font-weight: 400;
		font-size: 1.622rem;
		line-height: 2.271rem;

		margin: 2.4rem 0;
	}

	div#tags {
		display: flex;
		gap: 2.4rem;
		justify-content: center;
		flex-wrap: wrap;

		margin-bottom: 4.8rem;
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

export default Container;
