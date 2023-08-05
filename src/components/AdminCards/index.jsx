// Imports Global
import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

// Imports of Images
import PencilIcon from "../../assets/pencilIcon.svg";

function AdminCards({ title, description, img, price }) {
	return (
		<Container>
			<Content>
				<div id="cardsWrapper">
					<Link to="/DishInformation">
						<img
							id="dishImage"
							src={img}
							alt="imagem referente ao prato ou bebida"
						/>
					</Link>

					<h1>{title} &gt; </h1>

					<p id="description">{description}</p>

					<p id="price">
						R$ <span>{price}</span>
					</p>

					<div id="pencilIcon">
						<Link to="/EditDish">
							<img
								id="heart"
								src={PencilIcon}
								alt="Ícone de um lápis para editar os pratos cadastrados"
							/>
						</Link>
					</div>
				</div>
			</Content>
		</Container>
	);
}

export default AdminCards;
