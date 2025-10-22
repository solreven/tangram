"use client";

import Tangram from "./Tangram";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Burger } from "./Burger";

export const Header = () => {
  const currentUrl = usePathname();

  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  return (
    <header className="sticky top-0 py-1 pr-5 rounded-sm bg-stone-50/1 backdrop-blur-sm border border-stone-800/1 h-fit text-xl flex justify-between items-center text-red shadow-[0px_4px_30px_0px_rgba(0,_0,_0,_0.1)]">
      <Tangram />
      <Burger />
    </header>
  );
};

//   <div className="text-red-500 flex justify-between w-80">
//     <Link
//       href="/"
//       className={`${
//         currentUrl === "/" && "underline text-black"
//       } underline-offset-2`}
//     >
//       Hjem
//     </Link>
//     <Link
//       className={`${
//         currentUrl === "/arbeid" && "underline"
//       } underline-offset-2`}
//       href="/arbeid"
//     >
//       Arbeid
//     </Link>
//     <Link
//       className={`${
//         currentUrl === "/omoss" && "underline"
//       } underline-offset-2`}
//       href="/omoss"
//     >
//       Om oss
//     </Link>
//   </div>;
