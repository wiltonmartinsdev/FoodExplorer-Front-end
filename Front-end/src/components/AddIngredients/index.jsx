// Imports Global
import Container from "./styles";

// Imports of Components

// Imports External
import { FiX, FiPlus } from "react-icons/fi";

// Imports of Images

function AddIngredients({ isNew = false, value, onClick, ...rest }) {
	return (
		<Container isNew={isNew}>
			<input
				type="text"
				readOnly={isNew}
				{...rest}
			/>

			<button
				type="button"
				onClick={onClick}>
				{isNew ? <FiX /> : <FiPlus />}
			</button>
		</Container>
	);
}

export default AddIngredients;
