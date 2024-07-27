import styled from "styled-components";

const Container = styled.section`
	text-align: center;

	h1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 2.704rem;
		line-height: 2.768rem;

		@media screen and (min-width: 1024px) {
			text-align: left;

			margin-bottom: 2.4rem;
		}
	}

	p {
		font-family: Poppins, sans-serif;
		font-weight: 400;
		font-size: 1.622rem;
		line-height: 2.271rem;

		max-width: 42.5rem;
		height: 6.8rem;

		margin: 1.5rem auto;

		overflow: auto;

		@media screen and (min-width: 1024px) {
			text-align: left;

			margin: 0;

			max-width: 54.7rem;
			height: auto;
			max-height: 20rem;
		}
	}

	div#tags {
		max-width: 42.5rem;
		height: 10.8rem;

		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2.4rem;

		overflow-y: auto;
		overflow-x: hidden;

		@media screen and (min-width: 1024px) {
			justify-content: start;

			max-width: none;
			width: 54.7rem;
		}
	}
`;

export default Container;
