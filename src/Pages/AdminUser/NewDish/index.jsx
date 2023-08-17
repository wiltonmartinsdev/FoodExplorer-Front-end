// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
	const [tags, setTags] = useState([]);
	const [newTags, setNewTags] = useState("");

	function handleAddTag() {
		if (newTags === "") {
			return alert(
				"Ops! Parece que falta um nome para o ingrediente. Não se esqueça de dar um nome ao ingrediente para que possamos adicionar com sucesso!"
			);
		}
		setTags((prevState) => [...prevState, newTags]);
		setNewTags("");
	}

	function handleRemoveTag(deleted) {
		setTags((prevState) => prevState.filter((tag) => tag !== deleted));
	}

	async function handleSaveNewDish() {
		if (newTags) {
			return alert(
				"Ops! Percebemos que você preencheu o campo do ingrediente, mas não clicou em 'Adicionar'. Sinta-se à vontade para clicar para adicionar ou deixar o campo vazio se desejar."
			);
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
					/>

					<label
						id="category"
						htmlFor="category">
						Categoria
					</label>
					<select id="category">
						<option value="food">Refeição</option>
						<option value="mainDishes">Pratos Principais</option>
						<option value="desserts"> Sobremesas</option>
						<option value="drinks">Bebidas</option>
					</select>

					<label
						id="ingredients"
						htmlFor="ingredients">
						Ingredientes
					</label>
					<div
						id="ingredients"
						className="input">
						{tags.map((tag, index) => (
							<AddIngredients
								key={String(index)}
								value={tag}
								onClick={() => {
									handleRemoveTag(tag);
								}}
							/>
						))}
						<AddIngredients
							isNew
							placeholder="Adicionar"
							value={newTags}
							onChange={(e) => setNewTags(e.target.value)}
							onClick={handleAddTag}
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
					/>

					<label
						id="textArea"
						htmlFor="textArea">
						Descrição
					</label>
					<TextAreaDescription
						id="textArea"
						placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
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
