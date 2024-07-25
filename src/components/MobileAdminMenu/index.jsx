import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import ButtonText from "../ButtonText";
import Footer from "../Footer";
import Input from "../Input";
import Container from "./styles";

function MobileAdminMenu({ onChange }) {
	const { signOut } = useAuth();

	const navigate = useNavigate();

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
				<span id="titleMenu">
					<p id="titleMenuOpen">Menu</p>
				</span>

				<Input
					id="dishSearch"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
					onChange={onChange}
				/>

				<div id="buttonTextWrapper">
					<Link to="/NewDish">
						<ButtonText
							className="menuOptions"
							id="newDish"
							title="Novo Prato"
						/>
					</Link>

					<ButtonText
						className="menuOptions"
						id="logout"
						title="Sair"
						onClick={handleSignOut}
					/>
				</div>

				<Footer id="footer" />
			</div>
		</Container>
	);
}

export default MobileAdminMenu;
