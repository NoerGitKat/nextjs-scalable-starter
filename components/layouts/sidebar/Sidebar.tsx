import Link from "next/link";
import styles from "./Sidebar.module.scss";

export interface ISidebar extends React.ComponentPropsWithoutRef<"div"> {}

const Sidebar: React.FC<ISidebar> = () => {
  const menuItems = ["Home", "About"];

  return (
    <nav className={styles.nav}>
      <input type="search" className={styles.input} placeholder="Search..." />
      {menuItems.map((item) => (
        <Link key={item} href={`/${item !== "Home" ? item.toLowerCase() : ""}`}>
          <a>{item}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
