import { Container, Content } from "./styles";
import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";

import NavBar from "../../../components/NavBarAdmin";
import CardsSection from "../../../components/AdminCards";
import Footer from "../../../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import ImgDescription from "../../../assets/imgDescription.svg";
import ImgDescriptionLg from "../../../assets/imgDescriptionLg.svg";

function Home() {
	const [slidesPerView, setSlidesPerView] = useState(4);

	const [spaceBetween, setSpaceBetween] = useState(-100);

	const [dishes, setDishes] = useState([]);

	const [search, setSearch] = useState("");

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
			if (window.innerWidth <= 600) {
				setSlidesPerView(2);
				setSpaceBetween(10);
			} else if (window.innerWidth >= 601 && window.innerWidth <= 899) {
				setSlidesPerView(3);
				setSpaceBetween(10);
			} else if (window.innerWidth >= 900) {
				setSlidesPerView(4);
				setSpaceBetween(10);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<NavBar
				onChange={(e) => {
					return setSearch(e.target.value);
				}}
			/>

			<Container>
				<Content>
					<div id="descriptionOfFlavors">
						<img
							id="imgDescription"
							src={ImgDescription}
							alt="Imagens de sanduíches coloridos e alguma frutas ao redor."
						/>

						<img
							id="imgDescriptionLg"
							src={ImgDescriptionLg}
							alt="Imagens de sanduíches coloridos e alguma frutas ao redor."
						/>

						<div id="wrapperDescription">
							<h1>Sabores inigualáveis</h1>

							<p>
								Sinta o cuidado do preparo com ingredientes
								selecionados.
							</p>
						</div>
					</div>

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
								delay: 3000,
								disableOnInteraction: false,
							}}>
							{dishes
								.filter((dish) => {
									return dish.Category === "Refeições";
								})
								.map((dish) => {
									return (
										<SwiperSlide key={String(dish.Id)}>
											<CardsSection data={dish} />
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
								delay: 3000,
								disableOnInteraction: false,
							}}>
							{dishes
								.filter((dish) => {
									return dish.Category === "Sobremesas";
								})
								.map((dish) => {
									return (
										<SwiperSlide key={String(dish.Id)}>
											<CardsSection data={dish} />
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
								delay: 3000,
								disableOnInteraction: false,
							}}>
							{dishes
								.filter((dish) => {
									return dish.Category === "Bebidas";
								})
								.map((dish) => {
									return (
										<SwiperSlide key={String(dish.Id)}>
											<CardsSection data={dish} />
										</SwiperSlide>
									);
								})}
						</Swiper>
					</div>
				</Content>
			</Container>

			<Footer />
		</>
	);
}

export default Home;
