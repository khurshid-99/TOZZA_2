import { useNavigate } from "react-router";

interface ICard {
  image: string;
}
const FruitsVegetablesCart = ({ image }: ICard) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-81.25  flex flex-col gap-6 ">
      <img
        onClick={() => navigate("/product")}
        src={image}
        alt=""
        className="w-full md:w-81.25 aspect-325/248 object-center object-cover "
      />
      <div className="">
        <h1 className="text-24 text-main">Fresh chopped vegetables</h1>
        <h5 className="text-18 text-gray pt-1.75 pb-1.5 ">
          WT: <span className="text-main">1000gms</span>
        </h5>
        <div className="flex items-center justify-between">
          <h5 className="text-18">
            <span className="text-gray">MRP:</span>
            <small className="text-success-text">Rs</small>
            <span className="text-30 text-main font-n-sb">128</span>
          </h5>
          <button
            onClick={() => navigate("/product/detils")}
            className="w-34.75 aspect-139/44 rounded-[50px] text-16 text-main text-center bg-base border border-border "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitsVegetablesCart;
