import styled from "styled-components";

const Container = styled.footer`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

	min-width: 32rem;
	height: 7.7rem;

	display: flex;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	max-width: 102.4rem;

	margin: 0 auto;
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
`;

export { Container, Content };
