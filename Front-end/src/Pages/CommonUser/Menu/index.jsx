import { Container, Content } from "./styles";
import Input from "../../../components/Input";
import { Divide as Hamburger } from "hamburger-react";
import { HiOutlineSearch } from "react-icons/hi";

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
			</Content>
		</Container>
	);
}

export default Menu;
