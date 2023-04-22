// Imports Global
import Container from "./styles";

// Imports of Components
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";

function SignUp() {
	return (
		<Container>
			<Logo />

			<form>
				<h4>Seu nome</h4>
				<Input
					type="text"
					placeholder="Exemplo: Maria da Silva"
					required
				/>

				<h4>Email</h4>
				<Input
					type="email"
					placeholder="Exemplo: exemplo@exemplo.com.br"
					required
				/>

				<h4>Senha</h4>
				<Input
					type="password"
					placeholder="No mínimo 6 caracteres"
					minLength={6}
					required
				/>

				<Button title="Criar conta" />
			</form>

			<div>
				<a href="#">Já tenho uma conta</a>
			</div>
		</Container>
	);
}

export default SignUp;
