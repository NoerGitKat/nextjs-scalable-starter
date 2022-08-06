import { AppProps } from "next/app";
import "../styles/Global.scss";
import { NextPageWithLayout } from "./page";

interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: IAppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
