import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Logo from "../../components/Logo";
import { useAuth } from "../../hooks/auth";

const signInSchema = z.object({
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

function SignIn() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);

	const { signIn } = useAuth();

	function handleSignIn() {
		const result = signInSchema.safeParse({
			email,
			password,
		});

		if (!result.success) {
			// Exibe a primeira mensagem de erro se houver múltiplos erros
			toast.error(result.error.errors[0].message);
			return;
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
		<main className="px-14 h-screen flex flex-col justify-center lg:flex-row lg:justify-center lg:items-center lg:gap-20 xl:gap-72  ">
			<Logo />

			<form className="animate__animated animate__backInRight shrink-0 lg:bg-BG_700 lg:w-[476px] lg:h-auto lg:rounded-2xl lg:p-16 ">
				<fieldset>
					<legend className="hidden font-poppins font-medium  lg:block lg:mb-8 lg:text-4xl lg:text-center lg:text-white">
						Faça login
					</legend>

					<Label
						htmlFor="email"
						className="text-TEXT_400">
						E-mail
					</Label>
					<Input
						type="email"
						id="email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						required
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="mb-8 bg-transparent placeholder:text-TEXT_500 text-white"
					/>

					<label
						htmlFor="password"
						className="text-TEXT_400">
						Senha
					</label>
					<Input
						type="password"
						id="password"
						placeholder="No mínimo 6 caracteres"
						minLength={6}
						required
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						className="mb-10 bg-transparent placeholder:text-TEXT_500 text-white"
					/>
				</fieldset>

				<Button
					className="bg-BUTTON_COLOR_100 w-full mb-8"
					loading={loading}
					onClick={handleSignIn}>
					Entrar
				</Button>

				<Link
					className="flex justify-center"
					to="/register">
					<Button
						variant="link"
						className="text-white ">
						Criar uma conta
					</Button>
				</Link>
			</form>
		</main>
	);
}

export default SignIn;
