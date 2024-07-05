import styled from "styled-components";

const Container = styled.button`
	width: 100%;
	height: 4.8rem;

	background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
	color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

	border: none;
	border-radius: 0.5rem;

	div#spinner {

        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;
	}
`;

export default Container;
