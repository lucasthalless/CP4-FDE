
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function PageWrapper() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}