import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  techPosts: Array<Post>;
};

// const Tech = (props: Props) => {
const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      {/* HEADER */}
      <div className="my-8 flex items-center gap-3">
        <h4 className="py-2 px-5 bg-accent-orange text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>
      {/* <div className="my-5 h-96 grid grid-cols-2 grid-rows-8 gap-x-8 gap-y-3">
        <div className="col-span-1 row-span-3 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
      </div> */}
      <div className="sm:grid my-5 grid-cols-2 grid-rows-3 gap-x-8 gap-y-8">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        />

        <Card
          className="sm:mt-0 col-span-1 row-span-1 mt-10 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        />
        <Card
          className="sm:mt-0 col-span-1 row-span-1 mt-10 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        />
        <Card
          className="sm:mt-0 col-span-1 row-span-1 mt-10 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
