import styled from "styled-components";

const Container = styled.div`
	width: 42.8rem;
	height: 116.8rem;

	margin: auto;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`;

const Content = styled.main`
	width: 36.4rem;
	height: 92.3rem;

	/* border: 1px solid red; */

	margin: 1.092rem 3.2rem 5.308rem;

	div#backButton {
		display: flex;
		align-items: center;
		gap: 0.758rem;

		cursor: pointer;

		img#leftArrow {
			width: 0.827rem;
			height: 1.517rem;
		}

		> button {
			font-size: 1.655rem;
		}
	}

	h1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 3.2rem;
		line-height: 4.48rem;

		margin: 2rem 0 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	label#upload {
		position: relative;

		p {
			font-family: Poppins, sans-serif;
			font-weight: 500;
			font-size: 1.4rem;
			line-height: 2.4rem;

			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
		}
	}

	label {
		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

		margin: 2.4rem 0 1.6rem;
	}

	div#upload {
		width: 16.5rem;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;

		position: absolute;

		top: 4.3rem;
		left: 3rem;

		cursor: pointer;
	}

	div.input {
		height: 4.8rem;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

		border: none;
		border-radius: 0.5rem;
	}

	input {
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	}

	input#img {
		display: none;
	}

	select {
		font-size: 1.4rem;
		line-height: 2.24rem;

		height: 4.8rem;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

		border: none;
		border-radius: 0.5rem;

		padding: 0 1.6rem;

		appearance: none;
		-webkit-appearance: none;

		background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.454505 0.753577C0.893845 0.314237 1.60616 0.314237 2.0455 0.753577L8 6.70808L13.9545 0.753577C14.3938 0.314237 15.1062 0.314237 15.5455 0.753577C15.9848 1.19292 15.9848 1.90523 15.5455 2.34457L8.7955 9.09457C8.35616 9.53391 7.64384 9.53391 7.2045 9.09457L0.454505 2.34457C0.015165 1.90523 0.015165 1.19292 0.454505 0.753577Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");

		background-repeat: no-repeat;
		background-position: right 1.6rem top 50%;

		cursor: pointer;
	}

	div#ingredients {
		display: flex;
		/* align-items: center;
		justify-content: center; */
		flex-wrap: wrap;

		height: auto;

		/* gap: 1.6rem; */

		padding-left: 0.8rem;

		span {
			width: 11.8rem;
			height: 3.2rem;

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.8rem;
		}
	}

	input.no-arrows::-webkit-inner-spin-button,
	input.no-arrows::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}

	input.no-arrows {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	button#save {
		background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_400};
	}
`;

export { Container, Content };
