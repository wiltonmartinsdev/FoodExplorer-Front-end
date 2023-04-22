import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Pages/CommonUser/Menu";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Menu />
		</ThemeProvider>
	</React.StrictMode>
);
