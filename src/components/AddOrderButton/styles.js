import styled from "styled-components";

const Container = styled.div`
        /* border: 1px solid green; */


	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.9rem;

	margin: 3.6rem 0 ;

	button {

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.6rem;

		width: 20rem;
		height: 3.786rem;

		font-size: 1.2rem;

		background: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

		border: none;
		border-radius: 0.4rem;

		span#point {
			position: relative;
			bottom: 0.3rem;
			font-size: 1rem;
		}

		span#price {
			font-size: 1rem;
		}

        @media screen and (min-width: 1024px){
            width: 13rem;

            img{
                display: none;
            }
        }
	}

    @media screen and (min-width: 1024px) {
        margin: 0;
    }
`;

export default Container;
