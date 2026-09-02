import { iamge2 } from "../../../images";

const LikeCart = () => {
  return (
    <div className="w-full sm:w-81.25 shrink-0 ">
      <img
        src={iamge2}
        alt=""
        className="w-full aspect-325/248   object-center object-cover"
      />
      <div className="pt-3.75 ">
        <h1 className="text-24 text-main ">Raw-Chicken-fillet</h1>
        <p className="text-18 text-subtle pt-3 pb-2.5 ">
          WT : <span className="text-main ">1000gms</span>
        </p>
        <div className="flex items-center justify-between ">
          <p className="text-18 text-subtle ">
            MRP: <span className="text-success-text ">Rs</span>{" "}
            <span className="text-30 text-main ">128</span>
          </p>
          <button className="w-34.75 aspect-139/44 bg-base border border-border rounded-[50px] text-center cursor-pointer active:scale-99  ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeCart;
