// Imports Global
import Container from "./styles";

function Button({ title, loading = false, ...rest }) {
	return (
		<Container
			type="button"
			{...rest}>
			{loading ? "Carregando..." : title}
		</Container>
	);
}

export default Button;
