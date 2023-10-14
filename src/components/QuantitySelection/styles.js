import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;

	width: 10rem;
	height: 3.2rem;

	img#Minus {
		width: 1.8rem;
		height: 0.4rem;

		margin: 0;

		border-radius: 1rem;

		cursor: pointer;
	}

	span {
		font-size: 2rem;
	}

	img#Plus {
		width: 2rem;
		height: 2rem;

		margin: 0;

		cursor: pointer;
	}

	@media screen and (min-width: 769px) {
		span {
			position: relative;
			left: 0.2rem;
		}
	}
`;

export default Container;
