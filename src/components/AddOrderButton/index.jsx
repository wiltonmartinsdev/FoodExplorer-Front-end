import { useState, useEffect } from "react";

import RequestsIcon from "../../assets/requestsIcon.svg";
import Container from "./styles";

function AddOrderButton() {
	const [buttonContent, setButtonContent] = useState("pedir");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setButtonContent("incluir");
			} else {
				setButtonContent("pedir");
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Container>
			<button>
				<img
					src={RequestsIcon}
					alt="Ícone de comanda de pedidos"
				/>
				{buttonContent}
				<span id="point">.</span> R$ <span id="price"> 25,00</span>
			</button>
		</Container>
	);
}

export default AddOrderButton;
