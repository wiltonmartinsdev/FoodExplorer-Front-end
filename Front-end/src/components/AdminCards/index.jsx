// Imports Global
import { Container, Content } from "./styles";

// Imports of Images
import PencilIcon from "../../assets/pencilIcon.svg";

function AdminCards({ title, img, price }) {
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

					<div id="pencilIcon">
						<img
							src={PencilIcon}
							alt="Ícone de um lápis para editar os pratos cadastrados"
							id="heart"
						/>
					</div>
				</div>
			</Content>
		</Container>
	);
}

export default AdminCards;
