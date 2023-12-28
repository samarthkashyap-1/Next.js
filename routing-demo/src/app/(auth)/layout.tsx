"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navbar = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <h1>Auth Layout</h1>
      <div className="flex gap-5">
        {navbar.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link href={item.href} className={isActive ? "font-bold" : ""}>
              {item.name}
            </Link>
          );
        })}
      </div>

      {children}
    </>
  );
}
