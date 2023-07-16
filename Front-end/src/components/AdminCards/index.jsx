// Imports Global
import { Container, Content } from "./styles";

// Imports of Images
import PencilIcon from "../../assets/pencilIcon.svg";

function AdminCards({ title, description, img, price }) {
	return (
		<Container>
			<Content>
				<div id="cards">
                    <div id="wrapperCards">
                    <img
						id="dishImage"
						src={img}
						alt=""
					/>

					<h1>{title} &gt; </h1>

					<p id="description">{description}</p>

					<p id="price">
						R$ <span>{price}</span>
					</p>

					<div id="pencilIcon">
						<img
							id="heart"
							src={PencilIcon}
							alt="Ícone de um lápis para editar os pratos cadastrados"
						/>
					</div>
                    </div>
				</div>
			</Content>
		</Container>
	);
}

export default AdminCards;
