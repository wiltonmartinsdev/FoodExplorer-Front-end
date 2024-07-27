import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import leftArrow from "../../../assets/leftArrow.svg";
import Button from "../../../components/Button";
import ButtonText from "../../../components/ButtonText";
import DishDescriptionSection from "../../../components/DishDescriptionSection";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBarAdmin";
import Tags from "../../../components/Tags";
import { api } from "../../../services/api";
import { Container, Content } from "./styles";

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

	return (
		<>
			<NavBar />

			<Container>
				<Link to="/">
					<div id="backButton">
						<img
							id="leftArrow"
							src={leftArrow}
							alt="Seta apontando para esquerda"
						/>
						<ButtonText
							id="buttonText"
							title="voltar"
							onClick={handleBack}
						/>
					</div>
				</Link>

				<Content>
					{dishes && (
						<>
							<div id="containerDish">
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
						</>
					)}
				</Content>

				<Button
					id="editDish"
					title="Editar prato"
					onClick={handleEditDish}
				/>
			</Container>

			<Footer />
		</>
	);
}

export default DishInformation;
