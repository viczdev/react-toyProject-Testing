import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("test", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting></Greeting>);

    // Act
    // Assert
    const hwElement = screen.getByText("Hello World!");
    expect(hwElement).toBeInTheDocument();
  });

  test("render good to see you", () => {
    // Arrange
    render(<Greeting></Greeting>);

    // Act
    // Assert
    const gtsElement = screen.getByText("good to see you", { exact: false });
    expect(gtsElement).toBeInTheDocument();
  });

  test("render good to see you", () => {
    // Arrange
    render(<Greeting></Greeting>);

    // Act
    const btElement = screen.getByRole("button");
    userEvent.click(btElement);

    // Assert
    const cElement = screen.getByText("Changed", { exact: false });
    expect(cElement).toBeInTheDocument();

    const gtsElement = screen.queryByText("good to see you", { exact: false });
    expect(gtsElement).toBeNull();
  });
});
