import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { useAuth } from "../../hooks/auth";
import { Container, Content } from "./styles";

function SignIn() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);

	const { signIn } = useAuth();

	function handleSignIn() {
		if (email === "" && password === "") {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu seu email e senha! Por favor, insira seu email e senha para fazer login no sistema."
			);
		}

		if (!email) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu seu email! Por favor, insira seu email para realizar seu login com sucesso no sistema."
			);
		} else if (!password) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu sua senha! Por favor, insira sua senha para realizar seu login com sucesso no sistema."
			);
		}

		setLoading(true);

		signIn({ email, password }).finally(() => setLoading(false));
	}

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
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>

						<label>Senha</label>
						<Input
							type="password"
							placeholder="No mínimo 6 caracteres"
							minLength={6}
							required
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</fieldset>

					<Button
						id="enter"
						title="Entrar"
						onClick={handleSignIn}
						loading={loading}
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
