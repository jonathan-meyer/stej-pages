import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Pages from "../Pages";
import { MemoryRouter } from "react-router";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(
      <MemoryRouter>
        <Pages />
      </MemoryRouter>,
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
