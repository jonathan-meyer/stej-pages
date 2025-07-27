import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import Page from "../Page";
import Pages from "../Pages";

const meta: Meta<typeof Pages> = {
  title: "Pages",
  component: Pages,
  tags: ["autodocs"],

  render: ({ children }) => (
    <MemoryRouter>
      <Pages>{children}</Pages>
    </MemoryRouter>
  ),
};

export default meta;
type Story = StoryObj<typeof Pages>;

export const OnePage: Story = {
  args: {
    children: <Page label="Example">Hello Storybook</Page>,
  },
};

export const TwoPages: Story = {
  args: {
    children: [
      <Page label={"One"}>Hello Storybook Page 1</Page>,
      <Page label={"Two"}>Hello Storybook Page 2</Page>,
    ],
  },
};
