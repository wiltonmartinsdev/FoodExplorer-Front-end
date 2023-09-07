// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";

// Imports of Components
import NavBar from "../../../components/NavBarAdmin";
import Button from "../../../components/Button";
import ButtonText from "../../../components/ButtonText";
import DishDescriptionSection from "../../../components/DishDescriptionSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import leftArrow from "../../../assets/leftArrow.svg";

function DishInformation() {
	const params = useParams();
	
    const navigate = useNavigate();

	const [dishes, setDishes] = useState(null);

	const [ingredients, setIngredients] = useState();

	function handleBack() {
		navigate(-1);
	}

	function handleEditDish() {
		navigate(`/EditDish/${params.Id}`);
	}

	useEffect(() => {
		async function fetchDish() {
			const response = await api.get(
				`admin/DishInformation/${params.Id}`
			);

			setDishes(response.data);
			setIngredients(response.data.ingredientInformation);
		}

		fetchDish();
	}, []);

	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = "src/assets/polygon.svg";
		link.type = "image/x-icon";

		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	return (
		<Container>
			<NavBar />

			{dishes && (
				<Content>
					<div id="wrapper">
						<div id="containerDish">
							<div id="backButton">
								<img
									id="leftArrow"
									src={leftArrow}
									alt="Seta apontando para esquerda"
								/>
								<ButtonText
									title="voltar"
									onClick={handleBack}
								/>
							</div>

							<img
								id="dish"
								src={`${api.defaults.baseURL}/files/${dishes.Image}`}
								alt={dishes.Name}
							/>
						</div>

						<div id="dishDescriptionSection">
							<DishDescriptionSection
								title={dishes.Name}
								description={dishes.Description}>
								{ingredients.map((ingredient) => {
									return (
										<Tags
											key={ingredient.Id}
											name={ingredient.Name}
										/>
									);
								})}
							</DishDescriptionSection>
						</div>
					</div>

					<Button
						id="editDish"
						title="Editar prato"
						onClick={handleEditDish}
					/>
				</Content>
			)}

			<Footer />
		</Container>
	);
}

export default DishInformation;
