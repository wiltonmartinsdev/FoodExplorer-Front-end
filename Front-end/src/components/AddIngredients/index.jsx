// Imports Global
import Container from "./styles";

// Imports External
import { FiX, FiPlus } from "react-icons/fi";

function AddIngredients({ isNew, value, onClick, ...rest }) {
	return (
		<Container isNew={isNew}>
			<input
				type="text"
				readOnly={!isNew}
				value={value}
				{...rest}
			/>

			<button
				type="button"
				onClick={onClick}>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}

export default AddIngredients;
