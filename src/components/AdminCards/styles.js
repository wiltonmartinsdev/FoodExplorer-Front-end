import styled from "styled-components";

const Container = styled.section`
	max-width: 32rem;
`;

const Content = styled.div`
	max-width: 18.5rem;
	height: 25rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;

	border: 1px solid #000204;
	border-radius: 1rem;

	position: relative;

	margin: 0 auto;
	padding: 0 1rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

	img#dishImage {
		width: 8.8rem;

		margin: 0 auto;

		transition: transform 0.5s ease;

		cursor: pointer;
	}

	img#dishImage:hover {
		transform: scale(1.3);

		@media screen and (min-width: 1024px) {
			transform: scale(1.4);
		}
	}

	h1#cardsH1 {
		font-family: Poppins, sans-serif;
		font-weight: 600;
		font-size: 1.3rem;
		line-height: 2.4rem;

		text-align: center;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;

		@media screen and (min-width: 1024px) {
			font-size: 1.9rem;
		}
	}

	p#description {
		display: none;

		@media screen and (min-width: 1024px) {
			display: flex;
			flex-direction: column;

			width: 16.6rem;
			height: 4.7rem;
			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.TEXT_COLOR_400};

			text-align: center;

			position: relative;

			/* Limitar o número de linhas de texto a 3 */
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}

	p#price {
		color: ${({ theme }) => theme.COLORS.INFORMATION_COLOR};
		text-align: center;
	}

	div#pencilIcon {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 1rem;
		right: 1rem;

		img#pencil {
			position: relative;
			margin: 0;

			transition: transform 0.5s ease;

			cursor: pointer;
		}

		img#pencil:hover {
			transform: scale(1.4);
		}

		@media screen and (min-width: 1024px) {
			top: 1.6rem;
			right: 1.6rem;

			img#pencil {
				position: relative;
				margin: 0;

				transition: transform 0.5s ease;

				cursor: pointer;
			}

			img#pencil:hover {
				transform: scale(1.6);
			}
		}
	}

	@media screen and (min-width: 1024px) {
		max-width: 23rem;
		height: 32rem;

		align-items: center;
	}
`;

export { Container, Content };
