// Imports Global
import Container from "./styles";

// Imports of Images
import Polygon from "../../assets/polygon.svg";

function Logo({ ...rest }) {
	return (
		<Container {...rest}>
			<img
				src={Polygon}
				alt="Logo em forma de polígono do food explorer"
			/>

			<h1>food explorer</h1>
		</Container>
	);
}

export default Logo;
