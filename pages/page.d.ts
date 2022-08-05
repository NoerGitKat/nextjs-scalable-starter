import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type NextPageWithLayout<Page = {}> = NextPage<Page> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
