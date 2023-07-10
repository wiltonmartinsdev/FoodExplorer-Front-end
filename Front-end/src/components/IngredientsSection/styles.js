import styled from "styled-components";

const Container = styled.section`
    text-align: center;

    overflow: hidden;

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

		margin: 2.4rem 0;
	}

	div#tags {
		display: flex;
		gap: 2.4rem;
		justify-content: center;
		flex-wrap: wrap;

		margin-bottom: 1.8rem;

    
	}


`;

export default Container;
