import { Container } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

function SignIn() {
	return (
		<Container>
			<Logo />

			<form>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name=""
					id="email"
					placeholder="Exemplo: exemplo@exemplo.com.br"
					required
				/>

				<label htmlFor="password">Senha</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="No mínimo 6 caracteres"
					minLength={6}
					required
				/>

				<Button title="Entrar" />
			</form>

			<div>
				<a href="">Criar uma conta</a>
			</div>
		</Container>
	);
}

export default SignIn;
