"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, className = "", children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? "border-b-2 border-b-pink-400" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;