// Imports Global
import Container from "./styles";

function Button({ title, ...rest }) {
	return <Container {...rest}>{title}</Container>;
}

export default Button;
