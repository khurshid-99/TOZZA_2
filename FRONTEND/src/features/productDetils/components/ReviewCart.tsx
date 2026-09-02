import { disLike, dowArrow, like, star } from "../../../images";
import type { ReviewCartProps } from "../types/ReviewCart.type";

const ReviewCart = ({
  item: { id, name, image, likes, dislikes,  date, review },
}: ReviewCartProps) => {
  return (
    <div id={id.toString()} className="flex items-start gap-8">
      <img
        src={image}
        alt=""
        className="w-10 md:w-19.75 aspect-square rounded-[50%] object-center object-cover  "
      />
      <div className=" ">
        <div className="flex items-center justify-between ">
          <h1 className="text-20 md:text-26 ">{name}</h1>
          <div className="flex gap-4 ">
            <button className="flex items-center gap-1 cursor-pointer">
              <img src={like} alt="" className="w-[20.1px] aspect-square  " />
              <span className="text-18 text-[#AAAAAA] ">{likes}</span>
            </button>
            <button className="flex items-center gap-1 cursor-pointer ">
              <img
                src={disLike}
                alt=""
                className="w-[20.1px] aspect-square  "
              />
              <span className="text-18 text-[#AAAAAA] ">{dislikes}</span>
            </button>
          </div>
        </div>
        {/*  */}
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
        {/*  */}
        <p className=" text-14 text-[#949494] py-2.5 ">Lorem Ipsum {date}</p>
        <p className="text-18 md:text-20 text-primary ">{review}</p>
        <button className="flex items-center text-20 text-orange gap-2 pt-2.5 cursor-pointer">
          more
          <img
            src={dowArrow}
            alt=""
            className="w-[9.1px] aspect-9.1/5.5 object-cover object-center "
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewCart;
