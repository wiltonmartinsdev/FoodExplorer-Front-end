// Imports Global
import { Container, Content, Brand } from "./styles";

// Imports of Images
import Menu from "../../assets/menu.svg";
import Polygon from "../../assets/polygon.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";

function NavBar() {
	return (
		<Container>
			<Content>
				<img
					className="menu"
					src={Menu}
					alt="Ícone do Menu com opções"
				/>

				<Brand>
					<img
						src={Polygon}
						alt=""
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
