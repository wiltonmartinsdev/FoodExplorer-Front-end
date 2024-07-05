// Imports Global
import { Container, Content } from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

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
			return toast.warning(
				"Ops! Por favor, dê um nome ao ingrediente para adicioná-lo com sucesso."
			);
		}

		if (isDuplicateIngredient(newIngredients)) {
			return toast.warning(
				"Ops! Percebi que você já adicionou esse ingrediente. Se quiser, você pode editar o nome do ingrediente para concluir sua inserção ao sistema."
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
				return toast.warning(
					"Ops! Lembre-se de clicar no símbolo de adição '+' para adicionar o ingrediente."
				);
			}

			if (!name) {
				return toast.warning(
					"Ops! Por favor, preencha o campo 'Nome' para concluir o cadastro do prato."
				);
			} else if (!description) {
				return toast.warning(
					"Ops! Por favor, preencha o campo 'Descrição' para concluir o cadastro do prato."
				);
			} else if (!category) {
				return toast.warning(
					"Ops! Por favor, selecione uma 'Categoria' para concluir o cadastro do prato."
				);
			} else if (!price) {
				return toast.warning(
					"Ops! Por favor, preencha o campo 'Preço' para concluir o cadastro do prato."
				);
			} else if (ingredients.length === 0) {
				return toast.warning(
					"Ops! Por favor, adicione pelo menos um ingrediente para concluir o cadastro do prato."
				);
			} else if (!image) {
				return toast.warning(
					"Ops! Por favor, selecione uma 'Imagem' para concluir o cadastro do prato."
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

			toast.success(
				"Ótima notícia! O prato foi cadastrado com sucesso no sistema!"
			);

			setTimeout(() => {
				handleHome();
			}, 6000);
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message);
			} else {
				toast.error(
					"Ops! Desculpe, ocorreu um erro ao tentar cadastrar o prato devido a algum problema no servidor. Por favor, tente novamente."
				);
			}
		}
	}

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
						<option value="Refeições">Refeições</option>
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
