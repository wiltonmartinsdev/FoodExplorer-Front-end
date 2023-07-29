import React from "react";
import ReactDOM from "react-dom/client";
import NewDish from "./Pages/AdminUser/NewDish";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<NewDish />
		</ThemeProvider>
	</React.StrictMode>
);
