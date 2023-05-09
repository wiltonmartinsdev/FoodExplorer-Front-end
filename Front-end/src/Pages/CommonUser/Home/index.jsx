// Imports Global
import Container from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBar";

// Imports of Images
import ImgDescription from "../../../assets/imgDescription.svg";

function Home() {
	return (
		<Container>
			<NavBar />

			<div id="descriptionOfFlavors">
				<h1>Sabores inigualáveis</h1>

				<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
			</div>

			<img
				id="imgDescription"
				src={ImgDescription}
				alt="Imagens de sanduíches coloridos e alguma frutas ao redor."
			/>
		</Container>
	);
}

export default Home;
