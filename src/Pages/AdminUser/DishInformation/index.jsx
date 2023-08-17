// Imports Global
import { Container, Content } from "./styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Imports of Components
import NavBar from "../../../components/NavBarAdmin";
import Button from "../../../components/Button";
import ButtonText from "../../../components/ButtonText";
import DishDescriptionSection from "../../../components/DishDescriptionSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import MaskGroup from "../../../assets/maskGroup01.png";
import leftArrow from "../../../assets/leftArrow.svg";

function DishInformation() {
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
							src={MaskGroup}
							alt="Prato com uma salada."
						/>
					</div>

					<div id="dishDescriptionSection">
						<DishDescriptionSection
							title="Salada Ravanello"
							description="Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim. Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.">
							<Tags title="alface" />
							<Tags title="cebola" />
							<Tags title="pão naan" />
							<Tags title="pepino" />
							<Tags title="rabanete" />
							<Tags title="tomate" />
							<Tags title="alho" />
							<Tags title="gergelim" />
							<Tags title="rabanete" />
							<Tags title="tomate" />
							<Tags title="alho" />
							<Tags title="cheiro-verde" />
						</DishDescriptionSection>
					</div>
				</div>

				<Link to="/EditDish">
					<Button
						id="editDish"
						title="Editar prato"
					/>
				</Link>
			</Content>

			<Footer />
		</Container>
	);
}

export default DishInformation;
