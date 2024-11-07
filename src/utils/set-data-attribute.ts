export const setDataAttribute = ({
  attr,
  value,
  element,
}: {
  attr: string;
  value: string;
  element: HTMLElement;
}) => {
  element.setAttribute(attr, value);
};
