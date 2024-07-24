import Container from "./styles";

function DishDescriptionSection({ title, description, children }) {
	return (
		<Container>
			<h1> {title}</h1>

			<p>{description}</p>

			<div id="tags">{children}</div>
		</Container>
	);
}

export default DishDescriptionSection;
