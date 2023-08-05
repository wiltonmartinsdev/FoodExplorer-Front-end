// Imports Global
import Container from "./styles";

function ButtonText({ title, ...rest }) {
	return <Container {...rest}>{title}</Container>;
}

export default ButtonText;
