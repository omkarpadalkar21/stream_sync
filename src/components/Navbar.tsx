import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav
      className={
        "flex flex-between fixed z-50 w-full bg-[var(--color-dark-1)] px-4 py-3 sm:px-6 sm:py-4 lg:px-10"
      }
    >
      <Link href={"/"} className={"flex items-center gap-1"} prefetch>
        <Image
          src={"/icons/Logo.svg"}
          alt={"Stream Sync Logo"}
          width={48}
          height={48}
          className={"max-sm:size-10"}
        />
        <Image
          src={"/icons/StreamSyncLogoDarkText.svg"}
          alt={"Stream Sync Text"}
          width={192}
          height={192}
          className={"max-sm:hidden"}
        />
      </Link>
      <div className={"flex-between gap-5"}>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
