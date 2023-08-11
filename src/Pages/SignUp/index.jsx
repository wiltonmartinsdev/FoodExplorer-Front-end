// Imports Global
import { Container, Content } from "./styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Imports of Components
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

function SignUp() {
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = "src/assets/polygon.svg";
		link.type = "image/x-icon";

		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);
	return (
		<Container>
			<Content>
				<Logo className="animate__animated animate__backInLeft" />

				<form className="animate__animated animate__backInRight">
					<fieldset>
						<legend>Crie sua conta</legend>

						<label>Seu nome</label>
						<Input
							type="text"
							placeholder="Exemplo: Maria da Silva"
							required
						/>

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
						id="createAccount"
						title="Criar conta"
					/>

					<Link
						id="linkMyAccount"
						to="/">
						<ButtonText
							id="myAccount"
							title="Já tenho uma conta"
						/>
					</Link>
				</form>
			</Content>
		</Container>
	);
}

export default SignUp;
