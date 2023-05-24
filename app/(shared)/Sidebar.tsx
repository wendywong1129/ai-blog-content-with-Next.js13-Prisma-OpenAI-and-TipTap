import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="py-3 px-5 bg-wh-900 text-wh-50 text-xs text-center font-bold ">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        className="md:block hidden w-full my-8"
        src={Ad2}
        alt="advert-2"
        placeholder="blur"
        width={500}
        height={1000}
      />
      <h4 className="py-3 px-5 bg-wh-900 text-wh-50 text-xs text-center font-bold ">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          src={AboutProfile}
          alt="about-profile"
          placeholder="blur"
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 text-center font-bold ">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
    </section>
  );
};

export default Sidebar;
