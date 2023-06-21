import React from "react";
import ReactDOM from "react-dom/client";
import EditDish from "./Pages/AdminUser/EditDish";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<EditDish />
		</ThemeProvider>
	</React.StrictMode>
);
