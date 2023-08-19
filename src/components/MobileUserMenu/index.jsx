// Imports Global
import Container from "./styles";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useAuth } from "../../hooks/auth";

// Imports of Components
import Input from "../Input";
import ButtonText from "../ButtonText";
import Footer from "../Footer";

function MobileUserMenu() {
	const { signOut } = useAuth();

	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<Container>
			<div
				className={`menuIcon ${menuOpen ? "open" : ""}`}
				onClick={toggleMenu}>
				<div className="menuIconLine" />
				<div className="menuIconLine" />
				<div className="menuIconLine" />
			</div>

			<div className={`menu ${menuOpen ? "open" : ""}`}>
				<p id="titleMenuOpen">Menu</p>

				<Input
					id="dishSearch"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>

				<div id="buttonTextWrapper">
					<ButtonText
						className="menuOptions"
						title="Sair"
						onClick={signOut}
					/>
				</div>

				<Footer id="footer" />
			</div>
		</Container>
	);
}

export default MobileUserMenu;
