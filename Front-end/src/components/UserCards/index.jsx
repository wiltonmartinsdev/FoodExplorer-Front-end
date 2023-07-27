// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import Button from "../Button";

// Imports of Images
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import HeartIcon from "../../assets/heartIcon.svg";

function UserCards({ title, description, img, price }) {
	return (
		<Container>
			<Content>
				<img
					src={img}
					alt=""
					id="dishImage"
				/>

				<h1>{title} &gt; </h1>

				<p id="description">{description}</p>

				<p id="price">
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

					<Button
						id="include"
						title="incluir"
					/>
				</div>
				<div id="heartIcon">
					<img
						src={HeartIcon}
						alt="Ícone de um coração para adicionar o prato aos favoritos"
						id="heart"
					/>
				</div>
			</Content>
		</Container>
	);
}

export default UserCards;
