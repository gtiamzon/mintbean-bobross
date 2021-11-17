import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/main";
import LandingPage from "../components/Landing Page/landingpage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/thecanvas" element={<Main />} />
        </Routes>
    );
};


export default AppRoutes;