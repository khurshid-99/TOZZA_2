import { Link } from "react-router";
import {
  Todays,
  Chicken,
  Fish,
  Mutton,
  Eggs,
  Fruirs,
  Vegetables,
  Special_Product,
} from "../../../images";

const NavHeader = () => {
  return (
    <nav className="2xl:px-pad-4xl py-7.5 flex items-center justify-between bg-light ">
      <Link to={""} className="flex flex-col items-center gap-y-1 ">
        <img
          src={Todays}
          alt=""
          className="w-[93.5px] aspect-93.5/83.3 object-cover object-center "
        />
        <span className="text-20 text-main ">Today’s Deals</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Chicken}
          alt=""
          className="w-[93.5px] aspect-93.5/80.1 object-cover object-center "
        />
        <span className="text-20 text-main ">Chicken</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Fish}
          alt=""
          className="w-[93.5px] aspect-93.5/78.2 object-cover object-center "
        />
        <span className="text-20 text-main ">Fish</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Mutton}
          alt=""
          className="w-[93.5px] aspect-93.5/77.1 object-cover object-center "
        />
        <span className="text-20 text-main ">Mutton</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Eggs}
          alt=""
          className="w-[93.5px] aspect-93.5/75.7 object-cover object-center "
        />
        <span className="text-20 text-main ">Eggs</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Fruirs}
          alt=""
          className="w-[93.5px] aspect-93.5/79.5 object-cover object-center "
        />
        <span className="text-20 text-main ">Fruirs</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Vegetables}
          alt=""
          className="w-[93.5px] aspect-93.5/81.1 object-cover object-center "
        />
        <span className="text-20 text-main ">Vegetables</span>
      </Link>
      <Link to={""} className="flex flex-col items-center gap-y-1  ">
        <img
          src={Special_Product}
          alt=""
          className="w-[93.5px] aspect-93.5/80.1 object-cover object-center "
        />
        <span className="text-20 text-main ">Special Product</span>
      </Link>
      <Link
        to={""}
        className="w-[94.5px] aspect-square rounded-full bg-primary-dark flex items-center justify-center text-white-text text-20 font-n-sb  "
      >
        More
      </Link>
    </nav>
  );
};

export default NavHeader;
