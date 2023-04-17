import { Container } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

function SignIn() {
	return (
		<Container>
			<Logo />

			<form>
				<label htmlFor="name">Seu nome</label>
				<input
					type="text"
					name=""
					id="name"
					placeholder="Exemplo: Maria da Silva"
					required
				/>

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

				<Button title="Criar conta" />
			</form>

			<div>
				<a href="">Já tenho uma conta</a>
			</div>
		</Container>
	);
}

export default SignIn;
