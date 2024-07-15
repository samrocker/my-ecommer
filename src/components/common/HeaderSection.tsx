import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/ShopCo.png";
import Link from "next/link";
import SearchIconDesktop from "../../../public/icons/SearchIcon.png";
import SearchIconMobile from "../../../public/icons/SearchIcon-mobile.png";
import CartIcon from "../../../public/icons/CartIcon.png";
import UserIcon from "../../../public/icons/UserIcon.png";
import MenuIcon from "../../../public/icons/MenuIcon.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <section className="w-full sticky top-0 z-50 bg-white shadow-md">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 lg:px-0 w-full flex-between gap-3">
          <div className="flex-[1] lg:flex-[0.4] flex-start gap-5">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={MenuIcon}
                  alt="Menu"
                  className="object-cover block lg:hidden"
                />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="h-screen w-full flex flex-col items-start justify-center">
                  <div className="w-full flex flex-col gap-5">
                    <Link
                      href="/"
                      className="text-primary text-3xl font-Satoshi font-bold"
                    >
                      Shop
                    </Link>
                    <Link
                      href="/"
                      className="text-primary text-3xl font-Satoshi font-bold"
                    >
                      On Sale
                    </Link>
                    <Link
                      href="/"
                      className="text-primary text-3xl font-Satoshi font-bold"
                    >
                      New Arrivals
                    </Link>
                    <Link
                      href="/"
                      className="text-primary text-3xl font-Satoshi font-bold"
                    >
                      Brands
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Image src={Logo} alt="Logo" className="w-20 lg:w-36 object-cover" />
          </div>
          <div className="flex-[2] hidden lg:flex-between gap-5">
            <div className="flex-start gap-5">
              <Link
                href="/"
                className="text-primary text-md font-Satoshi font-bold"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="text-primary text-md font-Satoshi font-bold"
              >
                On Sale
              </Link>
              <Link
                href="/"
                className="text-primary text-md font-Satoshi font-bold"
              >
                New Arrivals
              </Link>
              <Link
                href="/"
                className="text-primary text-md font-Satoshi font-bold"
              >
                Brands
              </Link>
            </div>
            <form
              action="/"
              className="flex-[1] flex-end bg-black/10 rounded-3xl px-5 gap-2"
            >
              <Image src={SearchIconDesktop} alt="Search" className="object-cover" />
              <input
                type="text"
                placeholder="Search for products..."
                className="px-5 py-2 w-full flex-start bg-transparent broder-none rounded-3xl placeholder:text-sm placeholder:font-Satoshi placeholder:font-bold placeholder:text-black/40"
              />
            </form>
          </div>
          <div className="flex-[1] lg:flex-[0.3] flex-end gap-3">
            <Link href="/">
              <Image src={SearchIconMobile} alt="Search" className="w-5 lg:w-6 lg:hidden object-cover" />
            </Link>
            <Link href="/">
              <Image src={CartIcon} alt="Cart" className="w-5 lg:w-6 object-cover" />
            </Link>
            <Link href="/">
              <Image src={UserIcon} alt="User" className="w-5 lg:w-6 object-cover" />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
