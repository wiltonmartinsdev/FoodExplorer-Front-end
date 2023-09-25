// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import toast, { Toaster } from "react-hot-toast";

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

function EditDish() {
	const [dish, setDish] = useState(null);

	const [name, setName] = useState("");

	const [category, setCategory] = useState("");

	const [ingredients, setIngredients] = useState([]);

	const [newIngredients, setNewIngredients] = useState("");

	const [ingredientId, setIngredientId] = useState([]);

	const [price, setPrice] = useState("");

	const [image, setImage] = useState();

	const [imageName, setImageName] = useState("");

	const [description, setDescription] = useState("");

	const params = useParams();

	const navigate = useNavigate();

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
			return toast.error(
				"Ops! Por favor, dê um nome ao ingrediente para adicioná-lo com sucesso.",
				{
					duration: 5000,
				}
			);
		}

		if (isDuplicateIngredient(newIngredients)) {
			return toast.error(
				"Ops! Percebi que você já adicionou esse ingrediente. Se quiser, você pode editar o nome do ingrediente para concluir sua inserção ao sistema.",
				{
					duration: 5000,
				}
			);
		}

		setIngredients((prevState) => [...prevState, newIngredients]);

		setNewIngredients("");
	}

	async function handleRemoveIngredient(ingredientId, deleteIngredient) {
		const isConfirm = window.confirm(
			"Ops! Você está certo de que deseja remover este ingrediente? Essa ação irá excluí-lo de forma permanente do sistema."
		);

		if (isConfirm) {
			setIngredients((prevState) =>
				prevState.filter((ingredient) => {
					return ingredient !== deleteIngredient;
				})
			);
			await api.delete(`admin/Ingredient/${ingredientId}`);
		}
	}

	async function handleSaveDishEditChanges() {
		try {
			if (newIngredients) {
				return toast.error(
					"Ops! Lembre-se de clicar no símbolo de adição '+' para adicionar o ingrediente.",
					{
						duration: 5000,
					}
				);
			}

			if (image) {
				await imageUpdate();
			}

			await api.put(`admin/EditDish/${params.Id}`, {
				name,
				description,
				category,
				price,
				ingredients,
			});

			toast.success(
				"Ótima notícia! O prato foi atualizado com sucesso no sistema!",
				{
					duration: 3000,
				}
			);

			setTimeout(() => {
				handleBack();
			}, 3000);
		} catch (error) {
			if (error.response) {
				return toast.error(`${error.response.data.message}`, {
					duration: 5000,
				});
			} else {
				return toast.error(
					"Ops! Desculpe, ocorreu um erro ao tentar atualizar o prato devido a algum problema no servidor. Por favor, tente novamente.",
					{
						duration: 5000,
					}
				);
			}
		}
	}
	async function imageUpdate() {
		try {
			const imageUpload = new FormData();
			imageUpload.append("Image", image);

			await api.patch(`/admin/Image/${params.Id}`, imageUpload);
		} catch (error) {
			console.error(error);
		}
	}

	async function handleDishDeletion() {
		const isConfirm = window.confirm(
			"Ops! Tem certeza de que deseja excluir este prato? Isso removerá permanentemente os dados relacionados a ele do sistema."
		);

		if (isConfirm) {
			try {
				await api.delete(`admin/EditDish/${params.Id}`);
				toast.success("Prato deletado com sucesso do sistema!"),
					{
						duration: 5000,
					};
				navigate("/");
			} catch (error) {
				if (error.response) {
					return toast.error(`${error.response.data.message}`, {
						duration: 5000,
					});
				} else {
					return toast.error(
						"Ops! Desculpe, ocorreu um erro ao tentar deletar as informações do prato devido a algum problema no servidor. Por favor, tente novamente.",
						{
							duration: 5000,
						}
					);
				}
			}
		}
	}

	useEffect(() => {
		async function fetchDish() {
			try {
				const response = await api.get(
					`admin/DishInformation/${params.Id}`
				);
				setDish(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchDish();
	}, [params.Id]);

	useEffect(() => {
		if (dish) {
			setImageName(dish.Image);
			setImage(dish.Image);
			setName(dish.Name);
			setDescription(dish.Description);
			setCategory(dish.Category);
			setPrice(dish.Price);

			const ingredientName = dish.ingredientInformation.map(
				(ingredient) => {
					return ingredient.Name;
				}
			);

			const ingredientWithId = dish.ingredientInformation.map(
				(ingredient) => {
					return { Id: ingredient.Id, Name: ingredient.Name };
				}
			);

			setIngredients(ingredientName);
			setIngredientId(ingredientWithId);
		}
	}, [dish]);

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

				<h1>Editar prato</h1>

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
							<p id="description1">
								{imageName || "Selecione a imagem"}
							</p>
							<p id="description2">
								{imageName || "Selecione a imagem"}
							</p>
						</div>
						<input
							type="file"
							accept="image/*"
							multiple
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
						value={name}
						onChange={(e) => setName(e.target.value)}
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
						<option value="">Selecionar</option>
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
						{ingredients.map((ingredient, index) => {
							// Filtra o array de IDs de ingredientes para encontrar aqueles cujo nome corresponde ao nome do ingrediente atual.
							const filteredIngredientId = ingredientId
								.filter(
									(ingredientName) =>
										ingredientName.Name === ingredient
								)

								// Mapeia os IDs dos ingredientes filtrados para um novo array de IDs para serem utilizados na função de remoção dos ingredientes, onde irei passar o ID corresponde ao nome do ingrediente para ser removido.
								.map((ingredientId) => {
									return ingredientId.Id;
								});

							return (
								<AddIngredients
									key={String(index)}
									value={ingredient}
									onClick={() => {
										handleRemoveIngredient(
											filteredIngredientId,
											ingredient
										);
									}}
								/>
							);
						})}
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
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<label
						id="textArea"
						htmlFor="textArea">
						Descrição
					</label>
					<TextAreaDescription
						id="textArea"
						placeholder="A Salada César é uma opção refrescante para o verão."
						defaultValue={description}
						onChange={(e) => setDescription(e.target.value)}
					/>

					<div id="buttonOption">
						<Button
							id="delete"
							title="Excluir prato"
							onClick={handleDishDeletion}
						/>

						<Button
							id="save"
							title="Salvar alterações"
							onClick={handleSaveDishEditChanges}
						/>
					</div>
				</form>
			</Content>

			<Footer />

			<Toaster />
		</Container>
	);
}

export default EditDish;
