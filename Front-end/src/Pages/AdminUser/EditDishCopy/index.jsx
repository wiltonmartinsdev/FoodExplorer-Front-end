// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarAdmin";
import ButtonText from "../../../components/ButtonText";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AddIngredients from "../../../components/AddIngredients";
import TextAreaDescription from "../../../components/TextAreaDescription";
import Footer from "../../../components/Footer";

// Imports of Images
import leftArrow from "../../../assets/leftArrow.svg";
import UploadImg from "../../../assets/uploadImg.svg";

function EditDish() {
	return (
		<Container>
			<NavBar />
			<Content>
				<div id="backButton">
					<img
						id="leftArrow"
						src={leftArrow}
						alt="Seta apontando para esquerda"
					/>
					<ButtonText title="voltar" />
				</div>

				<h1>Editar prato Copy</h1>
			</Content>
			<Footer />
		</Container>
	);
}

export default EditDish;
