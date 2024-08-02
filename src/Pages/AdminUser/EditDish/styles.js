import styled from "styled-components";

const Container = styled.div`
	min-width: 32rem;
	min-height: 100vh;

	margin: auto;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	div#backButton {
		display: flex;
		gap: 0.5rem;

		max-width: 1024px;

		margin: 0 auto;
		padding-left: 2.8rem;

		position: relative;
		top: 4rem;

		button#buttonText {
			position: relative;
			bottom: 0.1rem;
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			align-items: center;
			gap: 2.5rem;

			top: 3.5rem;

			padding-left: 1.1rem;

			img#leftArrow {
				width: 1.3rem;
			}

			button#buttonText {
				transform: scale(1.8);

				font-weight: 700;

				bottom: 0.2rem;
			}
		}
	}
`;

const Content = styled.main`
	max-width: 60rem;

	margin: 1.092rem auto 5.308rem;
	padding: 3.8rem 2.8rem 0;

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
		justify-content: space-between;
		flex-wrap: wrap;

		label {
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			margin: 2.4rem 0 1.6rem;
		}

		div#wrapperUpload,
		div#wrapperName,
		div#wrapperCategory,
		div#wrapperIngredients,
		div#wrapperPrice,
		div#wrapperTextAreaDescription {
			display: flex;
			flex-direction: column;
		}

		div#wrapperUpload {
			label#upload {
				position: relative;

				input#img {
					display: none;
				}

				div#upload {
					width: 25.6rem;

					display: flex;
					align-items: center;
					gap: 0.8rem;

					position: absolute;
					top: 4.5rem;

					padding-left: 2.5rem;

					img#imageUpload {
						position: relative;
						bottom: 0.1rem;
					}

					p {
						font-family: Poppins, sans-serif;
						font-weight: 500;
						font-size: 1.4rem;
						line-height: 2.4rem;

						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

						width: 23.5rem;

						color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
					}

					p#description2 {
						display: none;
					}

					cursor: pointer;

					@media screen and (min-width: 1024px) {
						width: 22.9rem;
					}
				}
			}
		}

		div#wrapperName {
			div#name {
				@media screen and (min-width: 1024px) {
					width: 45rem;
				}
			}
		}

		div#wrapperCategory {
			select#category {
				font-size: 1.4rem;
				line-height: 2.24rem;

				height: 5rem;

				background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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

				@media screen and (min-width: 1024px) {
					width: 27.6rem;
				}
			}
		}

		div#wrapperIngredients {
			div#ingredients {
				display: flex;
				flex-wrap: wrap;

				padding-left: 0.8rem;

				height: 5rem;

				overflow-y: auto;

				@media screen and (min-width: 1024px) {
					width: 77rem;
				}
			}
		}

		div#wrapperPrice {
			div[typeof="input"] {
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
			}

			div#price {
				@media screen and (min-width: 1024px) {
					width: 21rem;
				}
			}
		}

		div#wrapperTextAreaDescription {
			width: 100%;
		}

		div.input {
			height: 5rem;

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

			border: none;
			border-radius: 0.5rem;

			@media screen and (min-width: 1024px) {
				width: 22.9rem;
			}
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			flex-direction: row;
			gap: 20px;
		}

		div#buttonOption {
			display: flex;
			gap: 2.5rem;

			button#delete {
				background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
			}

			button#delete:hover {
				background-color: ${({ theme }) =>
					theme.COLORS.BUTTON_COLOR_100};
			}

			button#save {
				padding: 0 0.5rem;
			}

			@media screen and (min-width: 1024px) {
				width: 100%;

				justify-content: end;

                margin-bottom: 11.6rem;

				button#delete {
					width: 13.5rem;
				}

				button#save {
					width: 17.2rem;
				}
			}
		}
	}

	@media screen and (min-width: 1024px) {
		max-width: 102.4rem;
		margin: auto;
		padding: 3.8rem 1rem 0;
	}
`;

export { Container, Content };
