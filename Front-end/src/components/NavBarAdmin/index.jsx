// Imports Global
import { Container, Content, Brand } from "./styles";

// Imports of Images
import Menu from "../../assets/menu.svg";
import Polygon from "../../assets/polygon.svg";

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
						alt="Ícone de um polígono na cor azul"
					/>

					<h1>food explorer</h1>

					<p>admin</p>
				</Brand>
			</Content>
		</Container>
	);
}

export default NavBar;
