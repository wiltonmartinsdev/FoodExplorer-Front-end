// Imports Global
import { Container, Content, Brand } from "./styles";
import { HiOutlineSearch } from "react-icons/hi";


// Imports of Components
import MobileUserMenu from "../MobileUserMenu";
import Input from "../Input";
import Button from "../Button";

// Imports of Images
import Polygon from "../../assets/polygon.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import IconSignOut from "../../assets/iconSignOut.svg";


function NavBarUser() {
	return (
		<Container>
			<Content>
				<MobileUserMenu />

				<Brand id="brand">
					<img
						src={Polygon}
						alt="Ícone de um polígono na cor azul"
					/>

					<h1>food explorer</h1>
				</Brand>

				<img
					className="menu"
					src={NotificationIcon}
					alt="Ícone de notificações de pedidos "
				/>

				<Input
					placeholder="Busque por pratos ou ingredientes"
					// img={HiOutlineSearch}
				/>

				<Button title="Pedidos" />

				<img
					id="iconSignOut"
					src={IconSignOut}
					alt="Ícone com uma seta pequena para direita indicando para sair da aplicação."
				/>
			</Content>
		</Container>
	);
}

export default NavBarUser;
