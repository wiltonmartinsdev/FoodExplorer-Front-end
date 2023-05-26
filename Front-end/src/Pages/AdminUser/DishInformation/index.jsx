// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarAdmin";
import Button from "../../../components/Button";
import ButtonText from "../../../components/ButtonText";
import IngredientsSection from "../../../components/IngredientsSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import MaskGroup from "../../../assets/maskGroup01.png";
import leftArrow from "../../../assets/leftArrow.svg";

function Dish() {
	return (
		<Container>
			<NavBar />
			<Content>
				<div>
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

				<IngredientsSection>
					<Tags title="alface" />
					<Tags title="cebola" />
					<Tags title="pão naan" />
					<Tags title="pepino" />
					<Tags title="rabanete" />
					<Tags title="tomate" />
				</IngredientsSection>

				<Button title="Editar prato" />
			</Content>
			<Footer />
		</Container>
	);
}

export default Dish;
