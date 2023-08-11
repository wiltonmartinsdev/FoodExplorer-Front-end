// Imports Global
import { BrowserRouter } from "react-router-dom";

// Route Imports
import AuthRoutes from "./auth.routes";
import AppUserRoutes from "./appUser.routes";
import AppAdminRoutes from "./appAdmin.routes";

function Routes() {
	return (
		<BrowserRouter>
			<AuthRoutes />
			{/* <AppAdminRoutes /> */}
			{/* <AppUserRoutes /> */}
		</BrowserRouter>
	);
}

export default Routes;
