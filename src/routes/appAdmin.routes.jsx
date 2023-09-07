// Imports Global
import {Routes, Route} from "react-router-dom"

// Import of Pages
import Home from "../Pages/AdminUser/Home"
import DishInformation from "../Pages/AdminUser/DishInformation"
import EditDish from "../Pages/AdminUser/EditDish"
import NewDish from "../Pages/AdminUser/NewDish"

function AppAdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DishInformation/:Id" element={<DishInformation />} />
            <Route path="/EditDish/:Id" element={<EditDish />} />
            <Route path="/NewDish" element={<NewDish />} />
        </Routes>
    )
}

export default AppAdminRoutes;