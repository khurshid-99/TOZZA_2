import { Link } from "react-router";
import { downArrow, menuBar, rightArrow } from "../images";
import { useEffect, useState } from "react";

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative px-2 lg:px-0 3xl:px-pad-4xl flex items-center justify-between py-5.5 bg-[#F9F9F9] border-t border-border-light ">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 "
      >
        <img
          src={menuBar}
          alt=""
          className="w-4.5 aspect-18/12 object-center object-cover "
        />
        <p className="text-16 text-[#202020] ">Shop by Category</p>
      </button>
      {/*  */}
      <aside
        className={`fixed inset-0 z-9999 transition-all duration-400 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div onClick={onClose} className="absolute inset-0 bg-[#000000d7]" />

        <div
          className={`absolute left-0 top-0 h-screen w-full xl:w-[20rem] bg-white text-26 text-main scroll-none
        transition-transform duration-400 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="relative flex h-full w-full flex-col items-start p-4 pb-10">
            <div className="absolute right-5 top-4">
              <button onClick={onClose} className="text-40 leading-none">
                X
              </button>
            </div>

            <Link
              to=""
              onClick={onClose}
              className="group relative w-full py-3"
            >
              Today's Specials
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative flex w-full items-center gap-1 py-3"
            >
              Chicken
              <img
                src={downArrow}
                alt=""
                className="w-[10.2px] aspect-10.2/6.1 object-cover object-center"
              />
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative flex w-full items-center gap-1 py-3"
            >
              Fish
              <img
                src={downArrow}
                alt=""
                className="w-[10.2px] aspect-10.2/6.1 object-cover object-center"
              />
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative w-full py-3"
            >
              Mutton
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative flex w-full items-center gap-1 py-3"
            >
              Ready to Cook
              <img
                src={downArrow}
                alt=""
                className="w-[10.2px] aspect-10.2/6.1 object-cover object-center"
              />
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative flex w-full items-center gap-1 py-3"
            >
              Eggs
              <img
                src={downArrow}
                alt=""
                className="w-[10.2px] aspect-10.2/6.1 object-cover object-center"
              />
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative w-full py-3"
            >
              Breakfast specials
            </Link>

            <Link
              to=""
              onClick={onClose}
              className="group relative flex w-full items-center gap-1 py-3"
            >
              Fruits & Vegetables
              <img
                src={downArrow}
                alt=""
                className="w-[10.2px] aspect-10.2/6.1 object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </aside>
      {/*  */}
      <div className="hidden  text-16 text-main xl:flex items-center gap-pad-2xl-plus ">
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
