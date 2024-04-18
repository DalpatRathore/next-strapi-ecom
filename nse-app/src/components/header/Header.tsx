import ThemeToggle from "../ThemeToggle";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5">
      <MainNav></MainNav>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
