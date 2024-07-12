import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import IconSignOut from "../../assets/iconSignOut.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import Polygon from "../../assets/polygon.svg";
import RequestsIcon from "../../assets/requestsIcon.svg";
import { useAuth } from "../../hooks/auth";
import Input from "../Input";
import MobileUserMenu from "../MobileUserMenu";
import RequestsButton from "../RequestsButton";
import { Container, Content, Brand } from "./styles";

function NavBarUser({ onChange }) {
	const { signOut } = useAuth();

	const navigate = useNavigate();

	function handleSignOut() {
		navigate("/");

		signOut();
	}

	function handlePayments() {
		// navigate("/Payments");

		navigate("/");
	}

	return (
		<Container>
			<Content>
				<MobileUserMenu onChange={onChange} />

				<Link to="/">
					<Brand id="brand">
						<img
							src={Polygon}
							alt="Ícone de um polígono na cor azul"
						/>

						<h1>food explorer</h1>
					</Brand>
				</Link>

				<img
					className="menu"
					src={NotificationIcon}
					alt="Ícone de notificações de pedidos"
					onClick={handlePayments}
				/>

				<Input
					className="input"
					placeholder="Busque por pratos ou ingredientes"
					img={HiOutlineSearch}
					onChange={onChange}
				/>

				<RequestsButton
					className="button"
					image={RequestsIcon}
					title="Pedidos"
					onClick={handlePayments}
				/>

				<img
					id="iconSignOut"
					src={IconSignOut}
					alt="Ícone com uma seta pequena para direita indicando para sair da aplicação."
					onClick={handleSignOut}
				/>
			</Content>
		</Container>
	);
}

export default NavBarUser;
