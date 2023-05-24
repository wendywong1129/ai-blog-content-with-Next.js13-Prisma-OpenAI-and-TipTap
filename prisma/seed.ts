import { PrismaClient } from "@prisma/client";
import { posts } from "./seeds/posts";

const prisma: any = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
