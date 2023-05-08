import React from "react";
import ReactDOM from "react-dom/client";
import Dish from "./Pages/CommonUser/DishInformation";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Dish />
		</ThemeProvider>
	</React.StrictMode>
);
