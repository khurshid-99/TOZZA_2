import { Link, NavLink } from "react-router";
import {
  aboutHeader,
  aboutProduct1,
  aboutProduct2,
  brandIcon,
  search,
} from "../../../images";
import CommentCart from "../components/CommentCart";
import ReviewCart from "../components/ReviewCart";
import InstagramFeed from "../../../utils/InstagramFeed";
import Footer from "../../../utils/Footer";

const About = () => {
  return (
    <section className="w-full ">
      <header className="relative w-full xl:aspect-1920/506 ">
        <img
          src={aboutHeader}
          alt=""
          className="w-full object-cover object-center "
        />

        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="w-[1620px] h-full mx-auto flex flex-col justify-center gap-10  ">
            <h1 className="text-68 text-main font-n-eb ">
              About Us <span>.</span>
            </h1>
            <p className="text-28 text-[#2E2F30] font-n-l ">
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry.
            </p>
            <button className="w-63.5 aspect-254/76 rounded-[50px] bg-[#1B3181] text-28 text-white-text font-n-r  ">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <div className="px-0 3xl:px-pad-4xl flex items-center gap-3 py-5 bg-base ">
        <NavLink to={"/"} className="text-20 ">
          Home
        </NavLink>
        <span className=" text-20 font-n-sb">/</span>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-20 ${isActive ? "text-orange" : "text-main"}`
          }
        >
          About
        </NavLink>
      </div>
      <div className="w-full px-0 3xl:px-pad-4xl flex py-36.75 bg-light ">
        <div className=" w-1/2 aspect-810/662 pl-21.75 py-17.5 bg-base  ">
          <img
            src={brandIcon}
            alt=""
            className="w-10.25 aspect-41/29 object-cover object-center"
          />
          <h1 className="text-42 text-main font-n-b ">About Tazza Product</h1>

          <p className="w-130.5 text-24 text-secondary font-n-l pt-7  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
          <p className="w-130.5 text-24 text-secondary font-n-l pt-8 pb-10  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy ....
          </p>
          <button className="w-81 aspect-324/76 rounded-[50px] text-24 text-main font-n-r bg-yellow ">
            Explore More Product
          </button>
        </div>
        <div className=" w-1/2 aspect-810/662 ">
          <img
            src={aboutProduct1}
            alt=""
            className="w-full aspect-810/662 object-cover object-center "
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 aspect-956/738 ">
          <img
            src={aboutProduct2}
            alt=""
            className="w-full aspect-956/738 object-cover object-center "
          />
        </div>
        <div className="w-1/2 aspect-956/738 bg-white pl-42.5 pt-34.5 ">
          <img
            src={brandIcon}
            alt=""
            className="w-10.25 aspect-41/29 object-cover object-center"
          />
          <h1 className="text-42 text-main font-n-b ">Why Tazza?</h1>
          <ul className="flex flex-col gap-1 pt-7 pb-17 ">
            <li className="text-24 text-secondary font-n-l ">
              <span className="inline-block w-3 aspect-square mr-4 rounded-full bg-[#00B3F0] "></span>
              Lorem Ipsum is simply dummy text of the
            </li>
            <li className="text-24 text-secondary font-n-l ">
              <span className="inline-block w-3 aspect-square mr-4 rounded-full bg-[#00B3F0] "></span>
              Lorem Ipsum is simply dummy text of the
            </li>
            <li className="text-24 text-secondary font-n-l ">
              <span className="inline-block w-3 aspect-square mr-4 rounded-full bg-[#00B3F0] "></span>
              Lorem Ipsum is simply dummy text of the
            </li>
            <li className="text-24 text-secondary font-n-l ">
              <span className="inline-block w-3 aspect-square mr-4 rounded-full bg-[#00B3F0] "></span>
              Lorem Ipsum is simply dummy text of the
            </li>
            <li className="text-24 text-secondary font-n-l ">
              <span className="inline-block w-3 aspect-square mr-4 rounded-full bg-[#00B3F0] "></span>
              Lorem Ipsum is simply dummy text of the
            </li>
          </ul>
          <button className="w-81 aspect-324/76 rounded-[50px] text-24 text-main font-n-r bg-yellow ">
            Explore More Product
          </button>
        </div>
      </div>
      <div className="w-full flex ">
        <div className="w-1/2 aspect-960/1150 pl-pad-4xl pr-19.5 py-16 bg-light flex flex-col  ">
          <div>
            <h1 className="text-32 text-main pb-6 ">
              Customer questions & answers (7)
            </h1>
            <div className="flex items-center p-7 bg-white rounded-2xl ">
              <input
                type="text"
                placeholder="Have a questions? Search answer"
                className="w-full border-none outline-none text-18 placeholder:text-[#717171] text-main "
              />
              <img
                src={search}
                alt=""
                className="w-[20.4px] aspect-20.4/20.3 object-cover object-center "
              />
            </div>
          </div>

          <div className="w-183 flex flex-col gap-8 py-10  ">
            <CommentCart />
            <CommentCart />
            <CommentCart />
          </div>

          <Link
            to={""}
            className="text-18 text-main border-b-2 border-warning-bg w-fit ml-auto mt-auto "
          >
            See More questions (8)
          </Link>
        </div>
        {/*  */}

        <div className="w-1/2 aspect-960/1150 bg-base 3xl:pl-24 pr-pad-4xl py-16 flex flex-col  ">
          <div className="flex items-center justify-between w-178.5  ">
            <h1
              className="text-32 text-main
             "
            >
              Reviews <span className="text-brand-text ">(38)</span>
            </h1>
            <h5 className="text-18 text-main border-b-2 border-warning-bg  ">
              Wright your Meaage
            </h5>
          </div>
          <div className="pt-11.25 pb-12.5 ">
            ⭐⭐⭐⭐⭐
            <span className="text-16 text-main ">4.8 out of 5</span>
          </div>
          {/*  */}
          <div className="flex flex-col gap-14 ">
            <ReviewCart />
            <ReviewCart />
            <ReviewCart />
          </div>
          <Link
            to={""}
            className="text-18 text-main border-b-2 border-warning-bg w-fit ml-auto mt-auto "
          >
            See All reviews (37)
          </Link>
        </div>
      </div>
      <InstagramFeed />
      <Footer />
    </section>
  );
};

export default About;
