import Head from "next/head";
import styles from "./PrimaryLayout.module.scss";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>App Template</title>
      </Head>
      <main {...divProps} className={styles.main}>
        {/* <Header /> */}
        <section>{children}</section>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default PrimaryLayout;
