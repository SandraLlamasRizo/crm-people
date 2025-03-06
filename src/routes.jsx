import { Route, Routes } from "react-router";
import App from "./App";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import OldEmployees from "./pages/OldEmployees";
import DetailEmployee from "./pages/DetailEmployee";
import NewEmployee from "./pages/NewEmployee";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/oldEmployees" element={<OldEmployees />} />
            <Route path="/employees/:employeeId" element={<DetailEmployee />} />
            <Route path="/newEmployee" element={<NewEmployee />} />
            <Route path="*" element={<NotFound/> } />
        </Routes>
    )
}

export default MainRoutes;