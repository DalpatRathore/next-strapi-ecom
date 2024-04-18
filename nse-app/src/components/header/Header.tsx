import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainNavigationMenu from "./MainNavigationMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 h-20">
      <Avatar className="border p-1">
        <AvatarImage src="/logo.svg"></AvatarImage>
        <AvatarFallback>NSE</AvatarFallback>
      </Avatar>

      <MainNavigationMenu></MainNavigationMenu>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
