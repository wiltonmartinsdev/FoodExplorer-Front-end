// Imports Global
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastContainer
			position="top-center"
			style={{ zIndex: 10000 }}
		/>
		<AuthProvider>
			<Routes />
		</AuthProvider>
	</React.StrictMode>
);
