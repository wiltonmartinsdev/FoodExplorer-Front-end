// Imports Global
import Container from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import Carousel from "../../../components/UserCarousel";
import Footer from "../../../components/Footer";

// Imports of Images
import ImgDescription from "../../../assets/imgDescription.svg";
import MaskGroup01 from "../../../assets/maskGroup01.png";
import MaskGroup02 from "../../../assets/maskGroup02.png";
import MaskGroup03 from "../../../assets/maskGroup03.png";
import MaskGroup04 from "../../../assets/maskGroup04.png";
import MaskGroup05 from "../../../assets/maskGroup05.png";
import MaskGroup06 from "../../../assets/maskGroup06.png";
import MaskGroup07 from "../../../assets/maskGroup07.png";
import MaskGroup08 from "../../../assets/maskGroup08.png";
import MaskGroup09 from "../../../assets/maskGroup09.png";
import MaskGroup10 from "../../../assets/maskGroup10.png";
import MaskGroup11 from "../../../assets/maskGroup11.png";
import MaskGroup12 from "../../../assets/maskGroup12.png";

function Home() {
	return (
		<Container id="container">
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

			<Carousel
				title="Refeições"
				subTitle1="Salada Ravanello"
				subTitle2="Spaghetti Gamberi"
				subTitle3="Torradas de Parma"
				subTitle4="Salada Molla"
				image1={MaskGroup01}
				image2={MaskGroup03}
				image3={MaskGroup02}
				image4={MaskGroup04}
				price1="49.97"
				price2="79.97"
				price3="25.97"
				price4="23.99"
			/>

			<Carousel
				title="Pratos principais"
				subTitle1="Prugna Pie"
				subTitle2="Peachy Pastrie"
				subTitle3="Macarons"
				subTitle4="Bolo de Damasco"
				image1={MaskGroup05}
				image2={MaskGroup06}
				image3={MaskGroup07}
				image4={MaskGroup08}
				price1="79.97"
				price2="32.97"
				price3="79.97"
				price4="23.99"
			/>

			<Carousel
				title="Bebidas"
				subTitle1="Suco de Maracujá"
				subTitle2="Expresso"
				subTitle3="Té D'autunno"
				subTitle4="Pomo Bourbon"
				image1={MaskGroup09}
				image2={MaskGroup10}
				image3={MaskGroup11}
				image4={MaskGroup12}
				price1="39.99"
				price2="29.99"
				price3="45.95"
				price4="19.97"
			/>

			<Footer />
		</Container>
	);
}

export default Home;
