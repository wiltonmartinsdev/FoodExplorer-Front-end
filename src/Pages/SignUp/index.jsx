// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import validator from "validator";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";

// Imports of Components
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

function SignUp() {
	const [name, setName] = useState("");
	
    const [email, setEmail] = useState("");
	
    const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name && !email && !password) {
			return alert(
				"Ops! Parece que você ainda não inseriu seu nome, email e senha! Por favor, lembre-se de inserir todos os campos para que possamos criar sua conta com sucesso no sistema."
			);
		}

		if (!name) {
			return alert(
				"Ops! Parece que você ainda não inseriu seu nome! Por favor, insira seu nome para que possamos criar sua conta com sucesso no sistema"
			);
		} else if (!email) {
			return alert(
				"Ops! Parece que você ainda não inseriu seu email! Por favor, insira seu email para que possamos criar sua conta com sucesso no sistema."
			);
		} else if (!password) {
			return alert(
				"Ops! Parece que você ainda não inseriu sua senha! Por favor, insira sua senha para que possamos criar sua conta com sucesso no sistema."
			);
		}

		if (!validator.isEmail(email)) {
			return alert(
				"Ops! Parece que o endereço de email que você inseriu não é válido. Por favor, verifique e insira um endereço de email válido."
			);
		}

		if (!validator.isLength(password, { min: 6 })) {
			return alert(
				"Ops! Lembre-se de que a sua senha deve conter pelo menos 6 caracteres. Isso ajudará a manter a sua conta segura!"
			);
		}

		api.post("/users", { name, email, password })
			.then(() => {
				alert(
					`Parabéns, ${name}! Seja bem-vindo(a) ao Food Explorer. Seu cadastro foi realizado com sucesso!`
				);
				navigate("/");
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert(
						"Ops! Desculpe, ocorreu um erro ao tentar cadastrar um usuário.Por favor, tente novamente."
					);
				}
			});
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
				<Logo className="animate__animated animate__backInLeft" />

				<form className="animate__animated animate__backInRight">
					<fieldset>
						<legend>Crie sua conta</legend>

						<label>Seu nome</label>
						<Input
							type="text"
							placeholder="Exemplo: Maria da Silva"
							required
							onChange={(e) => setName(e.target.value)}
						/>

						<label>Email</label>
						<Input
							type="email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Senha</label>
						<Input
							type="password"
							placeholder="No mínimo 6 caracteres"
							minLength={6}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</fieldset>

					<Button
						id="createAccount"
						title="Criar conta"
						onClick={handleSignUp}
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
