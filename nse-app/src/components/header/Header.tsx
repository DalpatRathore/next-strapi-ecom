import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainNavigationMenu from "./MainNavigationMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 h-20 sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <Link href={"/"}>
        <Avatar className="border p-1 w-12 h-12">
          <AvatarImage src="/logo.svg"></AvatarImage>
          <AvatarFallback>NSE</AvatarFallback>
        </Avatar>
      </Link>

      <MainNavigationMenu></MainNavigationMenu>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
