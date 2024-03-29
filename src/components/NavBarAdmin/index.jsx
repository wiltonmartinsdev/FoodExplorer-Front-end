// Imports Global
import { Container, Content, Brand } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { useAuth } from "../../hooks/auth";

// Imports of Components
import Input from "../Input";
import Button from "../Button";

// Imports of Images
import MobileUserAdmin from "../MobileAdminMenu";
import Polygon from "../../assets/polygon.svg";
import IconSignOut from "../../assets/iconSignOut.svg";

function NavBarAdmin({ onChange }) {
	const { signOut } = useAuth();

	const navigate = useNavigate();

	function handleSignOut() {
		navigate("/");

		signOut();
	}

	return (
		<Container>
			<MobileUserAdmin onChange={onChange} />

			<Content>
				<Link to="/">
					<Brand>
						<img
							src={Polygon}
							alt="Ícone de um polígono na cor azul"
						/>

						<h1>food explorer</h1>

						<p>admin</p>
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
