// Imports Global
import { Container, Content, Brand } from "./styles";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import Input from "../Input";
import Button from "../Button";

// Imports of Images
import MobileUserAdmin from "../MobileAdminMenu";
import Polygon from "../../assets/polygon.svg";
import IconSignOut from "../../assets/iconSignOut.svg";

function NavBarAdmin() {
	return (
		<Container>
				<MobileUserAdmin />
			<Content>
				{/* <div>
            <MobileUserAdmin />
            </div> */}


				<Brand>
					<img
						src={Polygon}
						alt="Ícone de um polígono na cor azul"
					/>

					<h1>food explorer</h1>

					<p>admin</p>
				</Brand>

				<Input
					className="input"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>

				<Button className="button" title="Novo prato" />

				<img
					id="iconSignOut"
					src={IconSignOut}
					alt="Ícone com uma seta pequena para direita indicando para sair da aplicação."
				/>
			</Content>
		</Container>
	);
}

export default NavBarAdmin;
