import { createContext } from "react";
import { MenuItem } from "./Menu";

export interface PagesState {
  menuItems: MenuItem[];
  pageCount: number;
  scrollTo: (page: number) => void;
}

type PagesContextInterface = PagesState;

const PagesContext = createContext<PagesContextInterface>({
  menuItems: [],
  pageCount: 0,
  scrollTo: () => {},
});

export default PagesContext;
