import React from "react";
import Image from "next/image";
import ProductImage1 from "../../../public/images/ProductImages/VERTICAL STRIPED SHIRT.png";
import ProductImage2 from "../../../public/images/ProductImages/COURAGE GRAPHIC T-SHIRT.png";
import ProductImage3 from "../../../public/images/ProductImages/LOOSE FIT BERMUDA SHORTS.png";
import ProductImage4 from "../../../public/images/ProductImages/FADED SKINNY JEANS.png";
import StartFull from "../../../public/icons/StarFull.png";
import StartHalf from "../../../public/icons/Starhalf.png";

const TopSellerSection = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 px-5 w-full flex-between flex-col gap-10">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-IntegralCF font-extrabold uppercase">
            top selling
            </h1>
          </div>
          <div className="flex-[2] w-full flex-center flex-wrap gap-5 lg:gap-10">
            <div className="w-[256px] flex-between flex-col gap-5">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage1}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] px-2 w-full flex flex-col gap-1 items-start justify-center">
                <h1 className="text-sm font-Satoshi font-bold">
                VERTICAL STRIPED SHIRT
                </h1>
                <span className="w-full flex-start gap-3">
                  <div className="flex gap-1">
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartHalf}
                      alt=""
                      width={10}
                      height={10}
                      className=" object-cover"
                    />
                  </div>
                  <p className="font-Satoshi ">5.0/5</p>
                </span>
                <h1 className="text-xl font-Satoshi font-bold">$212</h1>
              </div>
            </div>
            <div className="w-[256px] flex-between flex-col gap-5">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage2}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] px-2 w-full flex flex-col gap-1 items-start justify-center">
                <h1 className="text-sm font-Satoshi font-bold">COURAGE GRAPHIC T-SHIRT</h1>
                <span className="w-full flex-start gap-3">
                  <div className="flex gap-1">
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartHalf}
                      alt=""
                      width={10}
                      height={10}
                      className=" object-cover"
                    />
                  </div>
                  <p className="font-Satoshi ">4.0/5</p>
                </span>
                <h1 className="text-xl font-Satoshi font-bold">$145</h1>
              </div>
            </div>
            <div className="w-[256px] flex-between flex-col gap-5">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage3}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] px-2 w-full flex flex-col gap-1 items-start justify-center">
                <h1 className="text-sm font-Satoshi font-bold">LOOSE FIT BERMUDA SHORTS</h1>
                <span className="w-full flex-start gap-3">
                  <div className="flex gap-1">
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartHalf}
                      alt=""
                      width={10}
                      height={10}
                      className=" object-cover"
                    />
                  </div>
                  <p className="font-Satoshi ">3.0/5</p>
                </span>
                <h1 className="text-xl font-Satoshi font-bold">$80</h1>
              </div>
            </div>
            <div className="w-[256px] flex-between flex-col gap-5">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage4}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] px-2 w-full flex flex-col gap-1 items-start justify-center">
                <h1 className="text-sm font-Satoshi font-bold">
                FADED SKINNY JEANS
                </h1>
                <span className="w-full flex-start gap-3">
                  <div className="flex gap-1">
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartFull}
                      alt=""
                      className="w-5 object-cover"
                    />
                    <Image
                      src={StartHalf}
                      alt=""
                      width={10}
                      height={10}
                      className=" object-cover"
                    />
                  </div>
                  <p className="font-Satoshi ">4.5/5</p>
                </span>
                <h1 className="text-xl font-Satoshi font-bold">$210</h1>
              </div>
            </div>
          </div>
          <div className="flex-[1] w-full flex-center">
            <span className="py-2 px-7 rounded-full border-[1px] border-primary/20 text-sm">View All</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TopSellerSection;
