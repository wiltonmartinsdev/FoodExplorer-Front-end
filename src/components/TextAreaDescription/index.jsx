import Container from "./styles";

function TextAreaDescription({ value, ...rest }) {
	return <Container {...rest}>{value}</Container>;
}

export default TextAreaDescription;
