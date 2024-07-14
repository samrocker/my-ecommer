import React from "react";
import Image from "next/image";
import HeroBGDesktop from "../../../public/images/HeroBG.png";
import HeroBGMobile from "../../../public/images/HeroBG.png";
import { Button } from "../ui/button";
const HeroSection = () => {
  return (
    <section className="w-full bg-hero">
      <main className="max-w-[1440px] m-auto">
        <div className="w-full md:flex-center relative">
          <Image src={HeroBGDesktop} alt="" className="w-full hidden md:block object-cover" />
          <Image src={HeroBGMobile} alt="" className="w-full md:hidden object-cover" />
          <div className="h-full w-full px-5 flex flex-col items-start justify-center gap-8 absolute">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                FIND CLOTHES
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                THAT MATCHES
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                YOUR STYLE
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="text-xs lg:text-sm text-black/75 font-Satoshi">
                Browse through our diverse range of meticulously crafted
                garments, designed
              </p>
              <p className="text-xs lg:text-sm text-black/75 font-Satoshi">
                to bring out your individuality and cater to your sense of
                style.
              </p>
            </div>
            <Button className="py-6 px-10 text-sm lg:text-lg font-Satoshi rounded-full">
              Shop Now
            </Button>
            <div className="flex flex-wrap gap-5">
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                    200+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                    International Brands
                  </p>
                </div>
              </div>
              <span className="h-[70px] w-[2px] flex-center bg-black/10" />
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                    2,000+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <span className="h-[70px] w-[2px] flex-center bg-black/10" />
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                  30,000+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                  Happy 
                  </p>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                  Customer 
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* mobile section */}
          <div className="h-full w-full px-5 flex md:hidden flex-col items-start justify-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                FIND CLOTHES
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                THAT MATCHES
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-IntegralCF font-extrabold">
                YOUR STYLE
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="text-xs lg:text-sm text-black/75 font-Satoshi">
                Browse through our diverse range of meticulously crafted
                garments, designed
              </p>
              <p className="text-xs lg:text-sm text-black/75 font-Satoshi">
                to bring out your individuality and cater to your sense of
                style.
              </p>
            </div>
            <Button className="py-6 px-10 text-sm lg:text-lg font-Satoshi rounded-full">
              Shop Now
            </Button>
            <div className="flex flex-wrap gap-5">
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                    200+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                    International Brands
                  </p>
                </div>
              </div>
              <span className="h-[70px] w-[2px] flex-center bg-black/10" />
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                    2,000+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <span className="h-[70px] w-[2px] flex-center bg-black/10" />
              <div className="flex-[1] flex-center flex-col">
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-4xl font-Satoshi font-bold">
                  30,000+
                  </h1>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                  Happy 
                  </p>
                  <p className="text-xs lg:text-sm text-black/50 font-Satoshi font-bold">
                  Customer 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
