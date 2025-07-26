import { createContext, ReactElement } from "react";

export interface PageState {
  offset: number;
  pageMenu?: ReactElement;
}

type PageContextInterface = PageState;

const PageContext = createContext<PageContextInterface>({
  offset: 0,
});

export default PageContext;
