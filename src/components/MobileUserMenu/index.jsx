// Imports Global
import Container from "./styles";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import Input from "../Input";
import ButtonText from "../ButtonText";
import Footer from "../Footer";

function MobileUserMenu() {
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
					/>
				</div>

				<Footer id="footer" />
			</div>
		</Container>
	);
}

export default MobileUserMenu;
