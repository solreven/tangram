"use client";

import Tangram from "./Tangram";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
  const currentUrl = usePathname();

  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  return (
    <header className="bg-slate-500 h-20 text-xl flex justify-end items-center px-6 gap-6 text-white">
      <div className="text-white">
        <Link
          href="/"
          className={`${
            currentUrl === "/" && "underline text-orange-500"
          } underline-offset-2`}
        >
          Hjem
        </Link>
        <Link
          className={`${
            currentUrl === "/arbeid" && "underline"
          } underline-offset-2`}
          href="/arbeid"
        >
          Arbeid
        </Link>
        <Link
          className={`${
            currentUrl === "/omoss" && "underline"
          } underline-offset-2`}
          href="/omoss"
        >
          Om oss
        </Link>
      </div>
    </header>
  );
};
