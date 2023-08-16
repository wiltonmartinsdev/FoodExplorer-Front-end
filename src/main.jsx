// Imports Global
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import "animate.css";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	</React.StrictMode>
);
