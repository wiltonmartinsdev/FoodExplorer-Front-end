import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


import Logo from "../../components/Logo";
import { useAuth } from "../../hooks/auth";

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
