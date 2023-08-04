// Imports Global
import Container from "./styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

// Imports of Components
import Input from "../Input";
import ButtonText from "../ButtonText";
import Footer from "../Footer";

const MobileAdminMenu = () => {
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

			<div className={`menu ${menuOpen ? "open" : ""}`}>
				<p id="titleMenuOpen">Menu</p>

				<Input
					id="dishSearch"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>

				<div id="wrapperButtonText">
					<Link to="/NewDish">
						<ButtonText
							className="menuOptions"
							id="newDish"
							title="Novo Prato"
						/>
					</Link>

					<Link>
						<ButtonText
							className="menuOptions"
							id="logout"
							title="Sair"
						/>
					</Link>
				</div>

				<Footer id="footer" />
			</div>
		</Container>
	);
};

export default MobileAdminMenu;
