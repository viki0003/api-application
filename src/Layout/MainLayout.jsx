import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="main-app">
                <Outlet />
            </div>
            <Footer />
        </>

    );
}

export default MainLayout