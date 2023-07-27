import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	/* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */

	margin-top: 0.5rem;

	/* border: 1px solid green; */

	/* @media screen and (min-width: 1441px) {
		display: none;
	} */

	position: relative;

	.menuIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 3rem;
		height: 2.5rem;

		cursor: pointer;

		/* border: 1px solid red; */
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

		/* padding: 0;
		margin: 0; */

		position: absolute;
		top: 6.7rem;
		left: -2.9rem;

		width: 43rem;
		height: 129rem;

		padding: 3.6rem 2.8rem 1.357rem;

		/* z-index: 9999; */

		/* border: 1px solid red; */

		/* input#dishSearch{
            position: relative;
            top: 30rem;
        } */
	}

	.open + .menu {
		display: block;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
	}

	p#titleMenuOpen {
		position: absolute;
		top: -6.4rem;
		left: 6.5rem;

		font-size: 2.1rem;
	}

	div#wrapperButtonText {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		margin-top: 5rem;

		.menuOptions {
			text-align: left;

			border-bottom: 1px solid #192227;

			padding-left: 1rem;
			padding-bottom: 1.5rem;
		}
	}

	#footer {
		position: absolute;
		top: 121.3rem;
		left: 0;

		height: 7.7rem;

		/* padding: 0; */
		/* 
		@media screen and (min-width: 430px) and (max-width: 768px) {
			width: 76.8rem;
		} */
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		.menu {
			width: 76.8rem;
		}
	}

	@media screen and (min-width: 769px) {
		display: none;
	}
`;

export default Container;
