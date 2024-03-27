import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <aside className="flex items-center gap-[2px]">
          <Image
            src="/fuzzieLogo.png"
            width={14}
            height={14}
            alt="fuzzie logo"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold ml-2">Flow Mind</p>
        </aside>
        <div className="grid grid-cols-2 gap-8">
          <nav className="">
            <ul className="flex items-center gap-8 list-none">
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#">Clients</Link>
              </li>
              <li>
                <Link href="#">Docs</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
