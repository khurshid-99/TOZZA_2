import axios from "axios";
import { brandIcon } from "../images";
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

      <div className="flex flex-1 flex-wrap gap-2 sm:gap-4  md:gap-7.5 justify-center pb-pad-124 ">
        {instagramFeed.length > 0 ? (
          instagramFeed.map(({ image }) => <InstagramFeedCart image={image} />)
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default InstagramFeed;
