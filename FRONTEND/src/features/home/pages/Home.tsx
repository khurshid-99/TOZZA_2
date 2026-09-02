import "../styles/Home.scss";
import banner from "../../../assets/banner-image.png";
import {
  brandIcon,
  iamge,
  iamge2,
  iamge3,
  fruits,
  popular,
} from "../../../images";
import { useState } from "react";
import Footer from "../../../utils/Footer";
import DeliveryStep from "../../../utils/DeliveryStep";
import BestSellerCart from "../components/BestSellerCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import FruitsVegetablesCart from "../components/FruitsVegetablesCart";
// import CategoryNav from "../components/CategoryNav";

const Home = () => {
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <section className="home  ">
      {/* <CategoryNav /> */}
      {/*  */}
      <div className="w-full aspect-400/270 md:aspect-768/300 xl:aspect-1920/750 2xl:aspect-1536/696 3xl:aspect-1920/696  relative  ">
        <img
          src={banner}
          alt=""
          className="w-full aspect-400/270 md:aspect-768/400 xl:aspect-1920/750 2xl:aspect-1536/696 3xl:aspect-1920/696   object-center object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full z-99   ">
          <div className="3xl:max-w-[1620px] mx-auto pt-6 md:pt-16 2xl:pt-38 ">
            <h2 className="text-20 md:text-30 text-white-text font-n-b uppercase ">
              Ready to Cook
            </h2>
            <h1 className="text-30 md:text-48 lg:text-68 text-white-text font-n-eb ">
              Cooking made <span className="text-highlight-text ">Easy</span>
              <span className="text-primary-light">.</span>
            </h1>
            <h1 className="text-26 2xl:text-48 text-white-text ">
              Daily essentials, delivered to <br /> your doorstep.
            </h1>
            <div className="flex gap-3.75 pt-2 md:pt-10 xl:pt-20 ">
              <button className="w-30 lg:w-45 xl:w-63.5 aspect-100/35 lg:aspect-180/60  xl:aspect-254/76 rounded-[50px] bg-yellow text-18 xl:text-24 text-main text-center shrink-0 ">
                Shop Now
              </button>
              <button className="w-30 lg:w-45 xl:w-63.5 aspect-100/35 lg:aspect-180/60 xl:aspect-254/76 rounded-[50px] text-18 xl:text-24 text-[#B7B7B7] text-center border-2 border-border-dark shrink-0 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b border-border-light  ">
        <div className="w-full max-w-[1620px] mx-auto flex flex-col xl:flex-row gap-5 xl:gap-0 xl:items-center justify-between py-13.5 ">
          <div className="">
            <h1 className="text-32 text-main font-n-b  ">
              Delicious &{" "}
              <span className="text-success-text ">Healthy Meals</span>
              <br />
              <span className="text-orange">Delivered</span> to Your Door
            </h1>
          </div>

          <form
            action=""
            className="  flex flex-col xl:flex-row  xl:items-center gap-11.5 px-1 lg:px-0 "
          >
            <div className="form_email w-full ">
              <input
                id="email_"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="border-b outline-none w-full lg:w-75.75 "
              />
            </div>
            <div className="form_zip_code">
              <input
                id="zip_code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                pattern="[0-9]"
                placeholder="Zip code"
                className="border-b text-18 text-main outline-none w-full lg:w-50.5 "
              />
            </div>
            <button className="w-44.75 aspect-179/58 rounded-[50px] bg-black text-center text-white-text font-n-sb cursor-pointer shrink-0  ">
              Get Started
            </button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="3xl:max-w-[1620px] mx-auto pt-28 ">
        <div className=" flex flex-col items-center ">
          <div className="w-10.25 aspect-41/29 ">
            <img
              src={brandIcon}
              alt=""
              className="w-full object-center object-cover "
            />
          </div>
          <h1 className="text-42 text-main text-center font-n-b ">
            Our Best Seller
          </h1>
          <p className="text-24 text-secondary text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        {/*  */}
        <div className=" max-w-[1390px] mx-auto pt-[75px] ">
          <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
            <SwiperSlide>
              <BestSellerCart image={iamge} />
            </SwiperSlide>
          </Swiper>

          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="max-w-[1620px] mx-auto pt-28 ">
        <div className="">
          <div className="flex flex-col items-center ">
            <div className="w-10.25 aspect-41/29 ">
              <img
                src={brandIcon}
                alt=""
                className="w-full object-center object-cover "
              />
            </div>
            <h1 className="text-42 text-main text-center font-n-b ">
              Fruits & Vegetables
            </h1>
          </div>
          <p className="text-24 text-secondary text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="max-w-[1620px] mx-auto flex justify-center pt-18.75 gap-7.5 ">
          {/*  */}
          <FruitsVegetablesCart image={fruits} />
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="max-w-[1620px] mx-auto pt-28 pb-41 ">
        <div className="">
          <div className="flex flex-col items-center ">
            <div className="w-10.25 aspect-41/29 ">
              <img
                src={brandIcon}
                alt=""
                className="w-full object-center object-cover "
              />
            </div>
            <h1 className="text-42 text-main text-center font-n-b ">
              Popular Categories
            </h1>
          </div>
          <p className="text-24 text-secondary text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="flex items-center justify-center gap-7.5 pt-18.75  ">
          {/*  */}
          {/* <FruitsVegetablesCart image={popular} /> */}
          <FruitsVegetablesCart image={popular} />
          {/*  */}
        </div>
      </div>
      {/*  */}
      <DeliveryStep />
      <div className="max-w-[1620px] mx-auto pt-36.25 ">
        <div className="pb-18.75">
          <div className="flex flex-col items-center ">
            <div className="w-10.25 aspect-41/29 ">
              <img
                src={brandIcon}
                alt=""
                className="w-full object-center object-cover "
              />
            </div>
            <h1 className="text-42 text-main text-center font-n-b ">
              Explore Categories
            </h1>
          </div>
          <p className="text-24 text-secondary text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        {/*  */}
        <div className="max-w-[1620px] grid grid-cols-4 grid-rows-2 gap-7.5  ">
          <div className="col-span-2 aspect-796/471 bg-[yellow] ">
            <img
              src={fruits}
              alt=""
              className="w-full aspect-796/471 object-cover object-center "
            />
          </div>
          <div className="col-span-1 aspect-383/471 bg-[pink] ">
            <img
              src={iamge2}
              alt=""
              className="w-full aspect-383/471 object-cover object-center "
            />
          </div>
          <div className="col-span-1 aspect-383/471 bg-[green] ">
            <img
              src={popular}
              alt=""
              className="w-full aspect-383/471 object-cover object-center "
            />
          </div>
          <div className="col-span-1 aspect-383/471 bg-[blue] ">
            <img
              src={iamge3}
              alt=""
              className="w-full aspect-383/471 object-cover object-center "
            />
          </div>
          <div className="col-span-1 aspect-383/471 bg-emerald-600 ">
            <img
              src={fruits}
              alt=""
              className="w-full aspect-383/471 object-cover object-center "
            />
          </div>
          <div className="col-span-2 aspect-796/471 bg-violet-800 ">
            <img
              src={iamge}
              alt=""
              className="w-full aspect-796/471 object-cover object-center "
            />
          </div>
        </div>
        {/*  */}
        <div className="flex pt-23 justify-center ">
          <button className="w-93.5 aspect-374/76 rounded-[50px] text-24 text-main bg-yellow">
            Explore More Categories
          </button>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[1620px] mx-auto pt-25 pb-pad-124">
        <div className="pb-18.75">
          <div className="flex flex-col items-center ">
            <div className="w-10.25 aspect-41/29 ">
              <img
                src={brandIcon}
                alt=""
                className="w-full object-center object-cover "
              />
            </div>
            <h1 className="text-42 text-main text-center font-n-b ">
              Explore Categories
            </h1>
          </div>
          <p className="text-24 text-secondary text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
        </div>
        <div className="flex justify-center gap-7.5 ">
          <div className="w-81.25 aspect-325/248 ">
            <img
              src={iamge2}
              alt=""
              className="w-full aspect-325/248 object-cover object-center "
            />
          </div>
          <div className="w-81.25 aspect-325/248 ">
            <img
              src={iamge2}
              alt=""
              className="w-full aspect-325/248 object-cover object-center "
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
