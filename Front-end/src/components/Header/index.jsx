import { Container, Content } from "./styles";

function Header() {
	return (
		<Container>
			<Content>
				<img
					src="src\assets\Menu.svg"
					alt="Ícone do Menu com opções"
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
					alt="Ícone de notificações de pedidos "
				/>
			</Content>
		</Container>
	);
}

export default Header;
