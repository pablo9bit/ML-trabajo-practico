import Search from "./Search";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full h-16 bg-yellow-300 m-auto pt-5">
      <div className="flex w-[70%] m-auto">
        <Logo />
        <Search />
      </div>
    </header>
  );
};

export default Header;
