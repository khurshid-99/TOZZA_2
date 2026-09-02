
import { deliveryBackGround, Meals, Packaged, Repeat, Shipping } from '../images'

const DeliveryStep = () => {
  return (
    <div className="relative w-full aspect-400/700 sm:aspect-640/700 md:aspect-768/270 lg:aspect-1920/270 ">
        <img
          src={deliveryBackGround}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-around ">
          <div className="w-347.5 mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-0 2xl:flex-row items-start md:items-center 2xl:items-center md:justify-between text-center text-white-text ">
            <div className="flex flex-col justify-center items-center">
              <img
                src={Meals}
                alt=""
                className="w-17.25 aspect-69/61 object-cover object-center "
              />
              <h1 className="text-24">Choose Your Meals</h1>
              <p className="text-18 ">Lorem Ipsum is simply dummy</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Packaged}
                alt=""
                className="w-14 aspect-56/61 object-cover object-center "
              />
              <h1 className="text-24">Packaged fresh</h1>
              <p className="text-18 ">Lorem Ipsum is simply dummy</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Shipping}
                alt=""
                className="w-21.75 aspect-87/59.5 object-cover object-center"
              />
              <h1 className="text-24">Free Shipping</h1>
              <p className="text-18 ">Lorem Ipsum is simply dummy</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Repeat}
                alt=""
                className="w-22 aspect-88/54.5 object-cover object-center "
              />
              <h1 className="text-24">Cook & Repeat</h1>
              <p className="text-18 ">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DeliveryStep