import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import Button from "../Button";
import QuantifySelection from "../QuantitySelection";
import { Container, Content } from "./styles";

function UserCards({ data, isFavorite, updateFavorite, ...rest }) {
	const [number, setNumber] = useState(1);

	const navigate = useNavigate();

	function handleDishInformation(Id) {
		navigate(`/DishInformation/${Id}`);
	}

	async function handleFavorites() {
		try {
			if (isFavorite) {
				updateFavorite(true, data.Id);
			} else {
				updateFavorite(false, data.Id);
			}
		} catch (error) {
			console.log("Erro ao atualizar favoritos:", error);
		}
	}

	return (
		<Container>
			{data && (
				<Content {...rest}>
					<img
						src={`${api.defaults.baseURL}/files/${data.Image}`}
						alt="Imagem referente ao prato, sobremesa ou bebida"
						id="dishImage"
						onClick={() => {
							return handleDishInformation(data.Id);
						}}
					/>

					<h1 id="cardsH1">{data.Name} &gt; </h1>

					<p id="description">{data.Description}</p>

					<p id="price">
						R$ <span>{data.Price.toFixed(2)}</span>
					</p>

					<div id="includeDish">
						<QuantifySelection
							number={number}
							setNumber={setNumber}
						/>

						<Button
							id="include"
							title="incluir"
						/>
					</div>

					<div
						id="heartIcon"
						onClick={handleFavorites}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="24"
							viewBox="0 0 26 24"
							fill={isFavorite ? "red" : null}>
							<path
								d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z"
								stroke={isFavorite ? "red" : "#E1E1E6"}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</Content>
			)}
		</Container>
	);
}

export default UserCards;
