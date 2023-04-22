import Container from "./styles";
import Polygon from "../../assets/polygon.svg";

function Logo() {
	return (
		<Container>
			<img
				src={Polygon}
				alt="Logo em forma de polígono do food explorer"
			/>

			<h1>food explorer</h1>
		</Container>
	);
}

export default Logo;