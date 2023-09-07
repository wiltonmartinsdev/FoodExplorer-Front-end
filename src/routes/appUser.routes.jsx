// Imports Global
import {Routes, Route} from "react-router-dom"

// Import of Pages
import Home from "../Pages/CommonUser/Home"
import DishInformation from "../Pages/CommonUser/DishInformation"

function AppUserRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DishInformation/:Id" element={<DishInformation />} />
 
        </Routes>
    )
}

export default AppUserRoutes;