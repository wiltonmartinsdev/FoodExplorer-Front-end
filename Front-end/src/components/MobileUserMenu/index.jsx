// Imports Global
import Container from "./styles";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import Input from "../Input";
import ButtonText from "../ButtonText";
import Footer from "../Footer";

const MobileUserMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container>
			<div
				className={`menuIcon ${menuOpen ? "open" : ""}`}
				onClick={toggleMenu}>
				<div className="menuIconLine" />
				<div className="menuIconLine" />
				<div className="menuIconLine" />
			</div>

			<p className={`menu ${menuOpen ? "open" : ""}`}>Menu</p>

			<div className={`menu ${menuOpen ? "open" : ""}`}>
				<Input
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>
			</div>

			<div
				id="myFavorites"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<ButtonText title="Meus Favoritos" />
			</div>
			<hr
				id="lineFavorites"
				className={` hr menu ${menuOpen ? "open" : ""}`}
			/>

			<div
				id="logout"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<ButtonText title="Sair" />
			</div>
			<hr
				id="lineLogout"
				className={` hr menu ${menuOpen ? "open" : ""}`}
			/>

			<div
				id="footer"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<Footer />
			</div>
		</Container>
	);
};

export default MobileUserMenu;