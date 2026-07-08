import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe add for group test cases

describe("contect page test cases", () => {
  test("contect page is load or not", () => {
    render(<Contact />);

    const heading = screen.getByText("Neeraj Meena");

    expect(heading).toBeInTheDocument();
  });

  test("contect page kk is load or not", () => {
    // render
    render(<Contact />);
    // quiry
    const heading = screen.getByText("Contact us");
    // accertion
    expect(heading).toBeInTheDocument();
  });
});
