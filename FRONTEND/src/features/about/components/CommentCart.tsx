import { iamge, message } from "../../../images";

const CommentCart = () => {
  return (
    <div className="w-full flex items-start gap-9 ">
      <img
        src={iamge}
        alt=""
        className="w-19.75 aspect-square object-center object-cover rounded-full "
      />
      <div className="w-full">
        <div className="w-full flex justify-between items-start border-b border-light-text pb-4">
          <p className="w-105 text-26 text-[#343434] ">
            Lorem Ipsum is simply dummy text of the printing and?
          </p>

          <div className="relative ">
            <img
              src={message}
              alt=""
              className="w-[35.5px] aspect-square object-center object-cover "
            />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-20 text-[#B3B3B3] font-n-sb ">
              1
            </span>
          </div>
        </div>
        <h5 className="text-14 text-[#949494] py-4 ">
          Lorem Ipsum September 12, 2021
        </h5>
        <p className="text-20 text-[#313131] ">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been.
        </p>
      </div>
    </div>
  );
};

export default CommentCart;
