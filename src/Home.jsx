import React from "react";
import PricingCard from "./component/card/PricingCard";
const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className=" text-[49px] font-extrabold text-white">Pricing card </h1>
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <PricingCard price={200} PricePackageTitle={"basic"} />
          <PricingCard price={400} PricePackageTitle={"standerd"} />
          <PricingCard price={600} PricePackageTitle={"daimond"} />
          <PricingCard price={200} PricePackageTitle={"basic"} />
          <PricingCard price={400} PricePackageTitle={"standerd"} />
          <PricingCard price={600} PricePackageTitle={"daimond"} />
        </div>
      </div>
      {/* here category deisgn page  */}
    </>
  );
};

export default Home;
