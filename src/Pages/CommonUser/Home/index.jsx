// Imports Global
import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";

// Imports of Components
import NavBar from "../../../components/NavBarUser";
import CardsSection from "../../../components/UserCards";
import Footer from "../../../components/Footer";

// Imports External
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Style Import
import "swiper/css";
import "swiper/css/navigation";

// Import of Required Swiper Modules
import { Autoplay, Navigation } from "swiper";

// Imports of Images
import ImgDescription from "../../../assets/imgDescription.svg";

function Home() {
	const [slidesPerView, setSlidesPerView] = useState(4);

	const [spaceBetween, setSpaceBetween] = useState(-100);

	const [dishes, setDishes] = useState([]);

	const [search, setSearch] = useState("");

	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		async function fetchDishes() {
			const response = await api.get(
				`/admin?name=${search}&ingredients=${search}`
			);

			setDishes(response.data);
		}
		fetchDishes();
	}, [search]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 430) {
				setSlidesPerView(2);
				setSpaceBetween(10);
			} else if (window.innerWidth > 431 && window.innerWidth <= 769) {
				setSlidesPerView(3);
				setSpaceBetween(50);
			} else if (window.innerWidth > 769) {
				setSlidesPerView(4);
				setSpaceBetween(-100);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await api.get("/favorites");
				const favoritesAll = response.data.map(
					(favorite) => favorite.DishId
				);

				console.log("Todos os favoritos", favoritesAll);
				setFavorites(favoritesAll);
			} catch (error) {
				console.log("Erro ao buscar favoritos");
			}
		};

		fetchFavorites();
	}, []);

	const updateFavorite = async (isFavorite, dishId) => {
		try {
			if (isFavorite) {
				await api.delete(`/favorites/${dishId}`);

				setFavorites((prevFavorites) =>
					prevFavorites.filter((favorite) => favorite !== dishId)
				);
			} else {
				await api.post("/favorites", { DishId: dishId });
				setFavorites((prevFavorites) => [...prevFavorites, dishId]);
			}
		} catch (error) {
			console.log("Erro ao atualizar favoritos!:", error);
		}
	};

	return (
		<Container>
			<NavBar onChange={(e) => setSearch(e.target.value)} />

			<Content>
				<div id="descriptionOfFlavors">
					<h1>Sabores inigualáveis</h1>

					<p>
						Sinta o cuidado do preparo com ingredientes
						selecionados.
					</p>
				</div>

				<img
					id="imgDescription"
					src={ImgDescription}
					alt="Imagens de sanduíches coloridos e alguma frutas ao redor."
				/>

				<div id="carousel">
					<p className="carousel">Refeições</p>

					<Swiper
						className="mySwiper"
						navigation={true}
						modules={[Navigation, Autoplay]}
						slidesPerView={slidesPerView}
						spaceBetween={spaceBetween}
						grabCursor={true}
						autoplay={{
							delay: 3000000,
							disableOnInteraction: false,
						}}>
						{dishes
							.filter((dish) => {
								return dish.Category === "Refeições";
							})
							.map((dish) => {
								return (
									<SwiperSlide key={String(dish.Id)}>
										<CardsSection
											data={dish}
											isFavorite={favorites.includes(
												dish.Id
											)}
											updateFavorite={updateFavorite}
										/>
									</SwiperSlide>
								);
							})}
					</Swiper>

					<p className="carousel">Sobremesas</p>

					<Swiper
						className="mySwiper"
						navigation={true}
						modules={[Navigation, Autoplay]}
						slidesPerView={slidesPerView}
						spaceBetween={spaceBetween}
						grabCursor={true}
						autoplay={{
							delay: 3000000,
							disableOnInteraction: false,
						}}>
						{dishes
							.filter((dish) => {
								return dish.Category === "Sobremesas";
							})
							.map((dish, index) => {
								return (
									<SwiperSlide key={String(index)}>
										<CardsSection
											data={dish}
											isFavorite={favorites.includes(
												dish.Id
											)}
											updateFavorite={updateFavorite}
										/>
									</SwiperSlide>
								);
							})}
					</Swiper>

					<p className="carousel">Bebidas</p>

					<Swiper
						className="mySwiper"
						navigation={true}
						modules={[Navigation, Autoplay]}
						slidesPerView={slidesPerView}
						spaceBetween={spaceBetween}
						grabCursor={true}
						autoplay={{
							delay: 3000000,
							disableOnInteraction: false,
						}}>
						{dishes
							.filter((dish) => {
								return dish.Category === "Bebidas";
							})
							.map((dish) => {
								return (
									<SwiperSlide key={dish.Id}>
										<CardsSection
											data={dish}
											isFavorite={favorites.includes(
												dish.Id
											)}
											updateFavorite={updateFavorite}
										/>
									</SwiperSlide>
								);
							})}
					</Swiper>
				</div>
			</Content>

			<Footer />
		</Container>
	);
}

export default Home;
