// Imports Global
import { Routes, Route } from "react-router-dom";

// Import of Pages
import Home from "../Pages/CommonUser/Home";
import DishInformation from "../Pages/CommonUser/DishInformation";
import Payments from "../Pages/CommonUser/Payments";

function AppUserRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/DishInformation/:Id"
				element={<DishInformation />}
			/>
			{/* <Route
				path="/Payments"
				element={<Payments />}
			/> */}
		</Routes>
	);
}

export default AppUserRoutes;
