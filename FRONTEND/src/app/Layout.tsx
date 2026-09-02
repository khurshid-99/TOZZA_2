import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <nav className="flex gap-5 bg-[green] w-fit ">
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/product/detils"}>Product Detils</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
