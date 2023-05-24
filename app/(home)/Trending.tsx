import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

// const TrendingCard = ({ className }: TrendingCardProps) => {
const TrendingCard = ({ className, post }: TrendingCardProps) => {
  // console.log("post.image: ", post.image);
  return (
    <Link
      className={`${className} relative block w-full h-96 mt-7 hover:opacity-70 sm:mt-0 sm:h-auto`}
      // href="/"
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      {/* <div className="relative w-full h-full bg-wh-500 z-0">Image</div> */}
      <div className="relative w-full h-full z-0">
        <Image
          src={post?.image}
          alt="tech"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-gradual z-1" />
      <div className="absolute bottom-0 left-0 p-3 z-2">
        <h4 className="inline-block px-5 py-1 bg-accent-orange text-wh-900 font-semibold">
          category
          {/* {post?.category} */}
        </h4>
        <div className="mt-2 text-wh-100">
          title
          {/* {post?.title} */}
        </div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>;
};

// const Trending = (props: Props) => {
const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="py-2 px-8 bg-wh-900 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        {/* <div className="col-span-2 row-span-2 bg-wh-500"></div>
        <div className="col-span-2 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div> */}
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </section>
  );
};

export default Trending;
