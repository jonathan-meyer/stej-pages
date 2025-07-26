import { ReactNode } from "react";

export interface BannerProps {
  type: "header" | "footer";
  children: ReactNode;
}

const Banner = ({ children }: BannerProps) => {
  return children;
};

export default Banner;
