import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainNavigationMenu from "./MainNavigationMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 h-20 sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
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
