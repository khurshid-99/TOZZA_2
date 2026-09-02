interface InstagramFeedProps {
  image: string;
};

const InstagramFeedCart = ({ image }: InstagramFeedProps) => {
  console.log(image);
  return (
    <div className="w-46.25 sm:w-73 md:w-81.25 aspect-325/248 shrink-0 bg-[pink] ">
      <img
        src={image}
        alt=""
        className="w-81.25 aspect-325/248 object-cover object-center "
      />
    </div>
  );
};

export default InstagramFeedCart;
