"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className={"w-full max-w-[264px]"}>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt={"hamburger"}
            className={"cursor-pointer sm:hidden"}
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className={"border-none bg-[var(--color-dark-1)] px-2"}
        >
          <SheetHeader className={"p-0"}>
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>
          <Link href={"/"} className={"flex items-center gap-1"}>
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
            />
          </Link>
          <div
            className={
              "flex h-[calc(100vh-72px)] justify-between overflow-y-auto flex-col"
            }
          >
            <SheetClose asChild>
              <section
                className={"flex h-full flex-col gap-6 pt-16 text-white"}
              >
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-[var(--color-blue-1)]": isActive },
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className={"font-semibold"}>{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
export default MobileNav;
