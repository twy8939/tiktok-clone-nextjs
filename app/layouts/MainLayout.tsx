"use client";

import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";
import SideNavBar from "./includes/SideNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <TopNav />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname === "/" ? "max-w-[1140px]" : ""
        }`}
      >
        <SideNavBar />
        {children}
      </div>
    </>
  );
}
