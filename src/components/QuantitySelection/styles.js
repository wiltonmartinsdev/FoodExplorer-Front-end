import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	width: 10rem;
	height: 4rem;

	img#Minus {
		cursor: pointer;
	}

	span {
		font-size: 2rem;
	}

	img#Plus {
		cursor: pointer;
	}
`;

export default Container;
