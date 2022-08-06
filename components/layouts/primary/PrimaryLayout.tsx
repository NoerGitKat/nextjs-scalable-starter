import Head from "next/head";
import styles from "./PrimaryLayout.module.scss";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
}) => {
  return (
    <>
      <Head>
        <title>App Template</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
