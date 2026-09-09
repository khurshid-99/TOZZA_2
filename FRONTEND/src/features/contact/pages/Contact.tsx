import { NavLink } from "react-router";
import { aboutProduct1, brandIcon, contactHero } from "../../../images";
import InstagramFeed from "../../../utils/InstagramFeed";
import Footer from "../../../utils/Footer";

const Contact = () => {
  return (
    <section>
      <header className="relative w-full aspect-400/220 md:aspect-768/300 xl:aspect-1920/506 ">
        <img
          src={contactHero}
          alt=""
          className="w-full aspect-400/220 md:aspect-768/300 object-cover object-center "
        />

        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="w-[1620px] h-full mx-auto flex flex-col justify-center gap-4 xl:gap-10  ">
            <h1 className="text-30 lg:text-48 2xl:text-68 text-main font-n-eb ">
              Contact with Us.
            </h1>
            <p className="text-18 lg:text-28 text-[#2E2F30] font-n-l ">
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry.
            </p>
            <button className="w-fit rounded-[50px] bg-[#1B3181] text-18 xl:text-28 text-white-text font-n-r px-8 py-3 lg:px-12 lg:py-5 xl:px-14.25 xl:py-4.25 ">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <div className="px-0 3xl:px-pad-4xl flex items-center gap-3 py-4 md:py-5 bg-base ">
        <NavLink to={"/"} className="text-20 ">
          Home
        </NavLink>
        <span className=" text-20 font-n-sb">/</span>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-20 ${isActive ? "text-orange" : "text-main"}`
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="3xl:w-[1620px] 3xl:mx-auto pt-14.25 pb-36.75 ">
        <div className="flex flex-col items-center pb-23  ">
          <img
            src={brandIcon}
            alt=""
            className="w-10.25 aspect-41/29 object-cover object-center "
          />
          <h1 className="text-30 lg:text-42 text-main font-n-b ">
            Contact With Us
          </h1>
          <p className="lg:w-216 text-20 md:text-24 text-secondary text-center pt-10 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>
        <div className="w-full 2xl:w-361.75 mx-auto flex flex-wrap lg:flex-nowrap lg:flex-row  px-4 py-4 lg:p-0 shadow-[0_0_100px_rgba(0,0,0,0.10)]  gap-2 lg:gap-0 rounded-[20px] overflow-hidden   ">
          <div className="w-full lg:w-1/2 xl:w-230.5 lg:aspect-922/712 bg-white  md:p-4 xl:p-10 2xl:pl-17 2xl:pr-13  2xl:py-pad-65 3xl:pl-pad-65 3xl:pr-14.25 rounded-t-[15px] lg:rounded-none ">
            <h1 className="text-30 text-main font-n-sb ">Drop Your Message</h1>
            <form action="" className="flex flex-col pt-pad-2xl-plus gap-6.25 ">
              <div className="flex justify-between flex-wrap  gap-4.5 3xl:gap-0 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  className="w-full  2xl:w-98 text-18 text-main outline-none border border-[#E5E5E5] rounded-[50px] px-11 py-4.5 bg-[#F5F5F5] "
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  className="w-full 2xl:w-98 text-18 text-main outline-none border border-[#E5E5E5] rounded-[50px] px-11 py-4.5 bg-[#F5F5F5] "
                />
              </div>
              <div className="flex justify-between flex-wrap  gap-4.5  3xl:gap-0 ">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email ID"
                  className="w-full 2xl:w-98 text-18 text-main outline-none border border-[#E5E5E5] rounded-[50px] px-11 py-4.5 bg-[#F5F5F5] "
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone Number"
                  className="w-full 2xl:w-98 text-18 text-main outline-none border border-[#E5E5E5] rounded-[50px] px-11 py-4.5 bg-[#F5F5F5] "
                />
              </div>
              <textarea
                name=""
                id=""
                maxLength={100}
                placeholder="Message"
                className="w-full 2xl:w-200.25 aspect-400/250 xl:aspect-801/187 2xl:aspect-801/178 outline-none border border-[#E5E5E5] rounded-4xl px-11 py-6 bg-[#F5F5F5] text-18 text-main resize-none "
              />
              <button className="w-full xl:w-fit rounded-[50px] text-18 xl:text-28 text-white-text font-n-r px-12.5 py-3 lg:px-12 lg:py-5 xl:px-21 xl:py-4.25 2xl:mt-10.5 bg-warning-bg">
                Submit
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 xl:w-131.25 lg:aspect-525/712 bg-primary-dark py-10 md:py-pad-65 px-4 md:px-19.75 rounded-b-[15px] lg:rounded-none ">
            <h1 className="text-42 text-white-text font-n-sb ">Reach Us</h1>
            <h4 className="text-20 text-[#FFE849] font-medium pt-10 pb-1.25 ">
              Address
            </h4>
            <p className="text-20 text-[#95A1CC]  ">
              Degana Chitta basu market 99, <br /> North 24 Parganas, 743 423.
            </p>
            <h4 className="text-20 text-[#FFE849] font-medium pt-7 pb-1.25 ">
              Phone Number:
            </h4>
            <p className="text-20 text-[#95A1CC]  ">9735 504 154</p>
            <h4 className="text-20 text-[#FFE849] font-medium pt-9 pb-1.25">
              Email Us
            </h4>
            <p className="text-20 text-[#95A1CC]  ">arifinindian@gmail.com</p>
            <h4 className="text-20 text-[#FFE849] font-medium pt-pad-2xl-plus pb-1.25  ">
              FAX
            </h4>
            <p className="text-20 text-[#95A1CC]  ">403-5685-6575</p>

            <div className="flex items-center gap-2 pt-[50px] ">
              <h4 className="text-18 text-[#FFE849] ">Follow Us :</h4>

              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full border border-[#6478C0]"
              >
                <rect
                  x="2"
                  y="2"
                  width="35"
                  height="35"
                  rx="8"
                  // fill="#000000"
                />

                <path
                  d="M29.486 13.115C28.845 13.494 28.135 13.77 27.38 13.92C26.775 13.273 25.914 12.872 24.961 12.872C23.129 12.872 21.645 14.358 21.645 16.188C21.645 16.446 21.674 16.7 21.731 16.943C18.975 16.804 16.533 15.485 14.897 13.479C14.612 13.967 14.449 14.536 14.449 15.144C14.449 16.295 15.035 17.311 15.923 17.905C15.38 17.886 14.869 17.736 14.422 17.486V17.53C14.422 19.136 15.565 20.474 17.081 20.78C16.803 20.856 16.51 20.897 16.208 20.897C15.994 20.897 15.786 20.875 15.583 20.836C16.005 22.156 17.229 23.112 18.68 23.139C17.546 24.029 16.115 24.558 14.563 24.558C14.295 24.558 14.031 24.543 13.771 24.513C15.239 25.454 16.981 26.002 18.854 26.002C24.952 26.002 28.286 20.95 28.286 16.569L28.275 16.14C28.925 15.675 29.488 15.091 29.932 14.426C29.337 14.689 28.699 14.866 28.029 14.948C28.713 14.537 29.238 13.886 29.486 13.115Z"
                  fill="white"
                />
              </svg>

              {/*  */}

              <svg
                width="39"
                height="39"
                viewBox="0 -6 10 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full border border-[#6478C0]"
              >
                <path
                  d="M9.702 0.002L7.284 0C4.567 0 3.22 1.116 3.22 3.899V6.488H0.38C0.17 6.488 0 6.657 0 6.867V9.452C0 9.66 0.171 9.831 0.38 9.831H3.22V17.551C3.22 17.763 3.39 17.931 3.6 17.931H6.092C6.302 17.931 6.472 17.763 6.472 17.551V9.831H9.587C9.797 9.831 9.967 9.66 9.967 9.452L9.968 6.867C9.968 6.767 9.928 6.67 9.857 6.598C9.786 6.527 9.689 6.488 9.588 6.488H6.472V4.222C6.472 3.36 6.95 3.263 8.073 3.263H9.702C9.912 3.263 10.082 3.094 10.082 2.885V0.383C10.082 0.174 9.912 0.002 9.702 0.002Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>

              {/*  */}

              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // className="rounded-full border border-[#6478C0]"
              >
                {/* Background */}
                <image
                  x="2"
                  y="2"
                  width="35"
                  height="35"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC0UlEQVRYhc3YzWtcVRjH8c9cEFeFQOuiI+JSKqiEiMWFePaCTNutWdRMS7UbFwqDaGsx4Nm0UOlLSo8vRZciyT8g040La6sUFF24MxO0cSO4sYIuzpnkatN0pknm+oOB4Z6Z53zveXnO8zstY6jb67cwjRcxg71oYzd+w6B8rmMRN1MMf48avzUixBRexyxWsYQbpePlArIbDxe4GXQwhSs4k2L4fUsw3V7/QRzHm7iEiymGn0d5gfL/R3EMc5jHQorhz7Fhur3+I/JQX8X5FMNPo0JsEOsxvIr9OJhiGIwM0+31n8XneD/F8N79QmwQ9y15pA6kGK7dE6aAfIEjKYZPtwukFv8wzuH5FMPXd4UpU/MV3tgJkFo/L+MUnkkxrNwBUxbrl/hsO6dmE6C38QKeSzHchqrWfhxXJwECKYZ35Xx0ZPisKpRT8vY9PwmQmi7gRLfX37UGIye0S1vZvvejFMN3+BivQVVS/CwuThKkpsuY7fb6rUo+a1bHyazbqTIbt7Gvkg+9pSZAalpEp5IPtRsNw3yD6UouAzY8KyaoAfZW8pG/3DDMMtqV9cKoSa1iTzX80jDMQ7hVYUWeqibVxkolL57/A8ygkg+rmYZhZnC9UhJOwzAdLFa4ialSPE9cpT6WYvixKr7milybNqE5fMJ6CXEGc0PKSanb6z+Jl3B2DaYYhHnZTkxSr+BUiuGPNZiiBewvdmLH1e31T+IJfDB8tgZTnN5BHCt2YidBjuIwDqUY/roDpgANcADnip3YKZDT6KQYfqm33c1RPi3nn4UUw/w2gpyUR6STYvj2v+2bee22bHGvyYb/+y1APCVvjsflqfl1o9/d6xbiARzFCXyEy+M4iJIq5uTt+w4+rK+RsWBqQXfJdmJWLp4X5VJxeD+zKpcBbf++nyEntLPD7buZRoKpQbWwr3Q0bf3mag9uyeXI8OZqKcXwwzjx/wFJHO64r2C6pwAAAABJRU5ErkJggg=="
                />

                {/* Google+ icon */}
                <path
                  d="M24.096 9.887C24.14 9.887 24.178 9.915 24.19 9.959C24.202 10.001 24.185 10.047 24.148 10.07L22.845 10.891C22.829 10.902 22.811 10.908 22.793 10.908H21.279C21.852 11.382 23.044 12.372 23.044 14.283C23.044 16.187 21.931 17.065 20.949 17.842L20.917 17.874C20.608 18.182 20.258 18.531 20.258 19.06C20.258 19.599 20.608 19.89 20.889 20.124L21.798 20.833C22.876 21.745 23.892 22.601 23.891 24.337C23.891 26.687 21.643 29.066 17.347 29.066C13.652 29.066 11.998 27.268 11.998 25.488C11.998 25.041 12.136 23.499 13.915 22.438C15.42 21.509 17.482 21.367 18.589 21.29L18.666 21.285L18.623 21.229C18.278 20.785 17.92 20.328 17.92 19.587C17.92 19.204 18.022 18.959 18.13 18.701L18.168 18.61C17.915 18.632 17.63 18.661 17.372 18.661C14.69 18.661 13.243 16.636 13.243 14.732C13.243 13.496 13.837 12.245 14.833 11.383C16.098 10.334 17.505 9.887 19.537 9.887H24.096ZM18.567 28.017C20.823 28.017 22.225 26.983 22.225 25.314C22.225 24.008 21.344 23.32 19.512 22.012C19.313 21.987 19.189 21.987 18.94 21.987C18.926 21.987 17.461 22.004 16.325 22.389C14.908 22.904 14.189 23.771 14.189 24.964C14.189 26.789 15.948 28.017 18.567 28.017ZM18.542 17.958C19.136 17.958 19.816 17.679 20.234 17.261C20.855 16.633 20.855 15.731 20.855 15.434C20.855 13.552 19.739 10.831 17.721 10.831C17.062 10.831 16.378 11.156 15.979 11.658C15.611 12.115 15.432 12.72 15.432 13.509C15.432 15.062 16.344 17.958 18.542 17.958ZM30.485 18.844C30.54 18.844 30.584 18.888 30.584 18.943V19.993C30.584 20.049 30.54 20.092 30.485 20.092H28.083V22.508C28.083 22.564 28.039 22.609 27.984 22.609H26.951C26.896 22.609 26.852 22.564 26.852 22.508V20.092H24.462C24.407 20.092 24.363 20.049 24.363 19.993V18.943C24.363 18.888 24.407 18.844 24.462 18.844H26.852V16.442C26.852 16.388 26.896 16.343 26.951 16.343H27.984C28.039 16.343 28.083 16.388 28.083 16.442V18.844H30.485Z"
                  fill="white"
                />
              </svg>
              {/*  */}
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full border border-[#6478C0]"
              >
                {/* Background */}
                <rect
                  x="2"
                  y="2"
                  width="35"
                  height="35"
                  rx="8"
                  // fill="currentColor"
                />

                {/* Instagram Logo */}
                <path
                  d="M20.183 27.908C20.123 27.908 20.064 27.908 20.004 27.908C18.592 27.911 17.287 27.878 16.019 27.801C14.856 27.731 13.794 27.328 12.948 26.639C12.132 25.973 11.575 25.043 11.292 23.933C11.046 22.969 11.033 22.021 11.02 21.104C11.011 20.447 11.002 19.668 11 18.875C11.002 18.08 11.011 17.301 11.02 16.643C11.033 15.727 11.046 14.779 11.292 13.814C11.575 12.705 12.132 11.806 12.948 11.14C13.794 10.451 14.856 10.049 16.019 9.978C17.288 9.9 18.592 9.865 20.007 9.868C21.419 9.865 22.724 9.9 23.992 9.978C25.155 10.049 26.217 10.451 27.063 11.14C27.879 11.806 28.436 12.705 28.719 13.814C28.965 14.779 29.01 15.727 29.022 16.643C29.031 17.301 29.041 18.08 29.042 18.872V18.875C29.041 19.668 29.031 20.447 29.022 21.104C29.01 22.021 28.965 22.968 28.719 23.933C28.436 25.043 27.879 25.973 27.063 26.639C26.217 27.328 25.155 27.731 23.992 27.801C22.777 27.875 21.529 27.908 20.183 27.908ZM20.004 26.438C21.393 26.441 22.605 26.406 23.844 26.331C24.724 26.277 25.486 25.992 26.111 25.483C26.688 25.012 27.086 24.362 27.293 23.552C27.498 22.748 27.51 21.916 27.521 21.082C27.53 20.429 27.539 19.656 27.541 18.871C27.539 18.086 27.53 17.406 27.521 16.753C27.51 15.919 27.498 15.056 27.293 14.252C27.086 13.442 26.688 12.792 26.111 12.322C25.486 11.812 24.724 11.527 23.844 11.473C22.605 11.398 21.393 11.363 20.007 11.366C18.618 11.363 17.437 11.398 16.198 11.473C15.319 11.527 14.556 11.812 13.931 12.322C13.354 12.792 12.956 13.442 12.749 14.252C12.544 15.056 12.533 15.919 12.521 16.753C12.512 17.407 12.503 18.087 12.501 18.872C12.503 19.655 12.512 20.428 12.521 21.082C12.533 21.916 12.544 22.779 12.749 23.582C12.956 24.393 13.354 25.012 13.931 25.483C14.556 25.992 15.319 26.277 16.198 26.331C17.437 26.406 18.619 26.441 20.004 26.438ZM19.97 23.268C17.546 23.268 15.573 21.296 15.573 18.871C15.573 16.446 17.546 14.473 19.97 14.473C22.395 14.473 24.368 16.446 24.368 18.871C24.368 21.296 22.395 23.268 19.97 23.268ZM19.97 15.88C18.321 15.88 16.98 17.222 16.98 18.871C16.98 20.519 18.321 21.861 19.97 21.861C21.619 21.861 22.961 20.519 22.961 18.871C22.961 17.222 21.619 15.88 19.97 15.88ZM24.86 13.066C24.277 13.066 23.805 13.538 23.805 14.121C23.805 14.704 24.277 15.177 24.86 15.177C25.443 15.177 25.915 14.704 25.915 14.121C25.915 13.538 25.443 13.066 24.86 13.066Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full aspect-1920/1109 bg-light px-pad-4xl pt-36.25 pb-pad-4xl relative ">
        <img
          src={aboutProduct1}
          alt=""
          className="relative z-98 w-221 aspect-884/589 object-center object-cover ml-auto "
        />

        <div className="absolute top-56.25 left-86.5 z-99 w-[724px] h-[662px] bg-[white] pl-[87px] pr-[114px] pt-[62px] pb-[77px] ">
          <img
            src={brandIcon}
            alt=""
            className="w-10.25 aspect-41/29 object-center object-cover "
          />
          <h1 className="text-42 text-main font-n-b ">About Tazza Product</h1>
          <p className="text-24 text-secondary font-n-l py-7.75   ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
          <p className="text-24 text-secondary font-n-l pb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy ....
          </p>
          <button className="text-24 text-main px-12 py-5 bg-yellow rounded-[50px] ">
            Explore More Product
          </button>
        </div>
        <div className="absolute bottom-37.75  w-271 aspect-1084/319 bg-green-dark mt-auto "></div>
      </div>

      <InstagramFeed />
      <Footer />
    </section>
  );
};

export default Contact;
