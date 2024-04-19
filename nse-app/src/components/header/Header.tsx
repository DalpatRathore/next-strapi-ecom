import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainNavigationMenu from "./MainNavigationMenu";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MobileNavigationMenu from "./MobileNavigationMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-5 px-2 h-20 sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <Link href={"/"}>
        <Avatar className="border p-1 w-12 h-12">
          <AvatarImage src="/logo.svg"></AvatarImage>
          <AvatarFallback>NSE</AvatarFallback>
        </Avatar>
      </Link>

      <div className="hidden md:block ml-auto">
        <MainNavigationMenu></MainNavigationMenu>
      </div>
      <div className="mx-5 flex items-center justify-center gap-5 ml-auto md:ml-0">
        <Button>Login</Button>
        <Button variant={"outline"} className="hidden md:block">
          Register
        </Button>
        <div className="block md:hidden">
          <MobileNavigationMenu></MobileNavigationMenu>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
};
export default Header;
