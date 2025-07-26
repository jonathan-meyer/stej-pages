import { FC } from "react";
import Page from "../Page";
import Pages, { PagesProps } from "../Pages";
import { MemoryRouter } from "react-router";

const Example: FC<PagesProps> = ({ onClick = () => {} }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <MemoryRouter>
        <Pages onClick={onClick}>
          <Page label={"Intro"}>Hello World</Page>
        </Pages>
      </MemoryRouter>
    </div>
  );
};

export default Example;
