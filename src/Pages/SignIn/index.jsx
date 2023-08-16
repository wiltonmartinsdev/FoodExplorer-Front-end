// Imports Global
import { Container, Content } from "./styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";

// Imports of Components
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

function SignIn() {
	const data = useAuth();

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
				<Logo className="animate__animated animate__backInLeft " />

				<form className="animate__animated animate__backInRight">
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

					<Link
						id="linkMyAccount"
						to="/register">
						<ButtonText
							id="myAccount"
							title="Criar uma conta"
						/>
					</Link>
				</form>
			</Content>
		</Container>
	);
}

export default SignIn;
