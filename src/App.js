import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navigation from "./components/nav/Navigation";

import { Route,Routes } from "react-router-dom";
import MainServices from "./components/services/MainServices";
import Partner from "./components/partner/Partner";
import AboutUs from "./components/aboutus/AboutUs";
import { ROUTES } from "./constants/routes/RoutesConstant";

function App() {
  return (
    <>
    <Navigation/>
    <div className="p-0 m-0">
      <Routes>
          <Route path={ROUTES.HOME} element={<Main />} />
          <Route path={ROUTES.SERVICES} element={<MainServices/>} />
          <Route path={ROUTES.PARTNER} element={<Partner/>} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUs/>} />
      </Routes>
    </div>
    <Footer/>
    </>
 
  );
}

export default App;
