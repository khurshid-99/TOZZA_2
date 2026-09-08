import { NavLink } from "react-router";
import {
  colorLogo,
  contactHero,
  facebookIcon,
  googleIcon,
  loginImg,
} from "../../../images";

const Login = () => {
  return (
    <section className="w-full  flex  ">
      <aside className="min-w-163.5 h-screen relative ">
        <img
          src={loginImg}
          alt=""
          className="w-full h-full object-center object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-[#000000bd] to-[#0000005e] px-19 pb-[130px] flex flex-col justify-end ">
          <h2 className="text-30 text-white-text font-n-b ">Ready to Cook</h2>
          <h1 className="text-52 text-white-text font-n-eb">
            Cooking made <span className="text-[#FFE849] ">Easy</span>
          </h1>
          <p className="text-[36px] text-[#E1E1E1] font-n-l ">
            Daily essentials, delivered to your doorstep.
          </p>
        </div>
      </aside>
      <aside className="w-full h-full  px-19 pt-16.75 ">
        <div>
          <img
            src={colorLogo}
            alt=""
            className="w-[177.5px]  aspect-177.5/40.7 object-cover object-center "
          />
          <div className="w-full h-full pt-10 pl-82.75 ">
            <div className="flex gap-2">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#00AEEF]" : "text-main"} text-30`
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/sign-up"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#00AEEF]" : "text-main"} text-30`
                }
              >
                Sign up
              </NavLink>
            </div>

            <form action="" className="pt-15 ">
              <div>
                <label
                  htmlFor="email-user"
                  className="text-20 text-[#616161] block "
                >
                  Username or email address
                </label>
                <input
                  type="text"
                  id="email-user"
                  className="w-165.5 aspect-662/79 rounded-[10px] bg-[#F9F9F9]  border border-[#D9D9D9] outline-none px-4 text-24 "
                />
              </div>
              <div className=" py-7 ">
                <label
                  htmlFor="password"
                  className="text-20 text-[#616161] block "
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="w-165.5 aspect-662/79 rounded-[10px] bg-[#F9F9F9]  border border-[#D9D9D9] outline-none px-4 text-24 "
                />
              </div>
              <div className="flex items-center gap-2 pb-7 ">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-6 aspect-square bg-[#F9F9F9] border border-[#D9D9D9] "
                />
                <label
                  htmlFor="remember-me"
                  className="text-20 text-[#616161]  "
                >
                  Remember me
                </label>
              </div>
              <button className="w-63.5 aspect-254/76 bg-[#00ADEF] rounded-[50px] text-24 text-white-text  ">
                Login
              </button>
              <button className="text-20 text-[#4BC6F4] block pt-7 ">
                Forgot password?
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-5 ">
          <h2 className="text-30 text-[#616161] ">More Option</h2>
          <div className="flex gap-7.5 ">
            <img
              src={facebookIcon}
              alt=""
              className="w-15.25 aspect-square  "
            />
            <img src={googleIcon} alt="" className="w-15.25 aspect-square  " />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Login;
