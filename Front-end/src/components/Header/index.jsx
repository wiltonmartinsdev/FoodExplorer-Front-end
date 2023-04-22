// Imports Global
import { Container, Content } from "./styles";

// Imports of Images
import Menu from "../../assets/menu.svg";
import Polygon from "../../assets/polygon.svg";
import Request from "../../assets/request.svg";

function Header() {
	return (
		<Container>
			<Content>
				<img
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
					src={Request}
					alt="Ícone de notificações de pedidos "
				/>
			</Content>
		</Container>
	);
}

export default Header;
