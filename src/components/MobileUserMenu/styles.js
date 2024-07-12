import styled from "styled-components";

const Container = styled.div`
	width: 3rem;

	margin-top: 0.5rem;

	position: relative;

	.menuIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		margin-top: 0.3rem;

		cursor: pointer;
	}

	.menuIconLine {
		width: 2.4rem;
		height: 0.3rem;

		background-color: white;

		margin-bottom: 0.4rem;

		transition: transform 0.3s ease;

		border-radius: 0.5rem;
	}

	.open .menuIconLine:first-child {
		transform: translateY(7px) rotate(45deg);

		border-radius: 0.5rem;

		z-index: 9999;
	}

	.open .menuIconLine:nth-child(2) {
		opacity: 0;

		border-radius: 0.5rem;

		z-index: 9999;
	}

	.open .menuIconLine:last-child {
		transform: translateY(-7px) rotate(-45deg);

		border-radius: 0.5rem;

		z-index: 9999;
	}

	.menu {
		display: none;
		list-style: none;

		position: absolute;
		top: -4.6rem;
		left: -2.9rem;

		height: 100vh;
		width: 100vw;

		padding: 3.6rem 2.8rem 1.357rem;

		div#dishSearch {
			margin-top: 11.2rem;
		}
	}

	.open + .menu {
		display: block;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
	}

	.open + .menu::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 11.4rem;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
	}

	span#titleMenu {
		display: flex;
		justify-content: center;

		p#titleMenuOpen {
			position: absolute;
			top: 5rem;

			font-size: 2.1rem;

			z-index: 9999;
		}
	}

	div#buttonTextWrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		margin-top: 4.5rem;

		.menuOptions {
			text-align: left;

			border-bottom: 1px solid #192227;

			padding-left: 1rem;
			padding-bottom: 1.5rem;
		}
	}

	#footer {
		position: absolute;
		top: calc(100% - 7.7rem);
		width: 100%;
		left: 0;

		padding: 1rem;

		height: 7.7rem;
	}

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

export default Container;
