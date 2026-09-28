import {
  brandIcon,
  Checkout1,
  Detail1,
  Detail2,
  Detail3,
  Detail4,
  nextButton,
  prevButton,
} from "../../../images";
import CheckoutCard from "../components/CheckoutCard";
import LikeCart from "../../productDetils/components/LikeCart";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import DeliveryStep from "../../../utils/DeliveryStep";
import InstagramFeed from "../../../utils/InstagramFeed";

const Checkout = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  console.log(window.innerWidth);

  return (
    <section className="w-full  bg-[#F3F3F3] ">
      <div className="max-w-[1620px] mx-auto flex items-center justify-between bg-white py-3.5 ">
        <div className="w-full lg:w-1/2 flex items-center bg-white">
          <div className="md:w-[93px] 2xl:w-28.75 flex items-center justify-end pl-3 md:pl-0 pr-5  ">
            <input type="checkbox" name="" id="" className="" />
          </div>
          <div className=" flex items-center gap-31 md:gap-61.5 lg:gap-53.25 ">
            <h3 className="text-18 text-[#ADADAD] ">All</h3>
            <h3 className="text-18 text-[#ADADAD]">Product Name</h3>
          </div>
        </div>
        <div className=" w-1/2 hidden lg:flex justify-end pr-[115px] ">
          <div className="w-[543px] lg:grid grid-cols-3">
            <h3 className="w-[140px] pl-[13px]  ">Price</h3>
            <h3 className="w-[175px] text-center ">Quantity</h3>
            <h3 className="lg:w-[160px] xl:w-[200px] 2xl:w-[228px] lg:pl-[105px] xl:pl-[95px] 2xl:pl-[88px] ">
              Total
            </h3>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="max-w-[1620px] mx-auto flex flex-col items-center gap-5  py-5 ">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
      </div>
      {/*  */}
      <div className="2xl:px-pad-4xl pb-18 ">
        <p className="text-22 text-[#FF6700] ">
          Delivery to :{" "}
          <span className="text-[#898989] ">Customer Address</span>
        </p>
      </div>
      {/*  */}
      <div className="w-full aspect-1920/95 2xl:px-pad-4xl bg-white flex flex-col lg:flex-row md:items-center justify-between gap-4 lg:gap-0 shadow-[0px_10px_10px_rgba(0,0,0,0.05)] relative z-99 ">
        <p className="text-20 text-[#898989] ">
          You have selected 2 item out of all 2 item
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-0  ">
          <div className="md:text-end md:pr-15 ">
            <h2 className="text-30 text-[#FF6700]">Total: 1,236</h2>
            <p className="text-20 text-[#B1B1B1] ">
              Not including shipping fee
            </p>
          </div>
          <button className="w-70.5 aspect-282/95 bg-[#FF6700] text-30 text-white  ">
            Check Our (2)
          </button>
        </div>
      </div>
      {/* --- */}

      <div className=" 4xl:px-pad-4xl py-10  md:pt-26 md:pb-32.5 bg-[white] ">
        <div className="flex flex-col items-center bg-white ">
          <img
            src={brandIcon}
            alt=""
            className="w-[41.1px] aspect-41.1/29 object-cover object-center "
          />
          <h1 className="text-32 md:text-42 font-n-b ">You May Also Like</h1>
          <p className="lg:w-[864.3px] text-24 text-center  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        <div className="relative">
          <div className="w-full 2xl:w-347.5 mx-auto pt-18.75 cursor-e-resize ">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 1.9,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 29,
                },
              }}
              modules={[Navigation]}
              className="mySwiper "
            >
              <SwiperSlide>
                <LikeCart img={Detail1} title={"Raw-Chicken-fillet"} />
              </SwiperSlide>
              <SwiperSlide>
                <LikeCart img={Detail2} title={"Fresh-Fish-slices"} />
              </SwiperSlide>
              <SwiperSlide>
                <LikeCart img={Detail3} title={"Assorted-Spices-eggs"} />
              </SwiperSlide>
              <SwiperSlide>
                <LikeCart img={Detail4} title={"Raw Chicken Breast-fillets"} />
              </SwiperSlide>
            </Swiper>
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden 2xl:inline absolute 2xl:left-0 3xl:left-30 top-1/2 z-10 -translate-y-1/2"
          >
            <img
              src={prevButton}
              alt=""
              className="w-12.75 aspect-square object-cover object-center "
            />
          </button>

          {/* Custom Next Button */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden 2xl:inline absolute 2xl:right-0  3xl:right-30 3xl-plus:right-10 top-1/2 z-10 -translate-y-1/2"
          >
            <img
              src={nextButton}
              alt=""
              className="w-12.75 aspect-square object-cover object-center "
            />
          </button>
          {/*  */}
        </div>
      </div>
      <DeliveryStep />
      <InstagramFeed />
    </section>
  );
};

export default Checkout;
