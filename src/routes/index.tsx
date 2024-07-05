// Imports Global
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

// Route Imports
import AuthRoutes from "./auth.routes";
import AppUserRoutes from "./appUser.routes";
import AppAdminRoutes from "./appAdmin.routes";

function Routes() {
	const { registeredUser } = useAuth();

	return (
		<BrowserRouter>
			{registeredUser ? (
				registeredUser.AdminUser ? (
					<AppAdminRoutes />
				) : (
					<AppUserRoutes />
				)
			) : (
				<AuthRoutes />
			)}
		</BrowserRouter>
	);
}

export default Routes;
