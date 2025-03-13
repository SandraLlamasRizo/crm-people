import { Outlet } from "react-router";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {

    return <>
        <Header />
        <NavBar />
        <Outlet />
        <Footer/>
    </>
}

export default MainLayout;

