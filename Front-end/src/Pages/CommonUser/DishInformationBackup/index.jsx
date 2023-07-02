// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import ButtonText from "../../../components/ButtonText";
import IngredientsSection from "../../../components/IngredientsSection";
import Tags from "../../../components/Tags";
import Footer from "../../../components/Footer";

// Imports of Images
import MaskGroup from "../../../assets/maskGroup01.png";
import leftArrow from "../../../assets/leftArrow.svg";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";
import Icon from "../../../assets/icon.svg";

function DishInformation() {
	return (
		<Container>
			<NavBar />
			<Content>
				<div >
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

				<IngredientsSection
					title="Salada Ravanello"
					ingredients="Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.">
					<Tags title="alface" />
					<Tags title="cebola" />
					<Tags title="pão naan" />
					<Tags title="pepino" />
					<Tags title="rabanete" />
					<Tags title="tomate" />
				</IngredientsSection>

				<div id="addRequest">
					<img
						src={Minus}
						alt="Sinal de menos para tirar um prato"
					/>

					<span>01</span>

					<img
						src={Plus}
						alt="Sinal de menos para adicionar um prato"
					/>

					<button>
						<img
							src={Icon}
							alt="Ícone de pedidos"
						/>
						pedir <span id="point">.</span> R$ <span> 25,00</span>
					</button>
				</div>
			</Content>

			<Footer />
		</Container>
	);
}

export default DishInformation;
