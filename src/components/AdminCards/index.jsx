import { useNavigate } from "react-router-dom";

import PencilIcon from "../../assets/pencilIcon.svg";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

function AdminCards({ data, ...rest }) {
	const navigate = useNavigate();

	function handleDishInformation(Id) {
		navigate(`/DishInformation/${Id}`);
	}

	function handleEditDish(Id) {
		navigate(`/EditDish/${Id}`);
	}

	return (
		<Container>
			{data && (
				<Content {...rest}>
					<img
						id="dishImage"
						src={`${api.defaults.baseURL}/files/${data.Image}`}
						alt="Imagem referente ao prato, sobremesa ou bebida"
						onClick={() => {
							return handleDishInformation(data.Id);
						}}
					/>

					<h1 id="cardsH1">{data.Name} &gt; </h1>

					<p id="description">{data.Description}</p>

					<p id="price">
						R$ <span>{data.Price.toFixed(2)}</span>
					</p>

					<div id="pencilIcon">
						<img
							id="pencil"
							src={PencilIcon}
							alt="Ícone de um lápis para editar os pratos cadastrados"
							onClick={() => {
								return handleEditDish(data.Id);
							}}
						/>
					</div>
				</Content>
			)}
		</Container>
	);
}

export default AdminCards;
