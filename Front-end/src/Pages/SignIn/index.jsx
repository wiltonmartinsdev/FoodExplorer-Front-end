import { Container } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";

function SignIn() {
	return (
		<Container>
			<Logo />

			<form>
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

				<Button title="Entrar" />
			</form>

			<div>
				<a href="#">Criar uma conta</a>
			</div>
		</Container>
	);
}

export default SignIn;
