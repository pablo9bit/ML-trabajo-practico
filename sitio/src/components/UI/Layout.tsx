import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <main className="w-[83%] m-auto">{children}</main>
    </div>
  );
};

export default Layout;
