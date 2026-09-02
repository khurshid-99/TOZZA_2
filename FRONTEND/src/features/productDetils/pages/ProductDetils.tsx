import { Swiper, SwiperSlide } from "swiper/react";
import {
  addToCart,
  brandIcon,
  iamge2,
  productDetilsImg,
  search,
  star,
} from "../../../images";
import DeliveryStep from "../../../utils/DeliveryStep";
import Footer from "../../../utils/Footer";
import InstagramFeed from "../../../utils/InstagramFeed";
import LikeCart from "../components/LikeCart";
import MessageCart from "../components/MessageCart";
import ReviewCart from "../components/ReviewCart";
import { notifications } from "../testData/MessageData";
import { reviewsData } from "../testData/ReviewMessageData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination } from "swiper/modules";

const ProductDetils = () => {
  return (
    <section className="">
      <div className="3xl:w-[1620px] mx-auto  pb-29  ">
        <div className=" text-20 font-n-r flex items-center gap-2 py-5.75">
          <p>Home</p> /<p>Product</p>/<p className="text-orange ">Chicken </p>
        </div>
        <div className="w-full flex flex-wrap gap-22.5 px-4 2xl:px-0 ">
          {/*  */}
          <div className=" 2xl:w-135 3xl:w-151.25 2xl:aspect-550/610   3xl:aspect-605/668  ">
            <img
              src={productDetilsImg}
              alt=""
              className="w-full 2xl:aspect-540/610  3xl:aspect-605/668 object-center object-cover rounded-lg "
            />
          </div>
          {/*  */}

          <div className="flex flex-wrap gap-22.5  ">
            {/*  */}
            <div className="flex flex-col gap-26.5 ">
              <div>
                <h1 className="text-30 sm:text-42 text-main ">
                  Raw Chicken <br /> Wings dark Wooden
                </h1>
                <p className="text-20 sm:text-24 text-primary pt-[20.5px] ">
                  Bone-in chunky pieces of skinless meat <br /> including Lorem
                  Ipsum is simply.
                </p>
              </div>

              <div className="flex gap-7.5 ">
                <div className="flex flex-col items-center">
                  <img
                    src={iamge2}
                    alt=""
                    className="w-36 aspect-144/152 object-center object-cover rounded-3xl "
                  />
                  <p className="text-20 pt-4 pb-[6.5px] ">2 Packet</p>
                  <p className="text-18 text-main ">
                    <span className=" text-success-text ">MRP :</span>{" "}
                    <span>Rs</span>
                    <span className="text-24 ">390</span>
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={iamge2}
                    alt=""
                    className="w-36 aspect-144/152 object-center object-cover rounded-3xl "
                  />
                  <p className="text-20 pt-4 pb-[6.5px] ">2 Packet</p>
                  <p className="text-18 text-main ">
                    <span className=" text-success-text ">MRP :</span>{" "}
                    <span>Rs</span>
                    <span className="text-24 ">390</span>
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={iamge2}
                    alt=""
                    className="w-36 aspect-144/152 object-center object-cover rounded-3xl "
                  />
                  <p className="text-20 pt-4 pb-[6.5px] ">2 Packet</p>
                  <p className="text-18 text-main ">
                    <span className=" text-success-text ">MRP :</span>{" "}
                    <span>Rs</span>
                    <span className="text-24 ">390</span>
                  </p>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="">
              <div className="flex justify-center gap-2 pt-8 pb-11  ">
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <p>(4.9)</p>
              </div>
              <div className="w-80.5 aspect-322/473 bg-light rounded-2xl flex flex-col items-center justify-center gap-9 text-center ">
                <div>
                  <p className="text-30 text-main ">
                    Rs <span className="text-52 font-n-sb ">309</span>{" "}
                  </p>
                  <p className="text-[1.1rem] text-success-text ">In Stock</p>
                </div>
                <div className="flex flex-col gap-4 ">
                  <div className="w-62.25 aspect-249/76 bg-white rounded-2xl flex items-center justify-around text-24 ">
                    <button className="flex items-center justify-center  ">
                      <span className="inline-block w-5 h-0.75 bg-black "></span>
                    </button>
                    <div className="w-21.25 aspect-85/38 flex items-center justify-center border-r-2 border-l-2 border-[#DCDCDC] ">
                      2
                    </div>
                    <button className="text-30 font-n-b text-center active:scale-99 ">
                      +
                    </button>
                  </div>
                  <button className="bg-warning-bg w-62.25 aspect-249/76 flex items-center justify-center gap-2  rounded-2xl ">
                    <img
                      src={addToCart}
                      alt=""
                      className="w-[19.9px] aspect-19.9/20.3 object-center object-cover "
                    />
                    <span className="text-20 text-white-text font-n-sb  ">
                      Add to Cart
                    </span>
                  </button>
                </div>
                <div>
                  <p className="text-18  ">Free Shipping your Product</p>
                  <p className="text-18 text-warning-text ">Sep 15 - 30</p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" bg-base ">
        <div className="3xl:w-[1620px] mx-auto flex flex-col gap-6 pt-20 pb-15 ">
          <h1 className="text-32 lg:text-42 text-main ">
            Raw Chicken Wings dark Wooden
          </h1>
          <p className="text-18 sm:text-20 text-primary  ">
            Chicken is a lean meat with various health benefits. Packed with
            nutritional values, chicken is supremely advantageous for your body.
            Filled with vitamin,mineral and protein, chicken <br />
            promotes brain development, strengthens your bones, aids in weight
            loss, builds muscle and helps in a healthy heart.{" "}
          </p>
          <p className="text-20 text-primary ">
            Chicken curry is one of the favourite non-veg dishes in most Indian
            households. Fresho Chicken curry cut is carved into perfect pieces
            to give you the ideal portion for your curries. <br />
            This scrumptious skinless chicken pieces come in 13-15 in numbers
            which are perfect for 2-3 people.{" "}
          </p>
          <p className="text-20 text-primary ">
            Fresho Meats is our in-house brand of fresh meat, poultry, and
            seafood. We take utmost care in selecting the best suppliers to
            provide you with high quality and succulent products. <br />
            Every product is stored in our cold storage right until your
            doorstep ensuring freshness and utmost hygiene.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex flex-wrap items-start justify-center  ">
        <div className="w-full 2xl:w-1/2 2xl:aspect-960/1140  pt-pad-65 pb-13.75 bg-light  ">
          <div className="md:w-183 h-full relative 2xl:ml-auto md:mr-19.5 ">
            <h1 className="text-28 md:text-32 mb-5 ">
              Customer questions & answers (7)
            </h1>
            <div className="w-full md:w-183 bg-white text-18 px-6.75 py-[21.5px] flex items-center justify-between rounded-2xl ">
              <input
                type="text"
                placeholder="Have a questions? Search answer"
                className="w-full text-18 placeholder:text-[#717171] border-none outline-none "
              />
              <img
                src={search}
                alt=""
                className="w-5 aspect-square object-center object-cover "
              />
            </div>
            <div className="pt-12.5 pb-10 ">
              {notifications.map(
                ({ id, image, author, date, title, unreadCount }) => (
                  <MessageCart
                    id={id}
                    date={date}
                    author={author}
                    uMessage={title}
                    userImg={image}
                    unreadCount={unreadCount}
                  />
                ),
              )}
            </div>
            <div className="absolute bottom-0 right-0 ">
              <p className="text-18 border-b-2 border-warning-bg ">
                See More questions (8)
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full 2xl:w-1/2 3xl:aspect-960/1140 pt-pad-65 pb-13.75 bg-white  ">
          <div className="md:w-183 h-full relative  2xl:pl-23.75 ">
            <h1 className="text-28 md:text-32 mb-10 ">
              Reviews <span>(38)</span>
            </h1>
            <div className="flex items-center gap-2 pb-18.75  ">
              <div className="flex items-center gap-2 ">
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
                <img
                  src={star}
                  alt=""
                  className="w-6.25 aspect-25/16.9 object-center object-contain "
                />
              </div>
              <p className="text-16 text-main ">4.8 out of 5</p>
            </div>
            <div className="w-full h-full flex flex-col gap-12 pb-10 ">
              {reviewsData.slice(0, 3).map((item) => (
                <ReviewCart item={item} />
              ))}
            </div>
            <div className="absolute bottom-0 right-0 ">
              <p className="text-18 border-b-2 border-warning-bg ">
                See All reviews (37)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="3xl:w-[1620px] mx-auto py-10  md:pt-26 md:pb-32.5 ">
        <div className="flex flex-col items-center ">
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
        <div className="flex items-start justify-center gap-7.5 pt-18.75 flex-nowrap cursor-e-resize ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
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
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.9,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 4.6,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
            <SwiperSlide>
              <LikeCart />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/*  */}
      <DeliveryStep />
      <InstagramFeed />
      <Footer />
    </section>
  );
};

export default ProductDetils;
