import { disLike, dowArrow, iamge, like } from "../../../images"


const ReviewCart = () => {
  return (
    <div className="w-178.5 flex items-start gap-6 ">
            <img
              src={iamge}
              alt=""
              className="w-19.75 aspect-square object-center object-cover rounded-full "
            />
            <div>
              <div className="flex items-center justify-between ">
                <h1 className="text-26 text-main ">John Smith</h1>
                <div className="flex gap-3 ">
                  <div className="flex items-center ">
                    <img
                      src={like}
                      alt=""
                      className="w-[20.1px] aspect-square object-center object-cover "
                    />
                    <span className="text-18 text-[#AAAAAA] ">1</span>
                  </div>
                  <div className="flex items-center ">
                    <img
                      src={disLike}
                      alt=""
                      className="w-[20.1px] aspect-square object-center object-cover "
                    />
                    <span className="text-18 text-[#AAAAAA] ">0</span>
                  </div>
                </div>
              </div>
              <div className="pt-3.75 pb-6.25 ">⭐⭐⭐⭐⭐</div>
              <h6 className="text-14 text-[#949494] ">
                Lorem Ipsum September 12, 2021
              </h6>
              <p className="text-20 text-primary pt-2.5 pb-3.25 ">
                Chicken is a lean meat with various health benefits. Packed with
                nutritional values, chicken is supremely.
              </p>
              <button className="text-20 text-warning-text ">
                more{" "}
                <img
                  src={dowArrow}
                  alt=""
                  className="w-[9.1px] aspect-9.1/5.5 object-center object-cover inline-block  "
                />
              </button>
            </div>
          </div>
  )
}

export default ReviewCart