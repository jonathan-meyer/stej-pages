import { ReactNode } from "react";

export interface Backgroud {
  color?: string;
  image?: string;
}

export interface PageProps {
  label: string;
  hideFromMenu?: boolean;
  background?: Backgroud;
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return children;
};

export default Page;
