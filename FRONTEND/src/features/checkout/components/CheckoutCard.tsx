import { useState } from "react";
import { Checkout1, CloseIcon } from "../../../images";

import "../styles/Checkout.css"

const CheckoutCard = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(309);
  return (
    <div className="w-full 3xl:w-[1620px] aspect-1620/250 flex flex-col lg:flex-row lg:items-center lg:justify-between py-3.5 gap-4 lg:gap-0 bg-white">
      <div className="w-full lg:w-1/2 h-full flex items-center">
        <div className=" w-[50px] md:w-28.75 flex h-full items-start justify-end pr-5 pt-4  ">
          <label className="custom_checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="w-full md:w-[695px] flex md:px-5 py-2 md:py-0  ">
          <div className="rounded-[10px] overflow-hidden">
            <img
              src={Checkout1}
              alt=""
              className="w-[200px] md:w-47.75 aspect-square object-cover object-center "
            />
          </div>
          <div className="pl-2 md:pl-10 pt-5 ">
            <h1 className="text-20 md:text-22 lg:text-20 xl:text-28 text-main ">
              Raw Chicken Wings dark Wooden
            </h1>
            <p className="text-14 md:text-18 xl:text-20 text-[#A2A2A2] ">
              Bone-in chunky pieces of skinless meat.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end text-18 text-[#ADADAD] ">
        <div className=" w-[543px] grid grid-cols-3 items-center ">
          {/*  */}
          <div className="md:w-[140px] ">
            <h5 className="text-24 text-[#4A4A4A] text-start font-n-sb ">
              &#8377;309
            </h5>
            <h5 className="text-20 text-[#A5A8AE] text-start font-n-sb pl-2 ">
              <s>&#8377;475</s>
            </h5>
          </div>
          {/*  */}
          <div className="md:w-[175px] flex items-center justify-center border ">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              className="w-10 text-center text-30 active:scale-90 active:text-main "
            >
              -
            </button>
            <div className="w-23.75 text-center border-l border-r border-[#DFDFDF] h-full flex items-center justify-center ">
              {/* <span className="text-24 text-main ">{count}</span> */}
              <input
                type="number"
                value={count}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setCount(e.target.value);
                  }
                }}
                name=""
                id=""
                className="w-full text-24 text-center outline-none  "
              />
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="w-10 text-30 active:scale-90 active:text-main "
            >
              +
            </button>
          </div>
          {/*  */}
          <div className="md:w-[228px] pl-[50px] md:pl-[88px] ">
            <h1 className="text-24 text-[#FAA61A] text-start font-n-sb ">
              &#8377;{price * count}
            </h1>
          </div>
        </div>
        {/*  */}
        <div className="w-[115px] pl-[35px] flex items-center ">
          <button className=" ">
            <img
              src={CloseIcon}
              alt=""
              className="w-[14.5px] aspect-square object-cover object-center active:scale-90 duration-300 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
