import styled from "styled-components";

const Container = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */

	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	position: relative;

	/* border: 1px solid red; */

	@media screen and (min-width: 769px) {
		display: none;
	}

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
		top: 11.3rem;
		left: -2.8rem;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

		width: 43rem;
		height: 132.1rem;

		padding: 3.6rem 2.8rem 1.357rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		}

		/* border: 1px solid red; */
	}

	p.menu {
		position: absolute;
		top: 4.8rem;
		left: 3.6rem;

		font-size: 2.1rem;

		background-color: transparent;

		/* width: 43rem; */

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

	button#newDish {
		width: 13.2rem;
		height: 2.6rem;

		margin: 0;
		/* padding: 0 4rem; */

		position: absolute;
		top: 24rem;
		left: 1rem;

		background-color: transparent;
	}

	hr#lineNewDish {
		top: 27.5rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}

	button#myFavorites {
		width: 17.9rem;
		height: 2.6rem;

		margin: 0;
		/* padding: 0 4rem; */

		position: absolute;
		top: 29.5rem;
		left: 1rem;

		background-color: transparent;
	}

	hr#lineMyFavorites {
		top: 33rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}

	button#logout {
		width: 4.6rem;
		height: 2.6rem;

		margin: 0;
		/* padding: 0 4rem; */

		position: absolute;
		top: 35rem;
		left: 1rem;

		background-color: transparent;
	}

	hr#lineLogout {
		top: 38.5rem;

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
