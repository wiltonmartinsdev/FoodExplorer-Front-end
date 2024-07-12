import PolygonFooter from "../../assets/polygonFooter.svg";
import Container from "./styles";

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
