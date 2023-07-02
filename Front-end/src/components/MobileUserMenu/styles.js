import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	margin-top: 0.5rem;

	.menuIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 30px;
		height: 25px;

		cursor: pointer;
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

		position: relative;

		z-index: 9999;
	}

	.open + .menu {
		display: block;
	}

	div.menu {
		position: absolute;
		top: 11.4rem;
		left: 0;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

		width: 42.8rem;
		height: 132.1rem;

		padding: 3.6rem 2.8rem 1.357rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 100%;
		}
	}

	p.menu {
		position: absolute;
		top: 6.7rem;
		left: 6.4rem;

		font-size: 2.1rem;

		background-color: transparent;

		width: 42.8rem;

		padding: 0;
	}

	.hr {
		position: absolute;
		right: 2.8rem;
		left: 2.8rem;

		width: 37.2rem;

		z-index: 9999;

		border: 1px solid #192227;
	}

	div#myFavorites {
		height: 2.6rem;

		margin: 0;
		padding: 0 4rem;

		top: 24.5rem;

		background-color: transparent;
	}

	hr#lineFavorites {
		top: 27.6rem;

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

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		}
	}

	hr#lineLogout {
		top: 33rem;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 71.2rem;
		}
	}

	div#footer {
		top: 143.5rem;

		height: 7.7rem;

		padding: 0;

		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		}
	}
`;

export default Container;
