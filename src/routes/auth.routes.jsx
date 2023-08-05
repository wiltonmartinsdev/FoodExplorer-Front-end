// Imports Global
import {Routes, Route} from "react-router-dom"

// Import of Pages
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"

function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
 
        </Routes>
    )
}

export default AuthRoutes;