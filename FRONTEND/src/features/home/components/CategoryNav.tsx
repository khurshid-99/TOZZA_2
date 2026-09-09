interface Categories {
  name: string;
  icon: string;
}

const CategoryNav = ({ name, icon }: Categories) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 lg:gap-4   ">
      <div className="w-[50px] md:w-[65px] lg:w-[70px] xl:w-[84.2px]  aspect-square bg-linear-to-tl from-[white] from-30% via-[white] via-50% to-[#00000028] rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[100%] rounded-br-[100%]  border-black flex items-center justify-center inset-shadow-blue-500 shadow-[10px_10px_20px_rgba(0,0,0,0.1)]">
        <img
          src={icon}
          alt=""
          className="w-[15px] md:w-[20px] lg:w-[25px] xl:w-7.5 aspect-30/37.7 object-center object-cover  "
        />
      </div>
      <h5 className="text-14 lg:text-20 text-[#1F1F1F] text-center capitalize text-nowrap ">{name}</h5>
    </div>

    // <div className="home_category">
    //   <div className="home_category_item ">
    //     <div className="shape">
    //       <img src={icon} alt="" />
    //     </div>
    //     <h5>{name}</h5>
    //   </div>
    // {/* <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div>
    // <div className="home_category_item">
    //   <div className="shape">
    //     <img src="src/assets/category_inner_icon.svg" alt="" />
    //   </div>
    //   <h5>Today’s Deals</h5>
    // </div> */}
    // </div>
  );
};

export default CategoryNav;
