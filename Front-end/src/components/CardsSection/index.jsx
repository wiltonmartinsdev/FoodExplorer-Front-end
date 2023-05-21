// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import Button from "../Button";

// Imports of Images
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import HeartIcon from "../../assets/heartIcon.svg";

function CardsSection({ title, img, price }) {
	return (
		<Container>
			<Content>
				<div id="cards">
					<img
						src={img}
						alt=""
						id="dishImage"
					/>

					<h1>{title} &gt; </h1>

					<p>
						R$ <span>{price}</span>
					</p>

					<div id="includeDish">
						<div id="icons">
							<img
								src={Minus}
								alt="Sinal de Menos para retirar um prato"
								id="Minus"
							/>

							<span>01</span>

							<img
								src={Plus}
								alt="Sinal de Mais para incluir um prato"
								id="Plus"
							/>
						</div>

						<Button title="incluir" />
					</div>
					<div id="heartIcon">
						<img
							src={HeartIcon}
							alt="Símbolo de um coração para adicionar o prato aos favoritos"
							id="heart"
						/>
					</div>
				</div>
			</Content>
		</Container>
	);
}

export default CardsSection;
