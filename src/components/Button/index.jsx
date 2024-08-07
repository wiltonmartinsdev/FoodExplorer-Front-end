import { ThreeDots } from "react-loader-spinner";

import Container from "./styles";

function Button({ title, loading = false, ...rest }) {
	return (
		<Container
			type="button"
			{...rest}>
			{loading ? (
				<div id="spinner">
					Carregando
					<ThreeDots
						color="white"
						width={30}
						height={30}
					/>
				</div>
			) : (
				title
			)}
		</Container>
	);
}

export default Button;
