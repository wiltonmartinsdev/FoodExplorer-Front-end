// Imports Global
import Container from "./styles";

function RequestsButton({ image, ...rest }) {
	return (
		<Container {...rest}>
			<div id="content">
				<img
					src={image}
					alt="Ícone de comanda de pedidos"
				/>

				<p>
					Pedidos (<span>0</span>)
				</p>
			</div>
		</Container>
	);
}

export default RequestsButton;
