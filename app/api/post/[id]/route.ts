// baseURL/api/post/[id] (back-end setup)
import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

// the API calls that are fully dependent on the name is a Next.js 13 new feature
export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title, content } = await request.json(); // if we're sending information from the front-end in the body object, await request.json() is how we grab the information from the request

    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
