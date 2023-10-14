// Imports Global
import { Container, Content } from "./styles";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";

// Imports of Images
import maskGroup01 from "../../../assets/maskGroup01.png";
import qrCode from "../../../assets/qrCode.png";

function Payments() {
	return (
		<Container>
			<NavBar />

			<Content>
				{/* <div id="wrapper">

				</div> */}

				<div id="orderItems">
					<h1>Meu pedido</h1>

					<ul>
						<li>
							<img
								src={maskGroup01}
								alt=""
							/>

							<div id="description">
								<p id="title1">Salada Radish</p>
								<p id="title2">
									<span>1</span> x Salada Radish
								</p>
								<p id="subTitle1">Remover dos Favoritos</p>
								<p id="subTitle2">Excluir</p>
							</div>
						</li>

						<li>
							<img
								src={maskGroup01}
								alt=""
							/>

							<div id="description">
								<p id="title">Salada Radish</p>
								<p id="subTitle">Remover dos Favoritos</p>
							</div>
						</li>

						<li>
							<img
								src={maskGroup01}
								alt=""
							/>

							<div id="description">
								<p id="title">Salada Radish</p>
								<p id="subTitle">Remover dos Favoritos</p>
							</div>
						</li>

						<li>
							<img
								src={maskGroup01}
								alt=""
							/>

							<div id="description">
								<p id="title">Salada Radish</p>
								<p id="subTitle">Remover dos Favoritos</p>
							</div>
						</li>
					</ul>

					<p id="total">
						Total: R$ <span>103,88</span>
					</p>

					<Button
						id="advance"
						title="Avançar"
					/>
				</div>

				<div id="paymentWrapper">
					<h1>Pagamento</h1>

					<div id="payment">
						<div id="buttonWrapper">
							<Button
								id="pix"
								title="PIX"
							/>
							<Button
								id="credit"
								title="Crédito"
							/>
						</div>

						<img
							src={qrCode}
							alt="imagem de um qrcode para pagamento via pix"
						/>
					</div>
				</div>
			</Content>

			<Footer />
		</Container>
	);
}

export default Payments;
