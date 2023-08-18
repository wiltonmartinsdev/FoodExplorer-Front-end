// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

	const options = ["Pratos Principais", "Sobremesas", "Bebidas"];
	const [category, setCategory] = useState(options[0]);

	const [price, setPrice] = useState();
	const [ingredients, setIngredients] = useState([]);
	const [newIngredients, setNewIngredients] = useState("");

	const navigate = useNavigate();

	function handleAddIngredient() {
		if (newIngredients === "") {
			return alert(
				"Ops! Parece que falta um nome para o ingrediente. Não se esqueça de dar um nome ao ingrediente para que possamos adicionar com sucesso!"
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
		if (newIngredients) {
			return alert(
				"Ops! Percebemos que você preencheu o campo do ingrediente, mas não clicou em 'Adicionar'. Sinta-se à vontade para clicar para adicionar ou deixar o campo vazio se desejar."
			);
		}

		await api.post("/admin/NewDish", {
			name,
			description,
			category,
			price,
			ingredients,
		});

		alert("Ótima notícia! O prato foi cadastrado com sucesso no sistema!");
		navigate("/");
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
					<Link to="/">
						<ButtonText title="voltar" />
					</Link>
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
								src={UploadImg}
								alt="Ícone de uma seta para cima para fazer upload de uma imagem"
							/>

							<p>Selecione a imagem</p>
						</div>
						<input
							type="file"
							accept="image/*"
							multiple
							id="img"
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
						{options.map((option, index) => (
							<option
								value={option}
								key={String(index)}>
								{option}
							</option>
						))}
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
