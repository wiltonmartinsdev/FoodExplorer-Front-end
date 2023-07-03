// Imports Global
import Container from "./styles";

function Input({ img: Img, ...rest }) {
	return (
		<Container
			typeof="input"
			{...rest}>
			{Img && <Img />}

			<input {...rest} />
		</Container>
	);
}

export default Input;
