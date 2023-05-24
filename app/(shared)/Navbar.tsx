import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Ad1 from "public/assets/ad-1.jpg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="w-full px-10 py-4 flex justify-between items-center bg-wh-900 text-wh-10">
        <div className="flex justify-between items-center gap-10">
          <Link href="/">AI BLOG</Link>
          {/* <Link href="/">Trending</Link>
          <Link href="/">About</Link> */}
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        {/* <div>
          <p>Sign In</p>
        </div> */}
      </nav>
      <div className="mt-5 mb-4 mx-10 flex justify-between gap-8">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Blog dedicated towards AI and generation and job automation
          </p>
        </div>
        <div className="relative w-auto h-32 basis-full bg-wh-500">
          <Image
            src={Ad1}
            alt="advert-1"
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
