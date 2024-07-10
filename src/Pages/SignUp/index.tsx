import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Logo from "../../components/Logo/index.js";
import { api } from "../../services/api.js";

const signOutSchema = z.object({
	name: z.string().min(1, {
		message:
			"Ops! Parece que você ainda não inseriu seu nome! Por favor, insira seu nome para que possamos criar sua conta com sucesso no sistema.",
	}),
	email: z
		.string()
		.min(1, {
			message:
				"Ops! Parece que você ainda não inseriu seu e-mail! Insira-o para realizar seu login com sucesso no sistema.",
		})
		.email({
			message:
				"Ops! Parece que você adicionou um endereço inválido! Por favor, insira um e-mail válido para realizar seu login com sucesso no sistema.",
		}),

	password: z
		.string()
		.min(1, {
			message:
				"Ops! Parece que você ainda não inseriu sua senha! Insira-a para realizar seu login com sucesso no sistema.",
		})
		.min(6, {
			message:
				"Ops! Escolha uma senha segura com pelo menos 6 caracteres!",
		}),
});

function SignUp() {
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		const result = signOutSchema.safeParse({
			name,
			email,
			password,
		});

		if (!result.success) {
			toast.error(result.error.errors[0].message);
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
