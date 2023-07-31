// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

function SignIn() {
	return (
		<Container>
			<Content>
				<Logo />

				<form>
					<fieldset>
						<legend>Faça login</legend>

						<label>Email</label>
						<Input
							type="email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							required
						/>

						<label>Senha</label>
						<Input
							type="password"
							placeholder="No mínimo 6 caracteres"
							minLength={6}
							required
						/>
					</fieldset>

					<Button
						id="enter"
						title="Entrar"
					/>

					<ButtonText
						id="newAccount"
						title="Criar uma conta"
					/>
				</form>
			</Content>
		</Container>
	);
}

export default SignIn;
