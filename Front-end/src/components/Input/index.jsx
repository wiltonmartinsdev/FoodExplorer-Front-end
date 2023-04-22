// Imports Global
import Container from "./styles";

function Input({ icon: Icon, ...rest }) {
	return (
		<Container typeof="input">
			{Icon && <Icon size={24} />}

			<input {...rest} />
		</Container>
	);
}

export default Input;
