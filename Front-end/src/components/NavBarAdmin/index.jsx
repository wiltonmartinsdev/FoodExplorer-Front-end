// Imports Global
import { Container, Content, Brand } from "./styles";

// Imports of Images
import MobileUserAdmin from "../MobileAdminMenu";
import Polygon from "../../assets/polygon.svg";

function NavBarAdmin() {
	return (
		<Container>
			<Content>
			<div>
            <MobileUserAdmin />
            </div>

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

export default NavBarAdmin;