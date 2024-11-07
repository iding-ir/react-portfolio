import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { setDataAttribute } from "../set-data-attribute";

describe("setDataAttribute", () => {
  it("should set the CSS variable on the element", () => {
    // Arrange
    const testId = "test-id";
    const attr: string = "data-attribute-test";
    const value = "some-value";

    // Act
    render(<div data-testid={testId} />);
    const element = screen.getByTestId(testId);
    setDataAttribute({ element, attr, value });

    // Assert
    const received = element.getAttribute(attr);
    expect(received).toBe(value);
  });
});
