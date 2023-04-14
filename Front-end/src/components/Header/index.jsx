import { Container, Content, Brand } from "./styles";

function Header() {
	return (
		<Container>
			<Content>
				<img
					src="src\assets\Menu.svg"
					alt=""
				/>
				<Brand>
					<img
						src="src\assets\Polygon 1.svg"
						alt=""
					/>

					<h1>food explorer</h1>
				</Brand>
				<img
					src="src\assets\request.svg"
					alt=""
				/>
			</Content>
		</Container>
	);
}

export default Header;
