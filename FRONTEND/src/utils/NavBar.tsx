import { Link } from "react-router";
import {
  cart,
  colorLogo,
  downArrow,
  location,
  loginIcon,
  navSearch,
  wish,
} from "../images";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-center gap-2 py-3.25 bg-yellow">
        <p className="text-14 md:text-20 text-main ">
          Order today and get free Shipping on your First Delivery
        </p>
        <button className="px-4 md:px-6.5 py-2.5 text-14 md:text-16 text-nowrap bg-white rounded-[50px] text-main ">
          Order Now
        </button>
      </nav>
      <nav className="3xl:px-pad-4xl py-5 flex items-center justify-between bg-white ">
        <img
          src={colorLogo}
          alt=""
          className="w-20 xl:w-48.25 aspect-193/71.4 object-center object-contain "
        />
        <div className="flex items-center gap-9.5">
          <div className="hidden xl:flex items-center gap-2.75 ">
            <img
              src={location}
              alt=""
              className="w-[27.3px] aspect-27.3/31.7 object-center object-cover "
            />
            <p className="text-14 text-neutral ">
              Kolkata <br />
              <span className="text-16 text-main flex items-center gap-2.75 ">
                Chinar Park, Haldir...{" "}
                <img
                  src={downArrow}
                  alt=""
                  className="w-3.25 aspect-13/8 object-center object-cover  "
                />
              </span>
            </p>
          </div>

          <div className="w-60 md:w-120 xl:w-128.5 border border-[#E8E8E8] rounded-[50px] flex items-center gap-1 p-2.5 pl-pad-2xl-plus ">
            <input
              type="text"
              name=""
              id="search-nav"
              placeholder="Search for any tazza product"
              className="w-full h-full text-20 text-main outline-none border-none placeholder:text-[#2B2B2B] placeholder:text-14 md:placeholder:text-20 "
            />
            <label
              htmlFor="search-nav"
              className="w-11.75 aspect-square bg-[#00ADEF] flex items-center justify-center rounded-full cursor-pointer  "
            >
              <img
                src={navSearch}
                alt=""
                className="w-[20.4px] aspect-square object-center object-cover "
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 2xl:gap-14 ">
          <Link to={""} className="hidden xl:flex items-center gap-3 ">
            <img
              src={wish}
              alt=""
              className="w-5 aspect-20/19 object-center object-cover "
            />
            <span className="text-18 text-main ">Wish List</span>
          </Link>
          <Link to={""} className="hidden xl:flex items-center gap-3 ">
            <img
              src={cart}
              alt=""
              className="w-[19.9px] aspect-19.9/20.3 object-cover object-center "
            />
            <span className="text-18 text-main ">cart</span>
          </Link>
          <Link to={""} className="flex items-center gap-3  ">
            <div className="w-12.5 aspect-square rounded-full bg-white border border-[#CECECE] flex items-center justify-center ">
              <img
                src={loginIcon}
                alt=""
                className="w-[21.2px] aspect-square object-center object-cover "
              />
            </div>
            <span className="hidden xl:inline-block text-18 text-main ">
              Login
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
