
import Sidebar from "../sidebar/Sidebar"
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Layout() {

    return (

        <>
            <Navbar/>

            <div className="main">

                <Sidebar />

                <div className="content">

                    <Outlet />

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Layout;