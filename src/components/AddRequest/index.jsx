// Imports Global
import Container from "./styles";
import { useState, useEffect } from "react";

// Imports of Images
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import RequestsIcon from "../../assets/requestsIcon.svg";

function AddRequest() {
	const [buttonContent, setButtonContent] = useState("pedir");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 769) {
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
			<img
				src={Minus}
				alt="Ícone de menos para tirar um prato"
			/>

			<span>01</span>

			<img
				src={Plus}
				alt="Ícone de menos para adicionar um prato"
			/>

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

export default AddRequest;
