"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`cursor-pointer hover:text-gray-600 block ${
          isActive ? "font-bold text-blue-400" : "text-white"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}
