import styled from "styled-components";

const Container = styled.section`
	text-align: center;

	h1 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		font-size: 2.704rem;
		line-height: 2.768rem;
	}

	p {
		font-family: Poppins, sans-serif;
		font-weight: 400;
		font-size: 1.622rem;
		line-height: 2.271rem;

		height: 6.8rem;

		margin: 2.4rem 0 1.5rem;

		overflow: auto;
	}

	div#tags {
		display: flex;
		gap: 2.4rem;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		height: 10.8rem;

		overflow-y: auto;
		overflow-x: hidden;
	}

	@media screen and (min-width: 769px) {
		text-align: left;

		h1,
		p {
			margin-left: 1.8rem;
		}
	}
`;

export default Container;
