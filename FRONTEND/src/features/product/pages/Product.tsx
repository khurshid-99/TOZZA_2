import { brandIcon, productHero } from "../../../images";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "../components/ProductCart";
import InstagramFeed from "../../../utils/InstagramFeed";
import Footer from "../../../utils/Footer";
import DeliveryStep from "../../../utils/DeliveryStep";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-full bg-soft">
      <div className="relative w-full  lg:aspect-1920/506 ">
        <img
          src={productHero}
          alt=""
          className="w-full aspect-400/230 sm:aspect-640/250 lg:aspect-1920/506 object-center object-cover "
        />
        {/*  */}
        <div
          className="absolute w-full h-full top-0 left-0 flex flex-col justify-center px-2 2xl:px-pad-154 gap-2 2xl:gap-12
        "
        >
          <h1
            className={`text-30 md:text-42 xl:text-68 font-n-eb text-white-text 2xl:leading-15  `}
          >
            Our Best <span className="text-highlight-text">Product</span> .
          </h1>
          <p className="text-white-text lg:text-22 xl:text-28 ">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </p>
          <button className="w-fit px-6 py-2 2xl:w-63.25 xl:aspect-253/76 bg-yellow text-main text-18 2xl:text-24 text-center rounded-[50px] active:scale-[99%] ">
            Shop Now
          </button>
        </div>
      </div>
      {/*  */}
      <div className="2xl:px-pad-154 py-4 px-2 bg-base ">
        <h4 className="text-20 ">
          Home / <span className="text-warning-text">Chicken</span>
        </h4>
      </div>

      {/*  */}
      <div className="2xl:w-347.5 mx-auto px-2 md:px-0 2xl:py-pad-2xl-plus  ">
        <h1 className="text-32 sm:text-42 2xl:text-48 font-n-sb ">Chicken</h1>
      </div>
      {/*  */}
      <div className="2xl:w-347.5 mx-auto flex flex-wrap items-start justify-center xljustify-between gap-8 xl:gap-12  shrink-0 pb-pad-3xl ">
        {products.length > 0 ? (
          products.map(({ id, image, title, description, price }) => (
            <ProductCart
              id={id}
              img={image}
              title={title}
              subTitle={description}
              gross={11}
              netWt="11"
              mrp={price}
              fn={() => {}}
            />
          ))
        ) : (
          <h1>Loading..</h1>
        )}
      </div>
      {/*  */}

      <DeliveryStep />
      {/*  */}

      <div className=" 2xl:w-347.5 mx-auto pt-pad-124 ">
        <div className=" bg-base flex flex-col items-center text-center pt-17.75 pb-24.5 px-4 ">
          <img
            src={brandIcon}
            alt=""
            className="w-10.25 aspect-41/29 object-cover object-center "
          />
          <h1 className="text-32 sm:text-42 font-n-b">About Tazza Chicken</h1>
          <p className="pt-12 pb-pad-65 text-24 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <p className="xl:w-266.75 mx-auto text-22 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p className="xl:w-266.75 text-22 py-8.5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <p className="xl:w-266.75 text-22">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className="flex flex-col gap-12.5 text-20 text-primary py-pad-65 px-4 ">
          <p>
            <span className="font-n-sb text-main ">
              Chicken Curry Cut (Small){" "}
            </span>
            – Chicken Curry Cut pieces are specially selected bone-in and
            boneless pieces from different parts of the chicken. A perfect mix
            of white and dark meat, the Chicken Curry Cut package includes
            different cuts from half of the chicken with the leg, wing without
            tip and a quarter of the breast with backbone. These small
            bite-sized pieces are ideal for your delicious gravy dishes, such as
            curries or kormas.
          </p>
          <p>
            <span className="font-n-sb text-main ">Chicken Breast </span> – A
            pure meat indulgence, the Chicken Breast is one of the meatier cuts
            of a chicken. The high meat-to-bone ratio makes it extremely
            versatile for use in a variety of dishes. The portion is skinless
            and has a supple texture. An ideal choice for a lean protein diet,
            the tender flesh can be added as small chunks to your pasta, butter
            chicken masala or used as-is for a juicy chicken grill or stuffed
            bake.
          </p>
          <p>
            <span className="font-n-sb text-main ">
              Chicken (Whole with Skin)
            </span>{" "}
            – A Whole Chicken with skin retains its juiciness, which effectively
            enhances its flavour. A centrepiece for any feast, the Whole Chicken
            from Licious is gutted and cleaned, is uncut and prepped well to be
            cooked when it reaches you. It is perfect for dishing out a
            delicious stuffed chicken meal that lets you choose your favourite
            pieces.
          </p>
          <p>
            <span className="font-n-sb text-main ">
              Chicken Leg (Whole) with Thigh{" "}
            </span>
            – The Whole Chicken Leg with Thigh from Licious includes both the
            drumstick and the thigh. A cut that comprises of dark meat, the
            Whole Chicken Leg is rich in flavour and has a moist texture.
            Perfect for slow-cooking, this portion of chicken is best used to
            prepare spiced chicken, chicken roast, chicken kepsa rice, Mughlai
            chicken masala or the classic tandoori chicken.
          </p>
          <p>
            <span className="font-n-sb text-main ">Chicken Mince (Keema)</span>{" "}
            – Chicken Mince or Keema is Chicken Breast Fillets ground to
            perfection. The juicy and smooth lean mince is an ideal choice for a
            variety of dishes such as Indian spiced keema, kebabs, spaghetti
            salad, chicken herbed patties and more.
          </p>
          <p>
            <span className="font-n-sb text-main ">Chicken Drumstick </span> –
            Cut from the lower leg, the Drumstick is one of the meatier cuts of
            a chicken. The leg bone enhances its flavour. Succulent and tender
            in every bite, the Chicken Drumstick is ideal for grilled and fried
            dishes as a starter. Chicken Drumsticks are also perfect for cooking
            curries, biryani or a healthy light grill.
          </p>
          <p>
            <span className="font-n-sb text-main ">Chicken Drumstick</span> –
            Cut from the lower leg, the Drumstick is one of the meatier cuts of
            a chicken. The leg bone enhances its flavour. Succulent and tender
            in every bite, the Chicken Drumstick is ideal for grilled and fried
            dishes as a starter. Chicken Drumsticks are also perfect for cooking
            curries, biryani or a healthy light grill.
          </p>
        </div>

        <div className="text-center">
          <button className="px-15 py-5 bg-yellow text-24 rounded-[50px] active:scale-99  ">
            Explore More
          </button>
        </div>
      </div>

      {/* -- */}

      <div className="w-full 2xl:w-347.5  mx-auto">
        <InstagramFeed />
      </div>

      <Footer />
    </section>
  );
};

export default Product;
