const Footer = () => {
  return (
    <footer className="py-10 px-10 bg-wh-900 text-wh-50">
      <div className="sm:flex mx-auto justify-between gap-16">
        {/* FIRST COLUMN */}
        <div className="sm:mt-0 mt-16 basis-1/2">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="sm:mt-0 mt-16 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="sm:mt-0 mt-16 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
