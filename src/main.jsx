// Imports Global
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ToastContainer
				position="top-center"
				style={{ zIndex: 10000 }}
			/>
			<GlobalStyles />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
