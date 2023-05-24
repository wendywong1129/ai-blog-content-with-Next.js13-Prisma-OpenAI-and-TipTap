import { prisma } from "@/app/api/client";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Sidebar from "@/app/(shared)/Sidebar";
import Content from "@/app/post/[id]/Content";

type Props = { params: { id: string } };

export const revalidate = 60; // stay on the page for a long time but have the latest data every 60 seconds

const getPost = async (id: string) => {
  // const post = await prisma.post.findUnique({
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  // return post

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;

  // const post = await getPost(id);
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  // console.log("post: ", post);
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
