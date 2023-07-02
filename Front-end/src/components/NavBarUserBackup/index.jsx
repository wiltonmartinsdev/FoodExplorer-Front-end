// Imports Global
import { Container, Content, Brand } from "./styles";

// Imports of Images
import MenuDropDown from "../MenuDropDown";
import Polygon from "../../assets/polygon.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";

function NavBar() {
	return (
		<Container>
			<Content>
				<MenuDropDown />

				<Brand>
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
			</Content>
		</Container>
	);
}

export default NavBar;
