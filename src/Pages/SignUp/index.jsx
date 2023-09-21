// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import validator from "validator";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
			return toast.error(
				"Ops! Parece que você ainda não inseriu seu nome, email e senha! Por favor, lembre-se de inserir todos os campos para que possamos criar sua conta com sucesso no sistema.",
				{
					duration: 5000,
				}
			);
		}

		if (!name) {
			return toast.error(
				"Ops! Parece que você ainda não inseriu seu nome! Por favor, insira seu nome para que possamos criar sua conta com sucesso no sistema.",
				{
					duration: 5000,
				}
			);
		} else if (!email) {
			return toast.error(
				"Ops! Parece que você ainda não inseriu seu email! Por favor, insira seu email para que possamos criar sua conta com sucesso no sistema.",
				{
					duration: 5000,
				}
			);
		} else if (!password) {
			return toast.error(
				"Ops! Parece que você ainda não inseriu sua senha! Por favor, insira sua senha para que possamos criar sua conta com sucesso no sistema.",
				{
					duration: 5000,
				}
			);
		}

		if (!validator.isEmail(email)) {
			return toast.error(
				"Ops! Parece que o endereço de email que você inseriu não é válido. Por favor, verifique e insira um endereço de email válido.",
				{
					duration: 5000,
				}
			);
		}

		if (!validator.isLength(password, { min: 6 })) {
			return toast.error(
				"Ops! Lembre-se de que a sua senha deve conter pelo menos 6 caracteres. Isso ajudará a manter a sua conta segura!",
				{
					duration: 5000,
				}
			);
		}

		api.post("/users", { name, email, password })
			.then(() => {
				toast.success(
					`Parabéns, ${name}! Seja bem-vindo(a) ao Food Explorer. Seu cadastro foi realizado com sucesso!`,

					{
						duration: 5000,
					}
				);

				setTimeout(() => {
					navigate("/");
				}, 5000);
			})
			.catch((error) => {
				if (error.response) {
					toast.error(`${error.response.data.message}`, {
						duration: 5000,
					});
				} else {
					toast.error(
						"Ops! Desculpe, ocorreu um erro ao tentar cadastrar um usuário.Por favor, tente novamente.",
						{
							duration: 5000,
						}
					);
				}
			});
	}

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

			<Toaster />
		</Container>
	);
}

export default SignUp;
