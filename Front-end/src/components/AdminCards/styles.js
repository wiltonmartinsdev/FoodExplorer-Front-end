import styled from "styled-components";

const Container = styled.section`
	width: 43.6rem;
	height: 29.2rem;

	margin-left: 2.4rem;
	margin-top: 2.4rem;

	/* border: 1px solid red; */
`;

const Content = styled.div`
	/* display: flex; */
	/* gap: 1.6rem; */

	/* margin-top: 2.4rem; */
	/* margin-bottom: 2.4rem; */

	/* border: 1px solid red; */

	div#cards {
		width: 17.8rem;
		height: 29.2rem;

		position: relative;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

		border-radius: 0.8rem;
		border: 1px solid #000204;

		/* border: 1px solid yellow; */

		display: flex;
		flex-direction: column;
		justify-content: center;

		img#dishImage {
			width: 8.8rem;
			margin: 2.4rem auto 0;
		}

		h1 {
			font-family: Poppins, sans-serif;
			font-weight: 500;
			font-size: 1.3rem;
			line-height: 2.4rem;

			margin: 1.2rem 0 1.2rem;

			text-align: center;
		}

		p {
			color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
			text-align: center;

			margin-bottom: 2rem;
		}

		div#icons {
			display: flex;
			justify-content: space-between;
			align-items: center;

			width: 10rem;
			height: 3.2rem;

			/* border: 1px solid yellow; */
		}

		div#pencilIcon {
			/* border: 1px solid red; */

			width: 2.4rem;
			height: 2.2rem;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: 1.6rem;
			right: 1.8rem;

			img#heart {
				width: 2.4rem;
				height: 2.4rem;

				position: relative;
				margin: 0;

				cursor: pointer;
			}
		}
	}
`;

export { Container, Content };