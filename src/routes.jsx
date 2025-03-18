import { Navigate, Route, Routes } from "react-router";
import App from "./App";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import DetailEmployee from "./pages/DetailEmployee";
import NewEmployee from "./pages/NewEmployee";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Dasboard from "./pages/Dashboard";
import DetailDepartments from "./pages/DetailDepartments";
import PasswordReset from "./pages/PasswordReset";
import Contacto from "./pages/Contacto";
import EditEmployee from "./pages/EditEmployee";
import NotAccess from "./pages/NotAccess";
import MainLayout from "./components/MainLayout";

function PrivateRoute({ element }) {
    //añadimos las comprobaciones para auth (por ejemplo con localstorage)
    const token = localStorage.getItem('token');

    console.log("routes", token)

    if (token) {
        return element;
    } else {
        return <Navigate to="/notaccess" />;
    }
}

function MainRoutes() {
    return (
        <Routes>
            <Route path="" element={<App />}>
                <Route index element={<LandingPage />} />
                <Route path="register" element={<RegisterUser />} />
                <Route path="login" element={<LoginUser />} />
                <Route path="resetpassword" element={<PasswordReset />} />
                <Route path="notaccess" element={<NotAccess />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="dashboard" element={<PrivateRoute element={<MainLayout />} />}>
                <Route index element={<Dasboard />} />
                <Route path="employees" element={<Employees />} />
                <Route path="employees/:employeeId" element={<DetailEmployee />} />
                {/* <Route path="edit" element={<EditEmployee />} /> */}
                <Route path="edit/:employeeId" element={<EditEmployee />} />
                <Route path="newEmployee" element={<NewEmployee />} />
                <Route path="departments" element={<Departments />} />
                <Route path="departments/:departamento" element={<DetailDepartments />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;