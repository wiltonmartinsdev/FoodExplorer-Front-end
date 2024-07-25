import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import IconSignOut from "../../assets/iconSignOut.svg";
import Polygon from "../../assets/polygon.svg";
import { useAuth } from "../../hooks/auth";
import Button from "../Button";
import Input from "../Input";
import MobileUserAdmin from "../MobileAdminMenu";
import { Container, Content, Brand } from "./styles";

function NavBarAdmin({ onChange }) {
	const { signOut } = useAuth();

	const navigate = useNavigate();

	function handleSignOut() {
		navigate("/");

		signOut();
	}

	return (
		<Container>
			<Content>
				<MobileUserAdmin onChange={onChange} />

				<Link to="/">
					<Brand>
						<div id="wrapperBrand">
							<img
								src={Polygon}
								alt="Ícone de um polígono na cor azul"
							/>

							<h1>food explorer</h1>
						</div>

						<div id="admin">
							<p>admin</p>
						</div>
					</Brand>
				</Link>

				<Input
					className="input"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
					onChange={onChange}
				/>

				<Link to="/NewDish">
					<Button
						className="button"
						title="Novo prato"
					/>
				</Link>

				<img
					id="iconSignOut"
					src={IconSignOut}
					alt="Ícone com uma seta pequena para direita indicando para sair da aplicação."
					onClick={handleSignOut}
				/>
			</Content>
		</Container>
	);
}

export default NavBarAdmin;
