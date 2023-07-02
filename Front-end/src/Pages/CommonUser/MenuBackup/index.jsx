// Imports Global
import { Container, Content } from "./styles";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import Input from "../../../components/Input";
import ButtonText from "../../../components/ButtonText";
import Footer from "../../../components/Footer";

// Imports External
import { Divide as Hamburger } from "hamburger-react";

function Menu() {
	return (
		<Container>
			<nav>
				<div>
					<Hamburger />
					<p>Menu</p>
				</div>
			</nav>

			<Content>
				<Input
					placeholder="Busque por pratos ou ingredientes"
					icon={HiOutlineSearch}
				/>

				<div id="buttonText">
					<ButtonText title="Sair" />
				</div>
			</Content>
			<Footer />
		</Container>
	);
}

export default Menu;
