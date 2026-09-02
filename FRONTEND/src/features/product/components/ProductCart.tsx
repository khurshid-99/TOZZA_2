import type { ProductCartProps } from "../types/ProductCart.types";

const ProductCart = ({
  id,
  img,
  title,
  subTitle,
  netWt,
  gross,
  mrp,

}: ProductCartProps) => {
  return (
    <div
      id={id.toString()}
      className="w-87.5 lg:w-107.5 shrink-0 flex flex-col bg-[#fafafa] rounded-[5px] "
    >
      <div className="max-w-107.5 aspect-350/301 ">
        <img
          src={img}
          alt=""
          className="w-107.5 aspect-430/301 object-top object-cover "
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-24 text-end ">⭐⭐⭐⭐⭐</p>
        <h1 className="text-24 text-main ">{title.slice(0, 10)}</h1>
        <p className="text-16 text-primary">{subTitle.slice(0, 20)}</p>
        <div className="flex">
          <p className="text-18 text-subtle font-n-r">
            Net wt: <span className="text-main">{netWt}</span>{" "}
          </p>
          <p className="text-18 text-subtle font-n-r pl-2 ">
            | Gross: <span className="text-main">{gross}</span>{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-18 ">
            <span className="text-success-text "> MRP: </span>
            <small className="text-main text-20">Rs </small>
            <span className="text-30 text-main font-n-sb ">{mrp}</span>
          </p>
          <button className="text-16 bg-base border border-border rounded-[50px] px-[1.42rem] py-[.57rem] duration-300 active:bg-yellow ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
