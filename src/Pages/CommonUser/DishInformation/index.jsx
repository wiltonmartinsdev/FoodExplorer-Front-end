import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import leftArrow from "../../../assets/leftArrow.svg";
import AddOrderButton from "../../../components/AddOrderButton";
import ButtonText from "../../../components/ButtonText";
import DishDescriptionSection from "../../../components/DishDescriptionSection";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBarUser";
import QuantifySelection from "../../../components/QuantitySelection";
import Tags from "../../../components/Tags";
import { api } from "../../../services/api";
import { Container, Content } from "./styles";

function DishInformation() {
	const [number, setNumber] = useState(1);

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
		<>
			<NavBar />
			<Container>
				<Content>
					{dishes && (
						<>
							<div id="containerDish">
								<div id="backButton">
									<Link to="/">
										<img
											id="leftArrow"
											src={leftArrow}
											alt="Seta apontando para esquerda"
										/>
									</Link>
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
						</>
					)}
				</Content>

				<div id="wrapperAddOrder">
					<QuantifySelection
						number={number}
						setNumber={setNumber}
					/>
					<AddOrderButton />
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default DishInformation;
