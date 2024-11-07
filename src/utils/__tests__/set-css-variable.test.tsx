import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { setCssVariable } from "../set-css-variable";

describe("setCssVariable", () => {
  it("should set the CSS variable on the element", () => {
    // Arrange
    const testId = "test-id";
    const key: string = "--test-variable-key";
    const value = "100px";

    // Act
    render(<div data-testid={testId} />);
    const element = screen.getByTestId(testId);
    setCssVariable({ element, key, value });

    // Assert
    const received = element.style.getPropertyValue(key);
    expect(received).toBe(value);
  });
});
