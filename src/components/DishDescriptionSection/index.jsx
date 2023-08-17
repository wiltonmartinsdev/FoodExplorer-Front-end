// Imports Global
import Container from "./styles";

function DishDescriptionSection({ title, ingredients, children }) {
	return (
		<Container>
			<h1> {title}</h1>

			<p>{ingredients}</p>

			<div id="tags">{children}</div>
		</Container>
	);
}

export default DishDescriptionSection;
