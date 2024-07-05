// Imports Global
import Container from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { useAuth } from "../../hooks/auth";

// Imports of Components
import Input from "../Input";
import ButtonText from "../ButtonText";
import Footer from "../Footer";

function MobileUserMenu({ onChange }) {
	const { signOut } = useAuth();

    const navigate = useNavigate()

	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	function handleSignOut() {
		navigate("/");

		signOut();
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
					onChange={onChange}
				/>

				<div id="buttonTextWrapper">
					<ButtonText
						className="menuOptions"
						title="Sair"
						onClick={handleSignOut}
					/>
				</div>

				<Footer id="footer" />
			</div>
		</Container>
	);
}

export default MobileUserMenu;
