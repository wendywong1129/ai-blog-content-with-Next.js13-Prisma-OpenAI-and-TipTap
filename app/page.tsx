import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 60; // stay on the page for a long time but have the latest data every 60 seconds

const getPosts = async () => {
  // const posts: Array<Post> = await prisma.post.findMany();
  const posts = await prisma.post.findMany();
  // console.log("posts: ", posts);

  // return posts;

  // Image has "placeholder='blur'" property but is missing the "blurDataURL" property => Solution: format the post to become a static import.
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`); // Instead of a string, it is a statically imported image file
      // console.log("post.image: ", post.image);
      // console.log("imageModule: ", imageModule);
      // console.log("imageModule.default: ", imageModule.default);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  // console.log("formattedPosts: ", formattedPosts);
  return formattedPosts;
};

// export default function Home() {
export default async function Home() {
  // Server Component: once grab all the information(not dynamic), pre-render the components on the backend
  const posts = await getPosts();
  // console.log("posts: ", posts); // Instead of browser console, it shows up in server terminal

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      {/* <Trending /> */}
      <Trending trendingPosts={trendingPosts} />
      <div className="mb-5 gap-10 md:flex">
        <div className="basis-3/4">
          {/* <Tech />
          <Travel />
          <Other /> */}
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
