import Link from "next/link";
import styles from "./SidebarLayout.module.scss";

export interface ISidebarLayout extends React.ComponentPropsWithoutRef<"div"> {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const menuItems = ["Home", "About"];

  return (
    <nav className={styles.nav}>
      <input type="search" className="" placeholder="Search..." />
      {menuItems.map((item) => (
        <Link key={item} href={`/${item !== "Home" ? item.toLowerCase() : ""}`}>
          <a>{item}</a>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarLayout;
