interface ICard{
  image:string
}

const BestSellerCart = ({ image }:ICard) => {
  return (
    <div className="w-107.5 aspect-430/490 ">
      <img
        src={image}
        alt=""
        className="w-full aspect-430/301 object-cover object-center "
      />
      <div className="">
        <div className="text-[12px] ">⭐⭐⭐⭐⭐</div>
        <h1 className="text-24 text-main">Chicken Curry Cut Small </h1>
        <p className="text-18 text-primary ">
          Bone-in chunky pieces of skinless meat including...
        </p>
        <div className="flex items-center gap-2.5 ">
          <h5 className="text-18 text-subtle ">
            Net wt:<span className="text-main "> 1000gms </span>
          </h5>
          <div className="w-px h-4.25 bg-gray " />
          <h5 className="text-18 text-subtle  ">
            Gross: <span className="text-main "> 1026gms</span>
          </h5>
        </div>
        <div className="flex items-center justify-between ">
          <div className="">
            <h5 className="text-18 text-main ">
              <span className="text-success-text ">MRP: </span>
              <span className="">Rs</span>
              <span className="text-30 font-n-sb ">309</span>
            </h5>
          </div>
          <button className="w-34.75 aspect-139/44 bg-base rounded-[50px] border border-border text-16 text-main  ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCart;
