// Imports Global
import Container from "./styles";

// Imports of Images
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import Icon from "../../assets/Icon.svg";

function IngredientsSection({ children }) {
	return (
		<Container>
			<h1> Salada Ravanello</h1>

			<p>
				Rabanetes, folhas verdes e molho agridoce salpicados com
				gergelim.
			</p>

			<div id="tags">{children}</div>


		</Container>
	);
}

export default IngredientsSection;
