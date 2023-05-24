import Card from "./Card";
import { Post } from "@prisma/client";

type Props = {
  otherPosts: Array<Post>;
};

// const Other = (props: Props) => {
const Other = ({ otherPosts }: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* HEADER */}
      <p className="my-8 font-bold text-2xl">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          className="sm:mt-0 mt-5"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="sm:mt-0 mt-5"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className="sm:mt-0 mt-5"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className="sm:mt-0 mt-5"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
