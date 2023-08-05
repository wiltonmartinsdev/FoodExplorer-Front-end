// Imports Global
import Container from "./styles";

// Imports of Images
import PolygonFooter from "../../assets/polygonFooter.svg";

function Footer({ ...rest }) {
	return (
		<Container {...rest}>
			<div id="logo">
				<img
					src={PolygonFooter}
					alt="Logo em forma de polígono do food explorer"
				/>

				<p>food explorer</p>
			</div>

			<div id="copyright">
				&copy; 2023 - Todos os direitos reservados.
			</div>
		</Container>
	);
}

export default Footer;
