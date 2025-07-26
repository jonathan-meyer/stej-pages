import { ReactElement } from "react";
import { BannerProps } from "./Banner";
import { PageProps } from "./Page";

export const isPage = (el: unknown): el is ReactElement<PageProps> => {
  return (
    typeof el === "object" &&
    el !== null &&
    "props" in el &&
    typeof el.props === "object" &&
    el.props !== null &&
    "label" in el.props
  );
};

export const isHeader = (el: unknown): el is ReactElement<BannerProps> => {
  return (
    typeof el === "object" &&
    el !== null &&
    "props" in el &&
    typeof el.props === "object" &&
    el.props !== null &&
    "type" in el.props &&
    el.props.type === "header"
  );
};

export const isFooter = (el: unknown): el is ReactElement<BannerProps> => {
  return (
    typeof el === "object" &&
    el !== null &&
    "props" in el &&
    typeof el.props === "object" &&
    el.props !== null &&
    "type" in el.props &&
    el.props.type === "footer"
  );
};
