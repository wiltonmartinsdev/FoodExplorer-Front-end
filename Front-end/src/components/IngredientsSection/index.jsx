// Imports Global
import Container from "./styles";

// Imports of Images
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
// import Icon from "../../assets/Icon.svg";

function IngredientsSection({title,ingredients, children }) {
	return (
		<Container>
			<h1> {title}</h1>

			<p>
				{ingredients}
			</p>

			<div id="tags">{children}</div>


		</Container>
	);
}

export default IngredientsSection;
