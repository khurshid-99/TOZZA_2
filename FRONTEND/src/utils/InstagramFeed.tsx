import axios from "axios";
import {
  brandIcon,
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram4,
} from "../images";
import InstagramFeedCart from "./InstagramFeedCart";
import { useEffect, useState } from "react";

const InstagramFeed = () => {
  const [instagramFeed, setInstagramFeed] = useState([]);
  const getInstagranFeed = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setInstagramFeed(res.data);
  };

  useEffect(() => {
    getInstagranFeed();
  }, []);

  return (
    <>
      <div className="text-center flex flex-col items-center pt-31.25 ">
        <img
          src={brandIcon}
          alt=""
          className="w-10.25 aspect-41/29 object-cover object-center "
        />
        <h1 className="text-42 font-n-b ">Instagram Feed</h1>
        <p className="text-24 py-8 px-4 xl:px-0 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>
      </div>

      <div className="2xl:w-347.5 mx-auto flex flex-1 flex-wrap gap-2 sm:gap-4  md:gap-7.5 justify-center pb-pad-124 ">
        <InstagramFeedCart image={Instagram1} />
        <InstagramFeedCart image={Instagram2} />
        <InstagramFeedCart image={Instagram3} />
        <InstagramFeedCart image={Instagram4} />
      </div>
    </>
  );
};

export default InstagramFeed;
