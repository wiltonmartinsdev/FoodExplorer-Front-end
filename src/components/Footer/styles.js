import styled from "styled-components";

const Container = styled.footer`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.8rem;

	max-width: 102.4rem;

	margin: 2.6rem auto;
	padding: 0 2.8rem;

	div#logo {
		display: flex;
		align-items: center;

		gap: 0.647rem;

		font-weight: 700;
		font-size: 1.526rem;
		line-height: 1.788rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_700};

		@media screen and (max-width: 402px) {
			#logo {
				gap: 3rem;

				p {
					text-align: center;
				}

				img {
					position: relative;
					left: 1.2rem;
				}
			}
		}
	}

	div#copyright {
		font-family: "DM Sans";
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.562rem;

		color: ${({ theme }) => theme.COLORS.TEXT_COLOR_200};

		@media screen and (max-width: 402px) {
			text-align: center;
		}
	}

	@media screen and (max-width: 402px) {
		margin: 1.9rem auto;
	}

	@media screen and (min-width: 1024px) {
		padding: 0;
	}
`;

export { Container, Content };
