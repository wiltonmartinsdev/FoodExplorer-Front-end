// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import ButtonText from "../../../components/ButtonText";
import AddRequest from "../../../components/AddRequest";
import IngredientsSection from "../../../components/IngredientsSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import MaskGroup from "../../../assets/maskGroup01.png";
import leftArrow from "../../../assets/leftArrow.svg";

function DishInformation() {
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
							<ButtonText title="voltar" />
						</div>

						<img
							id="dish"
							src={MaskGroup}
							alt="Prato com uma salada."
						/>
					</div>

					<div id="ingredientsSection">
						<IngredientsSection
							title="Salada Ravanello"
							ingredients="Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim. Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim. Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.  ">
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
						</IngredientsSection>
					</div>
				</div>
				<AddRequest />
			</Content>

			<Footer />
		</Container>
	);
}

export default DishInformation;
