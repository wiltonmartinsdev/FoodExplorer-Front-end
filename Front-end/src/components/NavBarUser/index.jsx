// Imports Global
import { Container, Content, Brand } from "./styles";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import MobileUserMenu from "../MobileUserMenu";
import Input from "../Input";
import RequestsButton from "../RequestsButton";

// Imports of Images
import Polygon from "../../assets/polygon.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import IconSignOut from "../../assets/iconSignOut.svg";
import RequestsIcon from "../../assets/requestsIcon.svg";

function NavBarUser() {
	return (
		<Container>
			<Content>
				<MobileUserMenu />

				<Link to="/">
					<Brand id="brand">
						<img
							src={Polygon}
							alt="Ícone de um polígono na cor azul"
						/>

						<h1>food explorer</h1>
					</Brand>
				</Link>

				<img
					className="menu"
					src={NotificationIcon}
					alt="Ícone de notificações de pedidos "
				/>

				<Input
					className="input"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>

				<RequestsButton
					className="button"
					image={RequestsIcon}
					title="Pedidos"
				/>

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
