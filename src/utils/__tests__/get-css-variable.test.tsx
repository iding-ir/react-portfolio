import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { getCssVariable } from "../get-css-variable";

describe("getCssVariable", () => {
  it("should return the correct CSS variable value", () => {
    // Arrange
    const testId = "test-id";
    const key: string = "--test-variable-key";
    const value = "100px";

    // Act
    render(<div data-testid={testId} style={{ [key]: value }} />);

    // Assert
    const element = screen.getByTestId(testId);
    const received = getCssVariable({ element, key });
    expect(received).toBe(value);
  });

  it("should return the correct CSS variable value when it is set on the body", () => {
    // Arrange
    const key: string = "--test-variable-key";
    const value = "100px";

    // Act
    document.body.style.setProperty(key, value);

    // Assert
    const received = getCssVariable({ element: document.body, key });
    expect(received).toBe(value);
  });
});
