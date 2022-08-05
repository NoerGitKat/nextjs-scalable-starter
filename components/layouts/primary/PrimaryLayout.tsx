import Head from "next/head";

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
        <title>NextJs Fullstack App Template</title>
      </Head>
      <main {...divProps} className="">
        {/* <Header /> */}
        <section className="px-5">{children}</section>
        <div className="m-auto" />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default PrimaryLayout;
