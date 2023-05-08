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

			<div id="addRequest">
				<img
					src={Minus}
					alt="Sinal de menos para tirar um prato"
				/>

				<span>01</span>

				<img
					src={Plus}
					alt="Sinal de menos para adicionar um prato"
				/>

				<button>
					<img
						src={Icon}
						alt="Ícone de pedidos"
					/>
					pedir <span id="point">.</span> R$ <span> 25,00</span>
				</button>
			</div>
		</Container>
	);
}

export default IngredientsSection;
