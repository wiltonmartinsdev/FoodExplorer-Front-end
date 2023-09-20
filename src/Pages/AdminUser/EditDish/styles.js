import styled from "styled-components";

const Container = styled.div`
	width: 43rem;

	margin: auto;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

	display: grid;
	justify-content: center;
	grid-template-areas: "navbar" "main" "footer";
	grid-template-rows: 11.4rem auto 7.7rem;

	@media screen and (min-width: 430px) and (max-width: 768px) {
		width: 76.8rem;
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		width: 192rem;

		grid-template-rows: 11.4rem 75.5rem 7.7rem;
	}

	@media screen and (min-width: 1921px) {
		width: 384rem;
		height: 216rem;
	}
`;

const Content = styled.main`
	grid-area: main;

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

		position: relative;

		label {
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			margin: 2.4rem 0 1.6rem;
		}

		label#upload {
			position: relative;

			div#upload {
				width: 28.2rem;

				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.8rem;

				position: absolute;

				top: 4.3rem;
				left: 3rem;

				img#imageUpload {
					position: absolute;
					right: 27.1rem;
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
			}

			input#img {
				display: none;
			}
		}

		div.input {
			height: 5rem;

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

			border: none;
			border-radius: 0.5rem;
		}

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
		}

		div#ingredients {
			display: flex;

			flex-wrap: wrap;

			padding-left: 0.8rem;

			height: 5rem;

			overflow-y: auto;
		}

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
	}

	div#buttonOption {
		display: flex;
		gap: 3.2rem;

		button#delete {
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
		}

		button#delete:hover {
			background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_100};
		}

		button#save {
			background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_400};
		}
	}

	@media screen and (min-width: 430px) and (max-width: 768px) {
		margin: 1.092rem 15rem 5.308rem;

		div#backButton {
			transform: scale(1.3);

			position: absolute;
			left: 4.3rem;
		}

		form {
			textarea {
				width: 100%;
			}
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1920px) {
		margin: 1.092rem 35rem 5.308rem;

		div#backButton {
			transform: scale(1.2);

			position: relative;
			top: 1rem;
			left: 12.4rem;
		}

		form {
			display: flex;
			flex-direction: row;

			label#upload,
			label#name,
			label#category {
				margin-top: 0;
			}

			label#upload {
				div#upload {
					position: absolute;
					top: 4.1rem;
					left: -2rem;

					z-index: 9999;

					img#imageUpload {
						position: absolute;
						right: 22.4rem;
					}

					p#description1 {
						display: none;
					}

					p#description2 {
						display: block;

						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

						width: 14.5rem;
					}
				}
			}

			div.input {
				width: 24rem;

				position: absolute;
				top: 3rem;
			}

			label#name,
			label#category,
			select#category,
			label#ingredients,
			label#price,
			div#price,
			label#textArea,
			#textArea {
				position: absolute;
			}

			label#name {
				left: 34.5rem;
			}

			div[typeof="input"],
			input#name {
				width: 43.5rem;
				top: 3rem;
				left: 22.3rem;
			}

			label#category {
				left: 88.6rem;
			}

			select#category {
				width: 33.2rem;

				top: 3rem;
				left: 88.6rem;
			}

			label#ingredients,
			label#price {
				top: 7.5rem;
			}

			div#ingredients,
			div#price {
				top: 13rem;
			}

			div#ingredients {
				width: 89.5rem;
			}

			label#price {
				left: 99.4rem;
			}

			div#price {
				left: 99.5rem;

				width: 22.3rem;
			}

			label#textArea {
				top: 17.4rem;
			}

			#textArea {
				position: absolute;
				top: 22.7rem;
				left: 0;

				width: 100%;
			}

			div#buttonOption {
				position: absolute;
				top: 42.5rem;
				right: 0;

				display: flex;
				justify-content: end;

				button#delete {
					width: 12.4rem;
				}

				button#save {
					width: 17.5rem;
				}
			}
		}
	}

	@media screen and (min-width: 1921px) {
		margin: 1.092rem 35rem 5.308rem;

		div#backButton {
			transform: scale(1.2);

			position: relative;
			top: 1rem;
			left: 12.4rem;
		}

		form {
			display: flex;
			flex-direction: row;

			label#upload,
			label#name,
			label#category {
				margin-top: 0;
			}

			label#upload {
				div#upload {
					position: absolute;
					top: 4.1rem;
					left: -2rem;

					z-index: 9999;

                    img#imageUpload {
						position: absolute;
						right: 22.4rem;
					}

					p#description1 {
						display: none;
					}

					p#description2 {
						display: block;

						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

						width: 14.5rem;
					}
				}
			}

			div.input {
				width: 24rem;

				position: absolute;
				top: 3rem;
			}

			label#name,
			label#category,
			select#category,
			label#ingredients,
			label#price,
			div#price,
			label#textArea,
			#textArea {
				position: absolute;
			}

			label#name {
				left: 34.5rem;
			}

			div[typeof="input"],
			input#name {
				width: 43.5rem;
				top: 3rem;
				left: 22.3rem;
			}

			label#category {
				left: 88.6rem;
			}

			select#category {
				width: 33.2rem;

				top: 3rem;
				left: 88.6rem;
			}

			label#ingredients,
			label#price {
				top: 7.5rem;
			}

			div#ingredients,
			div#price {
				top: 13rem;
			}

			div#ingredients {
				width: 89.5rem;
			}

			label#price {
				left: 99.4rem;
			}

			div#price {
				left: 99.5rem;

				width: 22.3rem;
			}

			label#textArea {
				top: 17.4rem;
			}

			#textArea {
				position: absolute;
				top: 22.7rem;
				left: 0;

				width: 100%;
			}

			div#buttonOption {
				position: absolute;
				top: 42.5rem;
				right: 0;

				display: flex;
				justify-content: end;

				button#delete {
					width: 12.4rem;
				}

				button#save {
					width: 17.5rem;
				}
			}
		}
	}
`;

export { Container, Content };
