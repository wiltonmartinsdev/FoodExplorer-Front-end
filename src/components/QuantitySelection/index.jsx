import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import Container from "./styles";

function QuantifySelection({ number, setNumber }) {
	function handleNumberIncrement() {
		return setNumber((prevState) => prevState + 1);
	}

	function handleNumberDecrement() {
		if (number > 1) {
			return setNumber((prevState) => prevState - 1);
		}
	}

	return (
		<Container>
			<img
				src={Minus}
				alt="Sinal de Menos para retirar um prato"
				id="Minus"
				onClick={handleNumberDecrement}
			/>

			<span>{number < 10 ? `0${number}` : number}</span>

			<img
				src={Plus}
				alt="Sinal de Mais para incluir um prato"
				id="Plus"
				onClick={handleNumberIncrement}
			/>
		</Container>
	);
}

export default QuantifySelection;
