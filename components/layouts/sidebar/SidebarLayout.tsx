import Link from "next/link";

export interface ISidebarLayout extends React.ComponentPropsWithoutRef<"div"> {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav>
      <input type="search" className="" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
