import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Logo from "../../components/Logo";
import { api } from "../../services/api.js";

function SignUp() {
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name && !email && !password) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu seu nome, email e senha! Por favor, lembre-se de inserir todos os campos para que possamos criar sua conta com sucesso no sistema."
			);
		}

		if (!name) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu seu nome! Por favor, insira seu nome para que possamos criar sua conta com sucesso no sistema."
			);
		} else if (!email) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu seu email! Por favor, insira seu email para que possamos criar sua conta com sucesso no sistema."
			);
		} else if (!password) {
			return toast.warning(
				"Ops! Parece que você ainda não inseriu sua senha! Por favor, insira sua senha para que possamos criar sua conta com sucesso no sistema."
			);
		}

		if (!validator.isEmail(email)) {
			return toast.warning(
				"Ops! Parece que o endereço de email que você inseriu não é válido. Por favor, verifique e insira um endereço de email válido."
			);
		}

		if (!validator.isLength(password, { min: 6 })) {
			return toast.warning(
				"Ops! Lembre-se de que a sua senha deve conter pelo menos 6 caracteres. Isso ajudará a manter a sua conta segura!"
			);
		}

		api.post("/users", { name, email, password })
			.then(() => {
				toast.success(
					`Parabéns, ${name}! Seja bem-vindo(a) ao Food Explorer. Seu cadastro foi realizado com sucesso!`
				);

				setTimeout(() => {
					navigate("/");
				}, 6000);
			})
			.catch((error) => {
				if (error.response) {
					toast.error(`${error.response.data.message}`);
				} else {
					toast.error(
						"Ops! Desculpe, ocorreu um erro ao tentar cadastrar um usuário.Por favor, tente novamente."
					);
				}
			});
	}

	return (
		<main className="px-14 h-screen flex flex-col justify-center lg:flex-row lg:justify-center lg:items-center lg:gap-20 xl:gap-72">
			<Logo />

			<form className="animate__animated animate__backInRight shrink-0 lg:bg-BG_700 lg:w-[476px] lg:h-auto lg:rounded-2xl lg:p-16">
				<fieldset>
					<legend className="hidden font-poppins font-medium  lg:block lg:mb-8 lg:text-4xl lg:text-center lg:text-white">
						Crie sua conta
					</legend>

					<Label
						htmlFor="text"
						className="text-TEXT_400">
						Seu nome
					</Label>
					<Input
						type="text"
						placeholder="Exemplo: Maria da Silva"
						required
						onChange={(e) => setName(e.target.value)}
						className="mb-8 bg-transparent placeholder:text-TEXT_500 text-white"
					/>

					<Label
						htmlFor="email"
						className="text-TEXT_400">
						E-mail
					</Label>
					<Input
						type="email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						required
						onChange={(e) => setEmail(e.target.value)}
						className="mb-8 bg-transparent placeholder:text-TEXT_500 text-white"
					/>

					<Label
						htmlFor="password"
						className="text-TEXT_400">
						Senha
					</Label>
					<Input
						type="password"
						placeholder="No mínimo 6 caracteres"
						minLength={6}
						required
						onChange={(e) => setPassword(e.target.value)}
						className="mb-8 bg-transparent placeholder:text-TEXT_500 text-white"
					/>
				</fieldset>

				<Button
					className="bg-BUTTON_COLOR_100 w-full mb-8"
					onClick={handleSignUp}>
					Criar conta
				</Button>

				<Link
					to="/"
					className="flex justify-center">
					<Button
						variant="link no-underline"
						className="text-white">
						Já tenho uma conta
					</Button>
				</Link>
			</form>
		</main>
	);
}

export default SignUp;
