import styled from "styled-components";

const Container = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	position: relative;

	/* border: 1px solid red; */

	.menuIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 30px;
		height: 25px;

		cursor: pointer;

		/* border: 1px solid red; */
	}

	.menuIconLine {
		width: 2.4rem;
		height: 3px;

		background-color: white;

		margin-bottom: 4px;

		transition: transform 0.3s ease;

		border-radius: 0.5rem;
	}

	.open .menuIconLine:first-child {
		transform: translateY(7px) rotate(45deg);

		border-radius: 0.5rem;
	}

	.open .menuIconLine:nth-child(2) {
		opacity: 0;

		border-radius: 0.5rem;
	}

	.open .menuIconLine:last-child {
		transform: translateY(-7px) rotate(-45deg);

		border-radius: 0.5rem;
	}

	.menu {
		display: none;
		list-style: none;

		padding: 0;
		margin: 0;

		z-index: 9999;

		/* border: 1px solid red; */
	}

	.open + .menu {
		display: block;
	}

	div.menu {
		position: absolute;
		top: 5.8rem;
		left: -2.8rem;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

		width: 42.8rem;
		height: 132.1rem;

		padding: 3.6rem 2.8rem 1.357rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		}

		/* border: 1px solid red; */
	}

	p.menu {
		position: absolute;
		top: 0.2rem;
		left: 3.4rem;

		font-size: 2.1rem;

		background-color: transparent;

		width: 42.8rem;

		padding: 0;
	}

	.hr {
		position: absolute;
		right: 2.8rem;
		left: 0;

		width: 37.2rem;

		z-index: 9999;

		border: 1px solid #192227;
	}

	div#newDish {
		height: 2.6rem;

		margin: 0;
		padding: 0 4rem;

		top: 19rem;

		background-color: transparent;
	}

	hr#lineNewDish {
		top: 22.7rem;

        @media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}

	div#myFavorites {
		height: 2.6rem;

		margin: 0;
		padding: 0 4rem;

		top: 24.5rem;

		background-color: transparent;
	}

	hr#lineMyFavorites {
		top: 28.2rem;

        @media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}

	div#logout {
		height: 2.6rem;

		margin: 0;
		padding: 0 4rem;

		top: 30rem;

		background-color: transparent;
	}

	hr#lineLogout {
		top: 33.7rem;

        @media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}


	/* div#logout {
		height: 2.6rem;

		margin: 0;
		padding: 0 4rem;

		top: 35.5rem;

		background-color: transparent;
	}

	hr#lineLogout {
		top: 39.2rem;
	} */

	/*
        Medida da div 55px

        Medida do hr 18px

        Lembrar de colocar um hover no buttonText na mesma cor do nome admin!
    
    */

	div#footer {
		top: 137.9rem;

		height: 7.7rem;

		padding: 0;
	}
`;

export default Container;
