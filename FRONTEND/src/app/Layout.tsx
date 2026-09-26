import { Outlet, useLocation } from "react-router";
import NavBar from "../utils/NavBar";
import CategoryNav from "../utils/CategoryNav";
import Footer from "../utils/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      {location.pathname !== "/" && <CategoryNav />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
