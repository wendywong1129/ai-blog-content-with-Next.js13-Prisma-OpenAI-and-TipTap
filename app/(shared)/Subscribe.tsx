const Subscribe = () => {
  return (
    <div className="px-5 py-10 bg-wh-10 text-center">
      <h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
      <p className="w-5/6 mx-auto my-3 text-wh-500">
        Enter email address to get top news and great deals
      </p>
      <input
        className=" w-5/6 min-w-[100px] px-5 py-2 text-center border-2"
        placeholder="Enter Email Address"
      />
      <button className="w-5/6 min-w-[100px] py-2 px-5 mt-3 bg-accent-red text-wh-10 font-semibold">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
