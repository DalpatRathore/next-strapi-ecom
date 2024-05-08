"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
const MobileNavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon" asChild>
          <Menu className="w-6 h-6"></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="my-5">
          <SheetTitle>Welcome to the Next Strapi Ecom</SheetTitle>
        </SheetHeader>
        <div className="space-y-5">
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"}>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"}>
              <Link href="/orders">Orders</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"}>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"}>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"}>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavigationMenu;
