// Imports Global
import { Container, Content } from "./styles";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import ButtonText from "../../../components/ButtonText";
import AddRequest from "../../../components/AddRequest";
import DishDescriptionSection from "../../../components/DishDescriptionSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import leftArrow from "../../../assets/leftArrow.svg";

function DishInformation() {
	const params = useParams();

	const [dishes, setDishes] = useState(null);

	const [ingredients, setIngredients] = useState();

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
								<Link to="/">
									<ButtonText title="voltar" />
								</Link>
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
					<AddRequest />
				</Content>
			)}

			<Footer />
		</Container>
	);
}

export default DishInformation;
