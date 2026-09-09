import { Link } from "react-router";
import { downArrow, menuBar, rightArrow } from "../images";

const CategoryNav = () => {
  return (
    <nav className="3xl:px-pad-4xl flex items-center justify-between py-5.5 bg-[#F9F9F9] border-t border-border-light ">
      <div className="flex items-center gap-2 ">
        <img
          src={menuBar}
          alt=""
          className="w-4.5 aspect-18/12 object-center object-cover "
        />
        <p className="text-16 text-[#202020] ">Shop by Category</p>
      </div>
      <div className="text-16 text-main flex items-center gap-pad-2xl-plus ">
        <Link to={""}>Today's Specials</Link>
        <Link to={""} className="flex items-center gap-1">
          Chicken{" "}
          <img
            src={downArrow}
            alt=""
            className="w-[10.2px] aspect-10.2/6.1 object-center object-cover "
          />
        </Link>
        <Link to={""} className="flex items-center gap-1">
          Fish{" "}
          <img
            src={downArrow}
            alt=""
            className="w-[10.2px] aspect-10.2/6.1 object-center object-cover "
          />
        </Link>
        <Link to={""}>Mutton</Link>
        <Link to={""} className="flex items-center gap-1">
          Ready to Cook{" "}
          <img
            src={downArrow}
            alt=""
            className="w-[10.2px] aspect-10.2/6.1 object-center object-cover "
          />
        </Link>
        <Link to={""} className="flex items-center gap-1">
          Eggs
          <img
            src={downArrow}
            alt=""
            className="w-[10.2px] aspect-10.2/6.1 object-center object-cover "
          />
        </Link>
        <Link to={""}>Breakfast specials</Link>
        <Link to={""} className="flex items-center gap-1">
          Fruits & Vegetables{" "}
          <img
            src={downArrow}
            alt=""
            className="w-[10.2px] aspect-10.2/6.1 object-center object-cover "
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 ">
        <button className="text-16 text-[#1B3281] ">More Product</button>
        <img
          src={rightArrow}
          alt=""
          className="w-[6.1px] aspect-6.1/10.2 object-center object-cover "
        />
      </div>
    </nav>
  );
};

export default CategoryNav;
