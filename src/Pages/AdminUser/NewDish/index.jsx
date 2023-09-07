// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

// Imports of Components
import NavBar from "../../../components/NavBarAdmin";
import ButtonText from "../../../components/ButtonText";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AddIngredients from "../../../components/AddIngredients";
import TextAreaDescription from "../../../components/TextAreaDescription";
import Footer from "../../../components/Footer";

// Imports of Images
import leftArrow from "../../../assets/leftArrow.svg";
import UploadImg from "../../../assets/uploadImg.svg";

function NewDish() {
	const [name, setName] = useState("");

	const [description, setDescription] = useState("");

	const [category, setCategory] = useState("");

	const [price, setPrice] = useState();

	const [image, setImage] = useState(null);

	const [imageName, setImageName] = useState("");

	const [ingredients, setIngredients] = useState([]);

	const [newIngredients, setNewIngredients] = useState("");

	const navigate = useNavigate();

	function handleHome() {
		navigate("/");
	}

	function handleBack() {
		navigate(-1);
	}

	function handleImage(event) {
		const file = event.target.files[0];

		setImage(file);
		setImageName(file.name);
	}

	function isDuplicateIngredient(ingredient) {
		return ingredients.includes(ingredient);
	}

	function handleAddIngredient() {
		if (newIngredients === "") {
			return alert(
				"Ops! Parece que falta um nome para o ingrediente. Não se esqueça de dar um nome ao ingrediente para que possamos adicioná-lo com sucesso!"
			);
		}

		if (isDuplicateIngredient(newIngredients)) {
			return alert(
				"Ops! Vejo que você já adicionou esse ingrediente. Se desejar, fique à vontade para modificar o nome do ingrediente para que possamos adicioná-lo com sucesso ao sistema."
			);
		}

		setIngredients((prevState) => [...prevState, newIngredients]);
		setNewIngredients("");
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredient) => ingredient !== deleted)
		);
	}

	async function handleSaveNewDish() {
		try {
			if (newIngredients) {
				return alert(
					"Ops! Percebi que você preencheu o campo do ingrediente, mas não clicou no símbolo de adição '+'. Sinta-se à vontade para clicar para adicionar ou deixar o campo vazio se desejar."
				);
			}

			if (!name) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você preencha o campo 'Nome'. Por favor, verifique esse campo e tente novamente."
				);
			} else if (!description) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você preencha o campo 'Descrição'. Por favor, verifique esse campo e tente novamente."
				);
			} else if (!category) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você selecione uma categoria. Por favor, verifique esse campo e tente novamente."
				);
			} else if (!price) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você preencha o campo 'Preço'. Por favor, verifique esse campo e tente novamente."
				);
			} else if (ingredients.length === 0) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você adicione pelo menos um ingrediente. Por favor, verifique esse campo e tente novamente."
				);
			} else if (!image) {
				return alert(
					"Ops! Para assegurar que o cadastro do prato seja bem-sucedido no nosso sistema, é fundamental que você selecione uma imagem. Por favor, selecione uma imagem e tente novamente."
				);
			}

			// Ao cadastrar um prato, estou capturando o ID do mesmo. Esse ID será posteriormente utilizado para associar e cadastrar uma imagem específica para o prato, garantindo uma correspondência precisa entre o prato e sua imagem correspondente.
			const response = await api.post("/admin/NewDish", {
				name,
				description,
				category,
				price,
				ingredients,
			});

			const DishId = String(response.data.DishId);
			const dishImage = new FormData();
			dishImage.append("Image", image);

			// Após capturar o ID do prato, estou utilizando essa informação para efetuar o cadastro da imagem correspondente a esse prato específico. Dessa forma, estabeleço uma ligação direta entre o prato e sua imagem associada no sistema.
			await api.patch(`admin/Image/${DishId}`, dishImage);

			alert(
				"Ótima notícia! O prato foi cadastrado com sucesso no sistema!"
			);

			handleHome();
		} catch (error) {
			if (error.response) {
				return alert(error.response.data.message);
			} else {
				return alert(
					"Ops! Desculpe, ocorreu um erro ao tentar cadastrar o prato devido a algum problema no servidor. Por favor, tente novamente."
				);
			}
		}
	}

	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = "src/assets/polygon.svg";
		link.type = "image/x-icon";

		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	return (
		<Container>
			<NavBar />

			<Content>
				<div id="backButton">
					<img
						id="leftArrow"
						src={leftArrow}
						alt="Seta apontando para esquerda"
					/>
					<ButtonText
						title="voltar"
						onClick={handleBack}
					/>
				</div>

				<h1 id="title1">Novo prato</h1>
				<h1 id="title2">Adicionar prato</h1>

				<form>
					<label
						htmlFor="img"
						id="upload">
						Imagem do Prato
						<div id="upload">
							<img
								id="imageUpload"
								src={UploadImg}
								alt="Ícone de uma seta para cima para fazer upload de uma imagem"
							/>

							<p>{imageName || "Selecione a imagem"}</p>
						</div>
						<input
							type="file"
							accept="image/*"
							id="img"
							onChange={handleImage}
						/>
					</label>
					<div className="input"></div>

					<label
						id="name"
						htmlFor="name">
						Nome
					</label>
					<Input
						id="name"
						placeholder="Ex.: Salada Caesar"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>

					<label
						id="category"
						htmlFor="category">
						Categoria
					</label>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value="">Selecione a Categoria</option>
						<option value="Pratos Principais">
							Pratos Principais
						</option>
						<option value="Sobremesas"> Sobremesas</option>
						<option value="Bebidas">Bebidas</option>
					</select>

					<label
						id="ingredients"
						htmlFor="ingredients">
						Ingredientes
					</label>
					<div
						id="ingredients"
						className="input">
						{ingredients.map((ingredient, index) => (
							<AddIngredients
								key={String(index)}
								value={ingredient}
								onClick={() => {
									handleRemoveIngredient(ingredient);
								}}
							/>
						))}
						<AddIngredients
							isNew
							placeholder="Adicionar"
							value={newIngredients}
							onChange={(e) => setNewIngredients(e.target.value)}
							onClick={handleAddIngredient}
						/>
					</div>

					<label
						id="price"
						htmlFor="price">
						Preço
					</label>
					<Input
						className="no-arrows"
						id="price"
						type="number"
						placeholder="R$ 00,00"
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>

					<label
						id="textArea"
						htmlFor="textArea">
						Descrição
					</label>
					<TextAreaDescription
						id="textArea"
						placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>

					<Button
						id="save"
						title="Salvar Prato"
						onClick={handleSaveNewDish}
					/>
				</form>
			</Content>

			<Footer />
		</Container>
	);
}

export default NewDish;
