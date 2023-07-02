// Imports Global
import Container from "./styles";
import React, { useState } from "react";
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

			<p className={`menu ${menuOpen ? "open" : ""}`}>Menu</p>

			<div className={`menu ${menuOpen ? "open" : ""}`}>
				<Input
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
				/>
			</div>

			<div
				id="newDish"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<ButtonText title="Novo Prato" />
			</div>
			<hr
				id="lineNewDish"
				className={` hr menu ${menuOpen ? "open" : ""}`}
			/>

			<div
				id="myFavorites"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<ButtonText title="Meus Favoritos" />
			</div>
			<hr
				id="lineMyFavorites"
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

			{/* <div
				id="dishInformation"
				className={` hr menu ${menuOpen ? "open" : ""}`}>
				<DishInformation />
			</div> */}

			{/* <div
				id="logout"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<ButtonText title="Sair" />
			</div>
			<hr
				id="lineLogout"
				className={` hr menu ${menuOpen ? "open" : ""}`}
			/> */}

			<div
				id="footer"
				className={`menu ${menuOpen ? "open" : ""}`}>
				<Footer />
			</div>
		</Container>
	);
};

export default MobileAdminMenu;