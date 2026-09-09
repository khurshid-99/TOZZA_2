import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <nav className="flex gap-5 bg-[green] w-fit flex-wrap ">
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/product/detils"}>Product Detils</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/sing-up"}>Sign up</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
